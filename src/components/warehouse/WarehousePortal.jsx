import { useState } from 'react'

const initialWarehouses = [
  {
    id: 1,
    name: 'Hyderabad Warehouse',
    location: 'Hyderabad',
    categories: ['Footwear', 'Fashion', 'Electronics'],
    products: 248,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Vizag Warehouse',
    location: 'Vizag',
    categories: ['Kitchen', 'Utensils', 'Home Essentials'],
    products: 186,
    status: 'Active',
  },
  {
    id: 3,
    name: 'Chennai Warehouse',
    location: 'Chennai',
    categories: ['Electronics', 'Mobiles', 'Accessories'],
    products: 312,
    status: 'Active',
  },
  {
    id: 4,
    name: 'Bangalore Warehouse',
    location: 'Bangalore',
    categories: ['Fashion', 'Footwear', 'Accessories'],
    products: 274,
    status: 'Active',
  },
]

const warehouseStockData = [
  {
    warehouse: 'Hyderabad Warehouse',
    sku: 'SKU-1101',
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    quantity: 48,
    location: 'Aisle B4 · Shelf 2',
    status: 'Healthy',
  },
  {
    warehouse: 'Hyderabad Warehouse',
    sku: 'SKU-1102',
    name: 'Men\'s Running Shoes',
    category: 'Footwear',
    quantity: 22,
    location: 'Aisle C1 · Shelf 3',
    status: 'Healthy',
  },
  {
    warehouse: 'Hyderabad Warehouse',
    sku: 'SKU-1103',
    name: 'Cotton T-Shirt Pack (3)',
    category: 'Fashion',
    quantity: 14,
    location: 'Aisle D2 · Shelf 1',
    status: 'Low',
  },
  {
    warehouse: 'Vizag Warehouse',
    sku: 'SKU-1201',
    name: 'Organic Rice 5kg Bag',
    category: 'Groceries',
    quantity: 68,
    location: 'Aisle A2 · Shelf 5',
    status: 'Healthy',
  },
  {
    warehouse: 'Vizag Warehouse',
    sku: 'SKU-1202',
    name: 'Ceramic Dinner Set',
    category: 'Kitchen',
    quantity: 9,
    location: 'Aisle F1 · Shelf 4',
    status: 'Low',
  },
  {
    warehouse: 'Vizag Warehouse',
    sku: 'SKU-1203',
    name: 'Storage Bin Set',
    category: 'Home Essentials',
    quantity: 31,
    location: 'Aisle E3 · Shelf 2',
    status: 'Healthy',
  },
  {
    warehouse: 'Chennai Warehouse',
    sku: 'SKU-1301',
    name: 'USB-C Fast Charger 65W',
    category: 'Electronics',
    quantity: 76,
    location: 'Aisle B1 · Shelf 2',
    status: 'Healthy',
  },
  {
    warehouse: 'Chennai Warehouse',
    sku: 'SKU-1302',
    name: 'Remote Control Drone',
    category: 'Mobiles',
    quantity: 11,
    location: 'Aisle G2 · Shelf 1',
    status: 'Low',
  },
  {
    warehouse: 'Chennai Warehouse',
    sku: 'SKU-1303',
    name: 'Smartwatch Strap Kit',
    category: 'Accessories',
    quantity: 54,
    location: 'Aisle H3 · Shelf 5',
    status: 'Healthy',
  },
  {
    warehouse: 'Bangalore Warehouse',
    sku: 'SKU-1401',
    name: 'Women\'s Winter Jacket',
    category: 'Fashion',
    quantity: 25,
    location: 'Aisle C4 · Shelf 1',
    status: 'Healthy',
  },
  {
    warehouse: 'Bangalore Warehouse',
    sku: 'SKU-1402',
    name: 'Leather Office Bag',
    category: 'Accessories',
    quantity: 16,
    location: 'Aisle D1 · Shelf 2',
    status: 'Low',
  },
  {
    warehouse: 'Bangalore Warehouse',
    sku: 'SKU-1403',
    name: 'Workout Sneakers',
    category: 'Footwear',
    quantity: 43,
    location: 'Aisle E2 · Shelf 4',
    status: 'Healthy',
  },
]

