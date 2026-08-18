// Lightweight inline SVG icon set — avoids pulling in an icon library dependency.

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function DashboardIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </svg>
  )
}

export function WarehouseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10.5 12 4l9 6.5" />
      <path d="M5 9v11h14V9" />
      <path d="M9 20v-6h6v6" />
    </svg>
  )
}

export function InventoryIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 8.5 12 4 3 8.5l9 4.5 9-4.5Z" />
      <path d="M3 8.5V16l9 4.5 9-4.5V8.5" />
      <path d="M12 13v7.5" />
    </svg>
  )
}

export function OrdersIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 3v3h6V3" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
      <path d="M9 19h3" />
    </svg>
  )
}

export function SearchIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export function AlertIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="m10.29 3.86-8.18 14.16A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.39-1.98l.01-.06-8.18-14.1a1.5 1.5 0 0 0-2.43 0Z" />
    </svg>
  )
}

export function BoxIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 8.5 12 4 3 8.5l9 4.5 9-4.5Z" />
      <path d="M3 8.5V16l9 4.5 9-4.5V8.5" />
    </svg>
  )
}

export function ClipboardIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 3v3h6V3" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  )
}

export function ChevronRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

export function MapPinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

export function UserIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.4-3.7 4.4-5.5 7.5-5.5s6.1 1.8 7.5 5.5" />
    </svg>
  )
}
