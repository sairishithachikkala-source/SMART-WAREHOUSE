// Sample inventory data for the Smart Warehouse Management System demo.
// quantity <= reorderLevel is treated as "Low Stock".

export const inventory = [
  { sku: 'SKU-1001', name: 'Wireless Bluetooth Headphones', category: 'Electronics', quantity: 45, reorderLevel: 30, warehouseId: 'WH-001', price: 59.99 },
  { sku: 'SKU-1002', name: '4K Smart LED TV 55"', category: 'Electronics', quantity: 12, reorderLevel: 15, warehouseId: 'WH-002', price: 429.99 },
  { sku: 'SKU-1003', name: 'USB-C Fast Charger 65W', category: 'Electronics', quantity: 210, reorderLevel: 50, warehouseId: 'WH-001', price: 19.99 },
  { sku: 'SKU-1004', name: "Men's Running Shoes", category: 'Apparel', quantity: 8, reorderLevel: 20, warehouseId: 'WH-003', price: 74.99 },
  { sku: 'SKU-1005', name: "Women's Winter Jacket", category: 'Apparel', quantity: 65, reorderLevel: 25, warehouseId: 'WH-002', price: 89.99 },
  { sku: 'SKU-1006', name: 'Cotton T-Shirt Pack (3)', category: 'Apparel', quantity: 300, reorderLevel: 100, warehouseId: 'WH-004', price: 24.99 },
  { sku: 'SKU-1007', name: 'Organic Rice 5kg Bag', category: 'Groceries', quantity: 5, reorderLevel: 40, warehouseId: 'WH-003', price: 12.5 },
  { sku: 'SKU-1008', name: 'Extra Virgin Olive Oil 1L', category: 'Groceries', quantity: 90, reorderLevel: 30, warehouseId: 'WH-001', price: 15.75 },
  { sku: 'SKU-1009', name: 'Assorted Snack Bars (24pk)', category: 'Groceries', quantity: 150, reorderLevel: 50, warehouseId: 'WH-004', price: 22 },
  { sku: 'SKU-1010', name: 'Ergonomic Office Chair', category: 'Furniture', quantity: 18, reorderLevel: 15, warehouseId: 'WH-002', price: 189.99 },
  { sku: 'SKU-1011', name: 'Wooden Dining Table Set', category: 'Furniture', quantity: 4, reorderLevel: 10, warehouseId: 'WH-003', price: 549.99 },
  { sku: 'SKU-1012', name: 'Adjustable Standing Desk', category: 'Furniture', quantity: 27, reorderLevel: 12, warehouseId: 'WH-001', price: 329.99 },
  { sku: 'SKU-1013', name: 'Building Blocks Set (200pc)', category: 'Toys & Games', quantity: 60, reorderLevel: 25, warehouseId: 'WH-004', price: 34.99 },
  { sku: 'SKU-1014', name: 'Remote Control Drone', category: 'Toys & Games', quantity: 9, reorderLevel: 20, warehouseId: 'WH-002', price: 79.99 },
  { sku: 'SKU-1015', name: 'Board Game Bundle', category: 'Toys & Games', quantity: 120, reorderLevel: 30, warehouseId: 'WH-001', price: 29.99 },
  { sku: 'SKU-1016', name: 'Cordless Drill Kit', category: 'Tools & Hardware', quantity: 33, reorderLevel: 20, warehouseId: 'WH-003', price: 99.99 },
  { sku: 'SKU-1017', name: 'Tool Box Set 120pc', category: 'Tools & Hardware', quantity: 7, reorderLevel: 15, warehouseId: 'WH-004', price: 64.99 },
  { sku: 'SKU-1018', name: 'Vitamin C Supplement 500mg', category: 'Health & Beauty', quantity: 210, reorderLevel: 60, warehouseId: 'WH-002', price: 14.99 },
  { sku: 'SKU-1019', name: 'Electric Toothbrush', category: 'Health & Beauty', quantity: 14, reorderLevel: 25, warehouseId: 'WH-001', price: 39.99 },
  { sku: 'SKU-1020', name: 'Car Phone Mount Holder', category: 'Automotive', quantity: 175, reorderLevel: 50, warehouseId: 'WH-003', price: 11.99 },
  { sku: 'SKU-1021', name: 'All-Season Tire Set (4)', category: 'Automotive', quantity: 6, reorderLevel: 10, warehouseId: 'WH-004', price: 399.99 },
  { sku: 'SKU-1022', name: 'LED Headlight Bulb Kit', category: 'Automotive', quantity: 48, reorderLevel: 20, warehouseId: 'WH-002', price: 27.5 },
]

export const categories = [...new Set(inventory.map((item) => item.category))].sort()
