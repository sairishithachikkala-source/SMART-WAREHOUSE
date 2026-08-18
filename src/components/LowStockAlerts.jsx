import { AlertIcon, ChevronRightIcon } from './Icons'

function LowStockAlerts({ items = [] }) {
  return (
    <section className="low-stock-card">
      <div className="section-header">
        <div>
          <h2>Low Stock Alerts</h2>
          <p>Products that need attention</p>
        </div>

        <button type="button" className="section-action">
          View All
          <ChevronRightIcon width={16} height={16} />
        </button>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <AlertIcon width={24} height={24} />
          <p>No low-stock products.</p>
        </div>
      ) : (
        <div className="low-stock-list">
          {items.map((item) => (
            <div className="low-stock-item" key={item.id}>
              <div className="low-stock-icon">
                <AlertIcon width={18} height={18} />
              </div>

              <div className="low-stock-info">
                <strong>{item.name}</strong>
                <span>{item.warehouse}</span>
              </div>

              <span className="low-stock-quantity">
                {item.stock} left
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default LowStockAlerts