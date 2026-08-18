import { useMemo, useState } from 'react'

import { inventory, categories } from '../../data/inventory'

const categoryIcons = {
  Electronics: '💻',
  Apparel: '👕',
  Groceries: '🛒',
  Furniture: '🪑',
  'Toys & Games': '🎮',
  'Tools & Hardware': '🛠️',
  'Health & Beauty': '💊',
  Automotive: '🚗',
}

const productImages = {
  'Wireless Bluetooth Headphones':
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
  '4K Smart LED TV 55"':
    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80',
  'USB-C Fast Charger 65W':
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80',
  "Men's Running Shoes":
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  "Women's Winter Jacket":
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  'Cotton T-Shirt Pack (3)':
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  'Organic Rice 5kg Bag':
    'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=900&q=80',
  'Extra Virgin Olive Oil 1L':
    'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80',
  'Assorted Snack Bars (24pk)':
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  'Ergonomic Office Chair':
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  'Wooden Dining Table Set':
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  'Adjustable Standing Desk':
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  'Building Blocks Set (200pc)':
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
  'Remote Control Drone':
    'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=80',
  'Board Game Bundle':
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
  'Cordless Drill Kit':
    'https://images.unsplash.com/photo-1581147036324-c17ac5c8f4a6?auto=format&fit=crop&w=900&q=80',
  'Tool Box Set 120pc':
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80',
  'Vitamin C Supplement 500mg':
    'https://images.unsplash.com/photo-1607619056574-7b8d0c0b7b2e?auto=format&fit=crop&w=900&q=80',
  'Electric Toothbrush':
    'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
  'Car Phone Mount Holder':
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
  'All-Season Tire Set (4)':
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80',
  'LED Headlight Bulb Kit':
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80',
}

function CustomerPortal({ onBack }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutMessage, setCheckoutMessage] = useState('')

  const visibleProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return inventory.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [searchTerm, selectedCategory])

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.sku === product.sku)

      if (existingItem) {
        return currentCart.map((item) =>
          item.sku === product.sku
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentCart, { ...product, quantity: 1 }]
    })

    setCartOpen(true)
  }

  const removeFromCart = (sku) => {
    setCart((currentCart) => currentCart.filter((item) => item.sku !== sku))
    setCheckoutMessage('')
  }

  const updateCartItemQuantity = (sku, delta) => {
    setCart((currentCart) =>
      currentCart.flatMap((item) => {
        if (item.sku !== sku) return [item]

        const nextQuantity = item.quantity + delta
        if (nextQuantity <= 0) return []

        return [{ ...item, quantity: nextQuantity }]
      }),
    )
  }

  const clearCart = () => {
    setCart([])
    setCheckoutMessage('')
  }

  const handleCheckout = () => {
    if (cart.length === 0) return

    const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
    setCheckoutMessage(
      `Order placed successfully for ${itemCount} item${itemCount > 1 ? 's' : ''} totaling $${cartTotal.toFixed(2)}.`,
    )
    setCart([])
  }

  return (
    <div className="customer-portal">
      <header className="customer-header">
        <div className="customer-header-left">
          <button type="button" className="customer-back-button" onClick={onBack}>
            ← Back
          </button>

          <div className="customer-brand">
            <div className="customer-brand-icon">SW</div>
            <div>
              <h1>SmartWarehouse</h1>
              <span>Customer portal</span>
            </div>
          </div>
        </div>

        <label className="customer-search" aria-label="Search products">
          <span>⌕</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search products, categories..."
          />
        </label>

        <button
          type="button"
          className="customer-cart"
          onClick={() => setCartOpen((open) => !open)}
        >
          Cart <span>{cartCount}</span>
        </button>
      </header>

      <section className="customer-hero">
        <div className="customer-hero-content">
          <span className="customer-eyebrow">SMART SHOPPING</span>
          <h2>Build your next order from warehouse-ready products.</h2>
          <p>
            Explore curated essentials, compare categories, and place your cart in
            a few clicks from the most trusted inventory network.
          </p>
        </div>
      </section>

      <main className="customer-content">
        <section className="customer-section">
          <div className="customer-section-header">
            <h2>Browse categories</h2>
            <p>Shop by product type and discover the best available inventory.</p>
          </div>

          <div className="customer-category-grid">
            <button
              type="button"
              className={`customer-category-card ${selectedCategory === 'All' ? 'active-category' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              <span className="category-icon">🛍️</span>
              <div>
                <strong>All categories</strong>
                <span>{inventory.length} products</span>
              </div>
            </button>

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`customer-category-card ${selectedCategory === category ? 'active-category' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                <span className="category-icon">{categoryIcons[category] || '📦'}</span>
                <div>
                  <strong>{category}</strong>
                  <span>
                    {
                      inventory.filter((product) => product.category === category)
                        .length
                    }{' '}
                    items
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="customer-section">
          <div className="customer-section-header product-heading">
            <div>
              <h2>Featured products</h2>
              <p>
                {selectedCategory === 'All'
                  ? 'Complete selection'
                  : `${selectedCategory} collection`}
              </p>
            </div>
          </div>

          {visibleProducts.length === 0 ? (
            <div className="customer-empty">
              <h3>No products found</h3>
              <p>Try another search or switch to a different category.</p>
            </div>
          ) : (
            <div className="customer-product-grid">
              {visibleProducts.map((product) => (
                <article key={product.sku} className="customer-product-card">
                  <div className="product-image-wrapper">
                    <img
                      src={
                        productImages[product.name] ||
                        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'
                      }
                      alt={product.name}
                    />
                  </div>

                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      <span>★</span> 4.8 • {product.quantity} in stock
                    </div>
                    <strong>${product.price.toFixed(2)}</strong>
                    <button type="button" onClick={() => addToCart(product)}>
                      Add to cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {cartOpen && (
          <>
            <div
              className="customer-cart-overlay"
              onClick={() => setCartOpen(false)}
            />

            <aside className="customer-cart-panel">
              <div className="customer-cart-panel-header">
                <h3>Your cart</h3>
                <button type="button" onClick={() => setCartOpen(false)}>
                  Close
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="customer-cart-empty">Your cart is empty.</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.sku} className="customer-cart-item">
                      <div className="customer-cart-item-image">
                        <img
                          src={
                            productImages[item.name] ||
                            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'
                          }
                          alt={item.name}
                        />
                      </div>

                      <div className="customer-cart-item-copy">
                        <strong>{item.name}</strong>
                        <span>${item.price.toFixed(2)} each</span>
                      </div>

                      <div className="customer-cart-quantity">
                        <button
                          type="button"
                          onClick={() => updateCartItemQuantity(item.sku, -1)}
                          aria-label={`Decrease ${item.name}`}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateCartItemQuantity(item.sku, 1)}
                          aria-label={`Increase ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="customer-remove-item"
                        onClick={() => removeFromCart(item.sku)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}

                  <div className="customer-cart-summary">
                    <div className="customer-cart-total">
                      <span>Subtotal</span>
                      <strong>${cartTotal.toFixed(2)}</strong>
                    </div>

                    <button type="button" className="customer-clear-cart" onClick={clearCart}>
                      Clear cart
                    </button>
                  </div>

                  {checkoutMessage && (
                    <div className="customer-checkout-success">{checkoutMessage}</div>
                  )}

                  <button
                    type="button"
                    className="customer-checkout-button"
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                  >
                    Proceed to checkout
                  </button>
                </>
              )}
            </aside>
          </>
        )}
      </main>
    </div>
  )
}

export default CustomerPortal
