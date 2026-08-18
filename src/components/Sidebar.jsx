import {
  DashboardIcon,
  WarehouseIcon,
  InventoryIcon,
  OrdersIcon,
  BoxIcon,
  CloseIcon,
} from './Icons'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', Icon: DashboardIcon },
  { id: 'warehouses', label: 'Warehouses', Icon: WarehouseIcon },
  { id: 'inventory', label: 'Inventory', Icon: InventoryIcon },
  { id: 'orders', label: 'Orders', Icon: OrdersIcon },
]

function Sidebar({ currentPage, onNavigate, isOpen, onClose }) {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'is-visible' : ''}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? 'is-open' : ''}`}>
        <div className="sidebar-brand">
          <span className="sidebar-brand-icon">
            <BoxIcon width={22} height={22} />
          </span>

          <div className="sidebar-brand-text">
            <span className="sidebar-brand-name">SmartWarehouse</span>
            <span className="sidebar-brand-tag">
              Management System
            </span>
          </div>

          <button
            type="button"
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <CloseIcon width={20} height={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              className={`sidebar-nav-item ${
                currentPage === id ? 'is-active' : ''
              }`}
              onClick={() => onNavigate(id)}
            >
              <Icon width={19} height={19} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p className="sidebar-footer-title">Hackathon Demo Build</p>
          <p className="sidebar-footer-sub">
            Frontend-only · Mock data
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar