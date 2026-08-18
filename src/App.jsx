import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import StatCard from './components/StatCard'
import StatusBadge from './components/StatusBadge'
import CapacityBar from './components/CapacityBar'
import LowStockAlerts from './components/LowStockAlerts'

import CustomerPortal from './components/customer/CustomerPortal'
import WarehousePortal from './components/warehouse/WarehousePortal'
import AdminPortal from './admin/AdminPortal'
import PortalSelector from './components/portal/PortalSelector'

import {
  BoxIcon,
  WarehouseIcon,
  InventoryIcon,
  OrdersIcon,
} from './components/Icons'

import './App.css'

const lowStockItems = [
  {
    id: 1,
    name: 'Wireless Scanner',
    warehouse: 'Central Warehouse',
    stock: 8,
  },
  {
    id: 2,
    name: 'Packing Boxes',
    warehouse: 'North Warehouse',
    stock: 12,
  },
  {
    id: 3,
    name: 'Barcode Labels',
    warehouse: 'East Warehouse',
    stock: 15,
  },
]

const warehouses = [
  {
    id: 1,
    name: 'Central Warehouse',
    location: 'Hyderabad',
    capacity: 82,
    status: 'Active',
  },
  {
    id: 2,
    name: 'North Warehouse',
    location: 'Vizag',
    capacity: 64,
    status: 'Active',
  },
  {
    id: 3,
    name: 'East Warehouse',
    location: 'Chennai',
    capacity: 91,
    status: 'Maintenance',
  },
  {
    id: 4,
    name: 'South Warehouse',
    location: 'Bangalore',
    capacity: 48,
    status: 'Active',
  },
]

const inventory = [
  {
    id: 1,
    name: 'Wireless Scanner',
    category: 'Electronics',
    stock: 8,
    warehouse: 'Central Warehouse',
    status: 'Low Stock',
  },
  {
    id: 2,
    name: 'Laptop Stand',
    category: 'Accessories',
    stock: 156,
    warehouse: 'North Warehouse',
    status: 'In Stock',
  },
  {
    id: 3,
    name: 'Packing Boxes',
    category: 'Packaging',
    stock: 12,
    warehouse: 'North Warehouse',
    status: 'Low Stock',
  },
  {
    id: 4,
    name: 'Barcode Labels',
    category: 'Packaging',
    stock: 15,
    warehouse: 'East Warehouse',
    status: 'Low Stock',
  },
  {
    id: 5,
    name: 'USB Keyboard',
    category: 'Electronics',
    stock: 240,
    warehouse: 'South Warehouse',
    status: 'In Stock',
  },
]

