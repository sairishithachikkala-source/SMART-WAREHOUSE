function StatCard({ label, value, Icon, tone = 'default', hint }) {
  return (
    <div className={`stat-card tone-${tone}`}>
      <div className="stat-card-icon">
        <Icon width={22} height={22} />
      </div>
      <div className="stat-card-body">
        <span className="stat-card-value">{value}</span>
        <span className="stat-card-label">{label}</span>
        {hint && <span className="stat-card-hint">{hint}</span>}
      </div>
    </div>
  )
}

export default StatCard
