function toneForPct(pct) {
  if (pct >= 90) return 'danger'
  if (pct >= 70) return 'warning'
  return 'success'
}

function CapacityBar({ pct, label }) {
  const tone = toneForPct(pct)
  return (
    <div className="capacity-bar">
      <div className="capacity-bar-track">
        <div
          className={`capacity-bar-fill tone-${tone}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="capacity-bar-label">{label ?? `${pct}%`}</span>
    </div>
  )
}

export default CapacityBar
