function PortalSelector({ onSelect }) {
  return (
    <div className="portal-selector">
      <div className="portal-selector-content">

        <div className="portal-brand">
          <div className="portal-brand-icon">SW</div>
          <span>SmartWarehouse</span>
        </div>

        <div className="portal-heading">
          <span>SMART WAREHOUSE PLATFORM</span>
          <h1>Choose your portal</h1>
          <p>
            Access shopping, warehouse operations, or platform administration
            from one centralized system.
          </p>
        </div>

        <div className="portal-options">

          <button
            type="button"
            className="portal-card customer-portal-option"
            onClick={() => onSelect('customer')}
          >
            <div className="portal-card-image customer-image">
              🛍️
            </div>

            <div className="portal-card-content">
              <span className="portal-card-label">SHOPPING</span>
              <h2>Customer Portal</h2>
              <p>
                Browse products, explore categories and place orders.
              </p>
              <span className="portal-card-link">
                Enter Customer Portal →
              </span>
            </div>
          </button>

          <button
            type="button"
            className="portal-card warehouse-portal-option"
            onClick={() => onSelect('warehouse')}
          >
            <div className="portal-card-image warehouse-image">
              🏭
            </div>

            <div className="portal-card-content">
              <span className="portal-card-label">OPERATIONS</span>
              <h2>Warehouse Portal</h2>
              <p>
                Access individual warehouse operations and inventory.
              </p>
              <span className="portal-card-link">
                Enter Warehouse Portal →
              </span>
            </div>
          </button>

          <button
            type="button"
            className="portal-card admin-portal-option"
            onClick={() => onSelect('admin')}
          >
            <div className="portal-card-image admin-image">
              📊
            </div>

            <div className="portal-card-content">
              <span className="portal-card-label">MANAGEMENT</span>
              <h2>Platform Admin</h2>
              <p>
                Manage warehouses, inventory, orders and the entire platform.
              </p>
              <span className="portal-card-link">
                Enter Admin Portal →
              </span>
            </div>
          </button>

        </div>

        <p className="portal-footer">
          SmartWarehouse Management System · Hackathon Demo
        </p>

      </div>
    </div>
  )
}

export default PortalSelector