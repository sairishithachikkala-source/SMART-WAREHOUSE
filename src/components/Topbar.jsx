import { MenuIcon, UserIcon } from './Icons'

const PAGE_TITLES = {
  dashboard: { title: 'Dashboard', subtitle: 'Real-time overview of your warehouse network' },
  warehouses: { title: 'Warehouses', subtitle: 'Manage facilities and monitor capacity' },
  inventory: { title: 'Inventory', subtitle: 'Track products, stock levels and categories' },
  orders: { title: 'Orders', subtitle: 'Monitor and manage customer orders' },
}

function Topbar({ currentPage, onMenuClick }) {
  const meta = PAGE_TITLES[currentPage] ?? PAGE_TITLES.dashboard

  return (
    <header className="topbar">
      <button
        type="button"
        className="topbar-menu-btn"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
      >
        <MenuIcon width={22} height={22} />
      </button>

      <div className="topbar-titles">
        <h1>{meta.title}</h1>
        <p>{meta.subtitle}</p>
      </div>

      <div className="topbar-user">
        <span className="topbar-user-name">Alex Morgan</span>
        <span className="topbar-user-role">Operations Manager</span>
        <span className="topbar-avatar">
          <UserIcon width={20} height={20} />
        </span>
      </div>
    </header>
  )
}

export default Topbar
