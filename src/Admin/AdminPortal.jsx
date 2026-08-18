import { useState } from 'react'

function AdminPortal({ onBack }) {
  const [activeSection, setActiveSection] = useState('overview')

  const overviewStats = [
    { label: 'Active Warehouses', value: '4', detail: '3 active · 1 maintenance' },
    { label: 'Inventory Units', value: '18,642', detail: 'Across all storage hubs' },
    { label: 'Open Orders', value: '24', detail: '7 need review' },
    { label: 'Monthly Revenue', value: '₹4.8L', detail: 'Forecast +12.4%' },
  ]

  const recentAlerts = [
    { type: 'Low stock', item: 'Wireless Scanner', warehouse: 'Central', severity: 'high' },
    { type: 'Maintenance', item: 'East Warehouse', warehouse: 'Chennai', severity: 'medium' },
    { type: 'Dispatch delay', item: 'Order #ORD-1003', warehouse: 'North', severity: 'low' },
  ]

  // =========================
  // ADMIN DASHBOARD
  // =========================

  const renderContent = () => {
    if (activeSection === 'overview') {
      return (
        <>
          <div className="admin-page-header">
            <div>
              <h1>Platform Overview</h1>
              <p>Manage your Smart Warehouse platform.</p>
            </div>
          </div>

          <div className="admin-stats-grid">
            {overviewStats.map((stat) => (
              <div className="admin-stat-card" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <small>{stat.detail}</small>
              </div>
            ))}
          </div>

          <div className="admin-overview-grid">
            <div className="admin-panel admin-highlight-panel">
              <div className="admin-panel-header-row">
                <h2>Warehouse Status</h2>
                <button type="button" className="admin-secondary-button small-button">
                  View all
                </button>
              </div>

              <div className="admin-table">
                <div className="admin-table-header">
                  <span>Warehouse</span>
                  <span>Location</span>
                  <span>Capacity</span>
                  <span>Status</span>
                </div>

                <div className="admin-table-row">
                  <span>Central Warehouse</span>
                  <span>Hyderabad</span>
                  <span>82%</span>
                  <span className="status-active">Active</span>
                </div>

                <div className="admin-table-row">
                  <span>North Warehouse</span>
                  <span>Vizag</span>
                  <span>64%</span>
                  <span className="status-active">Active</span>
                </div>

                <div className="admin-table-row">
                  <span>East Warehouse</span>
                  <span>Chennai</span>
                  <span>91%</span>
                  <span className="status-maintenance">Maintenance</span>
                </div>

                <div className="admin-table-row">
                  <span>South Warehouse</span>
                  <span>Bangalore</span>
                  <span>48%</span>
                  <span className="status-active">Active</span>
                </div>
              </div>
            </div>

            <div className="admin-panel admin-side-panel">
              <div className="admin-panel-header-row">
                <h2>Quick Actions</h2>
              </div>

              <div className="admin-action-stack">
                <button type="button" className="admin-action-button">
                  + New Warehouse
                </button>
                <button type="button" className="admin-action-button secondary-action">
                  🧾 Review Orders
                </button>
                <button type="button" className="admin-action-button secondary-action">
                  📦 Reorder Stock
                </button>
              </div>

              <div className="admin-alert-list">
                {recentAlerts.map((alert) => (
                  <div key={alert.item} className="admin-alert-item">
                    <span className={`admin-alert-dot ${alert.severity}`} />
                    <div>
                      <strong>{alert.type}</strong>
                      <p>{alert.item}</p>
                    </div>
                    <small>{alert.warehouse}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )
    }

    if (activeSection === 'warehouses') {
      const warehouseData = [
        {
          name: 'Central Warehouse',
          location: 'Hyderabad',
          capacity: 82,
          status: 'Active',
          products: 420,
          staff: 18,
          orders: 8,
        },
        {
          name: 'North Warehouse',
          location: 'Vizag',
          capacity: 64,
          status: 'Active',
          products: 315,
          staff: 14,
          orders: 5,
        },
        {
          name: 'East Warehouse',
          location: 'Chennai',
          capacity: 91,
          status: 'Maintenance',
          products: 280,
          staff: 12,
          orders: 7,
        },
        {
          name: 'South Warehouse',
          location: 'Bangalore',
          capacity: 48,
          status: 'Active',
          products: 233,
          staff: 10,
          orders: 4,
        },
      ]

      return (
        <>
          <div className="admin-page-header">
            <div>
              <h1>Warehouse Management</h1>
              <p>Monitor and manage all platform warehouses.</p>
            </div>

            <button className="admin-primary-button">
              + Add Warehouse
            </button>
          </div>

          <div className="admin-cards-grid">
            {warehouseData.map((warehouse) => (
              <div
                className="admin-management-card"
                key={warehouse.name}
              >
                <h3>{warehouse.name}</h3>

                <p>📍 {warehouse.location}</p>

                <p>
                  Storage Capacity:{' '}
                  <strong>{warehouse.capacity}%</strong>
                </p>

                <div className="warehouse-capacity-track">
                  <div
                    className="warehouse-capacity-fill"
                    style={{
                      width: `${warehouse.capacity}%`,
                    }}
                  ></div>
                </div>

                <div className="warehouse-details-grid">
                  <div>
                    <span>Products</span>
                    <strong>{warehouse.products}</strong>
                  </div>

                  <div>
                    <span>Staff</span>
                    <strong>{warehouse.staff}</strong>
                  </div>

                  <div>
                    <span>Orders</span>
                    <strong>{warehouse.orders}</strong>
                  </div>
                </div>

                <div className="warehouse-card-footer">
                  <span
                    className={
                      warehouse.status === 'Active'
                        ? 'status-active'
                        : 'status-maintenance'
                    }
                  >
                    {warehouse.status}
                  </span>

                  <button className="admin-secondary-button">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    }
    if (activeSection === 'inventory') {
      return (
        <>
          <div className="admin-page-header">
            <div>
              <h1>Inventory Overview</h1>
              <p>Monitor stock across all warehouses.</p>
            </div>
          </div>

          <div className="admin-panel">
            <div className="admin-table">
              <div className="admin-table-header">
                <span>Product</span>
                <span>Warehouse</span>
                <span>Stock</span>
                <span>Status</span>
              </div>

              <div className="admin-table-row">
                <span>Wireless Scanner</span>
                <span>Central Warehouse</span>
                <span>8</span>
                <span className="status-low">Low Stock</span>
              </div>

              <div className="admin-table-row">
                <span>Laptop Stand</span>
                <span>North Warehouse</span>
                <span>156</span>
                <span className="status-active">In Stock</span>
              </div>

              <div className="admin-table-row">
                <span>Packing Boxes</span>
                <span>North Warehouse</span>
                <span>12</span>
                <span className="status-low">Low Stock</span>
              </div>

              <div className="admin-table-row">
                <span>USB Keyboard</span>
                <span>South Warehouse</span>
                <span>240</span>
                <span className="status-active">In Stock</span>
              </div>
            </div>
          </div>
        </>
      )
    }

    if (activeSection === 'orders') {
      return (
        <>
          <div className="admin-page-header">
            <div>
              <h1>Order Management</h1>
              <p>Monitor orders across the platform.</p>
            </div>
          </div>

          <div className="admin-panel">
            <div className="admin-table">
              <div className="admin-table-header">
                <span>Order ID</span>
                <span>Customer</span>
                <span>Warehouse</span>
                <span>Status</span>
              </div>

              <div className="admin-table-row">
                <span>#ORD-1001</span>
                <span>Apex Retail</span>
                <span>Central Warehouse</span>
                <span className="status-active">Delivered</span>
              </div>

              <div className="admin-table-row">
                <span>#ORD-1002</span>
                <span>Nova Stores</span>
                <span>North Warehouse</span>
                <span className="status-active">Shipped</span>
              </div>

              <div className="admin-table-row">
                <span>#ORD-1003</span>
                <span>Urban Mart</span>
                <span>East Warehouse</span>
                <span className="status-warning">Processing</span>
              </div>

              <div className="admin-table-row">
                <span>#ORD-1004</span>
                <span>Daily Needs</span>
                <span>South Warehouse</span>
                <span className="status-warning">Pending</span>
              </div>
            </div>
          </div>
        </>
      )
    }

    if (activeSection === 'users') {
      return (
        <>
          <div className="admin-page-header">
            <div>
              <h1>User Management</h1>
              <p>Manage customers and warehouse staff.</p>
            </div>
          </div>

          <div className="admin-stats-grid">
            <div className="admin-stat-card">
              <span>Customers</span>
              <strong>62</strong>
              <small>Registered customers</small>
            </div>

            <div className="admin-stat-card">
              <span>Warehouse Staff</span>
              <strong>20</strong>
              <small>Across all warehouses</small>
            </div>

            <div className="admin-stat-card">
              <span>Platform Admins</span>
              <strong>4</strong>
              <small>Administrative accounts</small>
            </div>
          </div>

          <div className="admin-panel">
            <h2>User Access</h2>
            <p>
              User accounts and permissions can be managed from this section.
            </p>
          </div>
        </>
      )
    }

    if (activeSection === 'settings') {
      return (
        <>
          <div className="admin-page-header">
            <div>
              <h1>Platform Settings</h1>
              <p>Configure Smart Warehouse platform preferences.</p>
            </div>
          </div>

          <div className="admin-panel">
            <h2>General Settings</h2>

            <div className="settings-row">
              <div>
                <strong>Platform Name</strong>
                <p>Smart Warehouse</p>
              </div>

              <button className="admin-secondary-button">
                Edit
              </button>
            </div>

            <div className="settings-row">
              <div>
                <strong>Currency</strong>
                <p>Indian Rupee (₹)</p>
              </div>

              <button className="admin-secondary-button">
                Edit
              </button>
            </div>

            <div className="settings-row">
              <div>
                <strong>Platform Status</strong>
                <p>Operational</p>
              </div>

              <span className="status-active">
                Online
              </span>
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <div className="admin-dashboard">

      {/* SIDEBAR */}

      <aside className="admin-sidebar">

        <div className="admin-brand">
          <div className="admin-brand-icon">
            SW
          </div>

          <div>
            <strong>SmartWarehouse</strong>
            <span>Platform Admin</span>
          </div>
        </div>

        <nav className="admin-nav">

          <button
            className={activeSection === 'overview' ? 'active' : ''}
            onClick={() => setActiveSection('overview')}
          >
            📊 Overview
          </button>

          <button
            className={activeSection === 'warehouses' ? 'active' : ''}
            onClick={() => setActiveSection('warehouses')}
          >
            🏢 Warehouses
          </button>

          <button
            className={activeSection === 'inventory' ? 'active' : ''}
            onClick={() => setActiveSection('inventory')}
          >
            📦 Inventory
          </button>

          <button
            className={activeSection === 'orders' ? 'active' : ''}
            onClick={() => setActiveSection('orders')}
          >
            📋 Orders
          </button>

          <button
            className={activeSection === 'users' ? 'active' : ''}
            onClick={() => setActiveSection('users')}
          >
            👥 Users
          </button>

          <button
            className={activeSection === 'settings' ? 'active' : ''}
            onClick={() => setActiveSection('settings')}
          >
            ⚙️ Settings
          </button>

        </nav>

        <button
          className="admin-back-button"
          onClick={onBack}
        >
          ← Back to Portals
        </button>

      </aside>

      {/* MAIN CONTENT */}

      <main className="admin-main">
        {renderContent()}
      </main>

    </div>
  )
}

export default AdminPortal