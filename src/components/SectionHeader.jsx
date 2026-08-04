export default function SectionHeader({ tag, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