const orders = [
  {
    id: '#ORD-1001',
    customer: 'Apex Retail',
    items: 12,
    warehouse: 'Central Warehouse',
    status: 'Delivered',
    date: '17 Aug 2026',
  },
  {
    id: '#ORD-1002',
    customer: 'Nova Stores',
    items: 8,
    warehouse: 'North Warehouse',
    status: 'Shipped',
    date: '17 Aug 2026',
  },
  {
    id: '#ORD-1003',
    customer: 'Urban Mart',
    items: 15,
    warehouse: 'East Warehouse',
    status: 'Processing',
    date: '16 Aug 2026',
  },
  {
    id: '#ORD-1004',
    customer: 'Daily Needs',
    items: 6,
    warehouse: 'South Warehouse',
    status: 'Pending',
    date: '16 Aug 2026',
  },
]

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedPortal, setSelectedPortal] = useState(null)

  const navigate = (page) => {
    setCurrentPage(page)
    setSidebarOpen(false)
  }

  // CUSTOMER PORTAL
  if (selectedPortal === 'customer') {
    return <CustomerPortal onBack={() => setSelectedPortal(null)} />
  }

  // WAREHOUSE PORTAL
  if (selectedPortal === 'warehouse') {
    return (
    <WarehousePortal
      onBack={() => setSelectedPortal(null)}
    />
  )
  }
    // ADMIN PORTAL
  if (selectedPortal === 'admin') {
    return (
      <AdminPortal
        onBack={() => setSelectedPortal(null)}
      />
    )
  }

  // PORTAL SELECTION SCREEN
  if (!selectedPortal) {
    return <PortalSelector onSelect={setSelectedPortal} />
  }

  // PLATFORM ADMIN PORTAL
  return (
    <div className="app-shell">

      <Sidebar
        currentPage={currentPage}
        onNavigate={navigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-area">

        <Topbar
          currentPage={currentPage}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="page-content">

          {/* DASHBOARD */}

          {currentPage === 'dashboard' && (
            <>
              <section className="stats-grid">

                <StatCard
                  label="Total Warehouses"
                  value="4"
                  Icon={WarehouseIcon}
                  hint="All facilities"
                />

                <StatCard
                  label="Total Products"
                  value="1,248"
                  Icon={BoxIcon}
                  hint="Across all warehouses"
                />

                <StatCard
                  label="Total Stock"
                  value="18,642"
                  Icon={InventoryIcon}
                  hint="Units available"
                />

                <StatCard
                  label="Pending Orders"
                  value="24"
                  Icon={OrdersIcon}
                  tone="warning"
                  hint="Needs attention"
                />

              </section>

              <section className="dashboard-grid">

                <div className="panel">

                  <div className="section-header">
                    <div>
                      <h2>Warehouse Capacity</h2>
                      <p>Current storage utilization</p>
                    </div>
                  </div>

                  <div className="warehouse-list">

                    {warehouses.map((warehouse) => (
                      <div
                        className="warehouse-row"
                        key={warehouse.id}
                      >

                        <div className="warehouse-info">
                          <strong>{warehouse.name}</strong>
                          <span>{warehouse.location}</span>
                        </div>

                        <CapacityBar
                          pct={warehouse.capacity}
                        />

                        <StatusBadge
                          status={warehouse.status}
                        />

                      </div>
                    ))}

                  </div>

                </div>

                <LowStockAlerts
                  items={lowStockItems}
                />

              </section>

              <section className="panel">

                <div className="section-header">
                  <div>
                    <h2>Recent Orders</h2>
                    <p>Latest warehouse activity</p>
                  </div>
                </div>

                <div className="table-wrapper">

                  <table>

                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Warehouse</th>
                        <th>Status</th>
                        <th>Date</th>
                      </tr>
                    </thead>

                    <tbody>

                      {orders.map((order) => (
                        <tr key={order.id}>

                          <td>{order.id}</td>
                          <td>{order.customer}</td>
                          <td>{order.items}</td>
                          <td>{order.warehouse}</td>

                          <td>
                            <StatusBadge
                              status={order.status}
                            />
                          </td>

                          <td>{order.date}</td>

                        </tr>
                      ))}

                    </tbody>

                  </table>

                </div>

              </section>
            </>
          )}

          {/* WAREHOUSES */}

          {currentPage === 'warehouses' && (
            <section className="panel">

              <div className="section-header">

                <div>
                  <h2>Warehouses</h2>
                  <p>Monitor all warehouse facilities</p>
                </div>

              </div>

              <div className="cards-grid">

                {warehouses.map((warehouse) => (
                  <div
                    className="warehouse-card"
                    key={warehouse.id}
                  >

                    <WarehouseIcon
                      width={28}
                      height={28}
                    />

                    <h3>{warehouse.name}</h3>

                    <p>{warehouse.location}</p>

                    <CapacityBar
                      pct={warehouse.capacity}
                    />

                    <StatusBadge
                      status={warehouse.status}
                    />

                  </div>
                ))}

              </div>

            </section>
          )}

          {/* INVENTORY */}

          {currentPage === 'inventory' && (
            <section className="panel">

              <div className="section-header">

                <div>
                  <h2>Inventory</h2>
                  <p>Track products and stock levels</p>
                </div>

              </div>

              <div className="table-wrapper">

                <table>

                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Stock</th>
                      <th>Warehouse</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    {inventory.map((item) => (
                      <tr key={item.id}>

                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.stock}</td>
                        <td>{item.warehouse}</td>

                        <td>
                          <StatusBadge
                            status={item.status}
                          />
                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </section>
          )}

          {/* ORDERS */}

          {currentPage === 'orders' && (
            <section className="panel">

              <div className="section-header">

                <div>
                  <h2>Orders</h2>
                  <p>Monitor and manage customer orders</p>
                </div>

              </div>

              <div className="table-wrapper">

                <table>

                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Items</th>
                      <th>Warehouse</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>

                  <tbody>

                    {orders.map((order) => (
                      <tr key={order.id}>

                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.items}</td>
                        <td>{order.warehouse}</td>

                        <td>
                          <StatusBadge
                            status={order.status}
                          />
                        </td>

                        <td>{order.date}</td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </section>
          )}

        </main>

      </div>

    </div>
  )
}

export default App