// Aggregation helpers used across the dashboard and pages.
// Everything here operates on the local mock data — no network calls.

export function isLowStock(item) {
  return item.quantity <= item.reorderLevel
}

export function getTotalStock(inventory) {
  return inventory.reduce((sum, item) => sum + item.quantity, 0)
}

export function getLowStockItems(inventory) {
  return inventory.filter(isLowStock)
}

export function getPendingOrders(orders) {
  return orders.filter((order) => order.status === 'Pending')
}

export function getWarehouseStock(warehouseId, inventory) {
  return inventory
    .filter((item) => item.warehouseId === warehouseId)
    .reduce((sum, item) => sum + item.quantity, 0)
}

export function getWarehouseProductCount(warehouseId, inventory) {
  return inventory.filter((item) => item.warehouseId === warehouseId).length
}

export function getWarehouseOrderCount(warehouseId, orders) {
  return orders.filter((order) => order.warehouseId === warehouseId).length
}

export function getWarehouseUsage(warehouse, inventory) {
  const stock = getWarehouseStock(warehouse.id, inventory)
  const pct = Math.min(100, Math.round((stock / warehouse.capacity) * 100))
  return { stock, pct }
}

export function getWarehouseName(warehouseId, warehouses) {
  return warehouses.find((w) => w.id === warehouseId)?.name ?? 'Unknown'
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