function WarehousePortal({ onBack }) {
  const [warehouses, setWarehouses] = useState(initialWarehouses)
  const [selectedWarehouse, setSelectedWarehouse] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)

  const [inventoryQuery, setInventoryQuery] = useState('')
  const [inventoryAnswer, setInventoryAnswer] = useState(null)
  const [inventoryLoading, setInventoryLoading] = useState(false)

  const [incident, setIncident] = useState('')
  const [incidentResult, setIncidentResult] = useState(null)
  const [incidentLoading, setIncidentLoading] = useState(false)

  const [newWarehouse, setNewWarehouse] = useState({
    name: '',
    location: '',
    category: '',
  })

  const openWarehouse = (warehouse) => {
    setSelectedWarehouse(warehouse)
    setInventoryAnswer(null)
    setIncidentResult(null)
  }

  const goBackToWarehouses = () => {
    setSelectedWarehouse(null)
  }

  const handleInventoryAI = () => {
    if (!inventoryQuery.trim()) return

    setInventoryLoading(true)
    setInventoryAnswer(null)

    setTimeout(() => {
      const text = inventoryQuery.toLowerCase()

      let answer = {
        location: 'Aisle B4 · Shelf 2',
        reason:
          'The AI selected a medium-load storage zone close to the electronics picking area and shipping route.',
        confidence: '94%',
      }

      if (text.includes('heavy') || text.includes('electronics')) {
        answer = {
          location: 'Aisle B4 · Shelf 2',
          reason:
            'Heavy electronics should be placed on a reinforced lower shelf. This location is close to the electronics zone and reduces movement distance to the shipping bay.',
          confidence: '96%',
        }
      }

      if (text.includes('light') || text.includes('small')) {
        answer = {
          location: 'Aisle C2 · Shelf 4',
          reason:
            'The AI selected an upper shelf because the items are lightweight. This keeps heavy-load shelves available for heavier inventory.',
          confidence: '92%',
        }
      }

      setInventoryAnswer(answer)
      setInventoryLoading(false)
    }, 900)
  }

  const handleIncidentAI = () => {
    if (!incident.trim()) return

    setIncidentLoading(true)
    setIncidentResult(null)

    setTimeout(() => {
      const text = incident.toLowerCase()

      const isSevere =
        text.includes('injury') ||
        text.includes('fire') ||
        text.includes('danger') ||
        text.includes('broken') ||
        text.includes('tipped')

      setIncidentResult({
        severity: isSevere ? 'HIGH' : 'MEDIUM',
        stockUpdate: isSevere
          ? 'Affected stock marked for inspection.'
          : 'No automatic stock adjustment required.',
        reason: isSevere
          ? 'The AI detected potential safety or inventory damage indicators and escalated the incident to the platform admin.'
          : 'The AI classified the incident as an operational issue requiring staff review.',
      })

      setIncidentLoading(false)
    }, 1000)
  }

  const handleAddWarehouse = (e) => {
    e.preventDefault()

    if (
      !newWarehouse.name.trim() ||
      !newWarehouse.location.trim() ||
      !newWarehouse.category.trim()
    ) {
      return
    }

    const warehouse = {
      id: Date.now(),
      name: newWarehouse.name,
      location: newWarehouse.location,
      categories: [newWarehouse.category],
      products: 0,
      status: 'Active',
    }

    setWarehouses((current) => [...current, warehouse])

    setNewWarehouse({
      name: '',
      location: '',
      category: '',
    })

    setShowAddForm(false)
  }

  const stockDetails = warehouseStockData.filter(
    (item) => item.warehouse === selectedWarehouse?.name,
  )

  /*
   * ============================================================
   * WAREHOUSE LOGIN + DASHBOARD
   * ============================================================
   */

  if (selectedWarehouse) {
    /*
     * Show warehouse dashboard directly (no password required)
     */
    return (
      <div className="warehouse-login-page">
        <button
          type="button"
          onClick={goBackToWarehouses}
          style={{
            display: 'block',
            marginBottom: '20px',
            padding: '10px 16px',
            cursor: 'pointer',
          }}
        >
          ← Back to Warehouses
        </button>

        <div className="warehouse-login-card">
          <button
            type="button"
            className="warehouse-back"
            onClick={goBackToWarehouses}
          >
            ← Back to Warehouses
          </button>

          <div className="warehouse-login-icon">WH</div>

          <span className="warehouse-login-label">
            WAREHOUSE DASHBOARD
          </span>

          <h2>{selectedWarehouse.name}</h2>

          <p>
            Warehouse management dashboard. Welcome to the Smart Warehouse system.
          </p>

          <div className="warehouse-dashboard-summary">
            <div>
              <span>Location</span>
              <strong>{selectedWarehouse.location}</strong>
            </div>

            <div>
              <span>Total Products</span>
              <strong>{selectedWarehouse.products}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>{selectedWarehouse.status}</strong>
            </div>
          </div>

          <div className="warehouse-panel" style={{ marginTop: '24px' }}>
            <div className="warehouse-panel-header">
              <div>
                <h2>Stock Details</h2>
                  <p>Current inventory snapshot for {selectedWarehouse.name}</p>
                </div>
              </div>

              <div className="warehouse-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Qty</th>
                      <th>Location</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockDetails.map((item) => (
                      <tr key={item.sku}>
                        <td>
                          <strong>{item.name}</strong>
                        </td>
                        <td>{item.category}</td>
                        <td>{item.quantity}</td>
                        <td>{item.location}</td>
                        <td>
                          <span
                            className={`warehouse-badge ${
                              item.status === 'Low'
                                ? 'warehouse-badge-warning'
                                : 'warehouse-badge-success'
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* AI OPERATIONS */}

            <div className="warehouse-ai-section">
              <div className="ai-section-heading">
                <span className="ai-badge">✦ AI OPERATIONS</span>

                <h3>Smart Warehouse Assistant</h3>

                <p>
                  Ask the AI to optimize inventory and handle operational
                  issues.
                </p>
              </div>

              {/* INVENTORY AI */}

              <div className="ai-card">
                <div className="ai-card-title">
                  <span>📦</span>

                  <div>
                    <strong>Natural Language Inventory Query</strong>
                    <small>Ask where inventory should be stored</small>
                  </div>
                </div>

                <div className="ai-input-row">
                  <input
                    type="text"
                    value={inventoryQuery}
                    onChange={(e) =>
                      setInventoryQuery(e.target.value)
                    }
                    placeholder="Where should I put 50 heavy boxes of electronics?"
                  />

                  <button
                    type="button"
                    onClick={handleInventoryAI}
                    disabled={inventoryLoading}
                  >
                    {inventoryLoading ? 'Analyzing...' : 'Ask AI'}
                  </button>
                </div>

                {inventoryAnswer && (
                  <div className="ai-result">
                    <div className="ai-result-top">
                      <span>Recommended Location</span>

                      <strong>
                        {inventoryAnswer.confidence} confidence
                      </strong>
                    </div>

                    <h4>📍 {inventoryAnswer.location}</h4>

                    <p>
                      <strong>Why AI chose this:</strong>{' '}
                      {inventoryAnswer.reason}
                    </p>
                  </div>
                )}
              </div>

              {/* INCIDENT REPORTER */}

              <div className="ai-card">
                <div className="ai-card-title">
                  <span>🚨</span>

                  <div>
                    <strong>Automated Incident Reporter</strong>
                    <small>
                      Describe an incident in plain language
                    </small>
                  </div>
                </div>

                <textarea
                  value={incident}
                  onChange={(e) => setIncident(e.target.value)}
                  placeholder="Example: Pallet tipped over in Aisle 3, 10 items broken."
                />

                <button
                  type="button"
                  className="ai-action-button"
                  onClick={handleIncidentAI}
                  disabled={incidentLoading}
                >
                  {incidentLoading
                    ? 'AI is analyzing incident...'
                    : 'Analyze Incident'}
                </button>

                {incidentResult && (
                  <div className="ai-result">
                    <div className="incident-result">
                      <span
                        className={`severity severity-${incidentResult.severity.toLowerCase()}`}
                      >
                        {incidentResult.severity} SEVERITY
                      </span>
                    </div>

                    <p>
                      <strong>Stock action:</strong>{' '}
                      {incidentResult.stockUpdate}
                    </p>

                    <p>
                      <strong>Why AI made this decision:</strong>{' '}
                      {incidentResult.reason}
                    </p>

                    <div className="admin-alert">
                      ✓ Mock alert sent to Platform Admin
                    </div>
                  </div>
                )}
              </div>

              {/* STAFF ALLOCATOR */}

              <div className="ai-card staff-ai-card">
                <div className="ai-card-title">
                  <span>👥</span>

                  <div>
                    <strong>AI Staff Allocator</strong>
                    <small>Live workload analysis</small>
                  </div>
                </div>

                <div className="staff-warning">
                  <span>⚠</span>

                  <div>
                    <strong>Packing bottleneck detected</strong>

                    <p>
                      Order volume is currently 27% above the normal
                      packing capacity.
                    </p>
                  </div>
                </div>

                <div className="staff-recommendation">
                  <span>✦ AI Recommendation</span>

                  <strong>
                    Move 2 staff members from Receiving → Packing
                  </strong>

                  <p>
                    <strong>Why:</strong> This should reduce the estimated
                    packing delay by approximately 18 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

  /*
   * ============================================================
   * WAREHOUSE LIST
   * ============================================================
   */

  return (
    <div className="warehouse-portal">
      <header className="warehouse-header">
        <div className="warehouse-brand">
          <div className="warehouse-brand-icon">WH</div>

          <div>
            <h1>SmartWarehouse</h1>
            <span>Warehouse Management System</span>
          </div>
        </div>

        <div className="warehouse-header-center">
          <strong>Warehouse Portal</strong>
          <span>{warehouses.length} active facilities</span>
        </div>

        <div className="warehouse-platform-label">
          PLATFORM ACCESS
        </div>
      </header>

      <main className="warehouse-selection">
        <div className="warehouse-selection-heading">
          <span>WAREHOUSE NETWORK</span>

          <h2>Select a Warehouse</h2>

          <p>
            Choose a warehouse to continue. Each facility has its own
            secure access and inventory.
          </p>
        </div>

        <div className="warehouse-grid">
          {warehouses.map((warehouse) => (
            <button
              type="button"
              className="warehouse-selection-card"
              key={warehouse.id}
              onClick={() => openWarehouse(warehouse)}
            >
              <div className="warehouse-card-top">
                <div className="warehouse-location-icon">
                  WH
                </div>

                <span className="warehouse-status">
                  ● {warehouse.status}
                </span>
              </div>

              <h3>{warehouse.name}</h3>

              <p>{warehouse.location}</p>

              <div className="warehouse-category-list">
                {warehouse.categories.map((category) => (
                  <span key={category}>
                    {category}
                  </span>
                ))}
              </div>

              <div className="warehouse-card-footer">
                <span>Total Products</span>
                <strong>{warehouse.products}</strong>
              </div>
            </button>
          ))}

          {/* ADD WAREHOUSE */}

          <button
            type="button"
            className="warehouse-selection-card"
            onClick={() => setShowAddForm(true)}
          >
            <div className="warehouse-card-top">
              <div className="warehouse-location-icon">
                +
              </div>
            </div>

            <h3>Add Warehouse</h3>

            <p>Create a new warehouse facility</p>

            <div className="warehouse-category-list">
              <span>New Facility</span>
              <span>Custom Location</span>
            </div>

            <div className="warehouse-card-footer">
              <span>Expandable network</span>
              <strong>+</strong>
            </div>
          </button>
        </div>

        {showAddForm && (
          <div className="warehouse-add-panel">
            <div className="warehouse-panel-header">
              <div>
                <h2>Add New Warehouse</h2>

                <p>
                  Add another facility to your warehouse network.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAddForm(false)}
              >
                Close
              </button>
            </div>

            <form
              className="warehouse-add-form"
              onSubmit={handleAddWarehouse}
            >
              <div>
                <label>Warehouse Name</label>

                <input
                  type="text"
                  placeholder="Example: Pune Warehouse"
                  value={newWarehouse.name}
                  onChange={(e) =>
                    setNewWarehouse({
                      ...newWarehouse,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label>Location</label>

                <input
                  type="text"
                  placeholder="Example: Pune"
                  value={newWarehouse.location}
                  onChange={(e) =>
                    setNewWarehouse({
                      ...newWarehouse,
                      location: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label>Main Category</label>

                <input
                  type="text"
                  placeholder="Example: Furniture"
                  value={newWarehouse.category}
                  onChange={(e) =>
                    setNewWarehouse({
                      ...newWarehouse,
                      category: e.target.value,
                    })
                  }
                />
              </div>

              <button
                type="submit"
                className="warehouse-login-button"
              >
                + Add Warehouse
              </button>
            </form>
          </div>
        )}

        <div className="warehouse-portal-back">
          <button
            type="button"
            onClick={onBack}
          >
            ← Back to Portal Selection
          </button>
        </div>
      </main>
    </div>
  )
}

export default WarehousePortal