const STATUS_CLASS = {
  Delivered: 'badge-success',
  Shipped: 'badge-info',
  Processing: 'badge-warning',
  Pending: 'badge-warning',
  Cancelled: 'badge-danger',
  Active: 'badge-success',
  Maintenance: 'badge-warning',
  'Low Stock': 'badge-danger',
  'In Stock': 'badge-success',
}

function StatusBadge({ status }) {
  const cls = STATUS_CLASS[status] ?? 'badge-neutral'
  return <span className={`badge ${cls}`}>{status}</span>
}

export default StatusBadge
