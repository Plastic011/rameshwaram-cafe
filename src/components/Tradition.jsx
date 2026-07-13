import { traditionItems } from '../data.js'

const icons = {
  batter: (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <circle cx="23" cy="23" r="22" fill="#F3E7C9" />
      <rect x="14" y="20" width="18" height="14" rx="2" fill="#C89B3C" />
      <ellipse cx="23" cy="20" rx="9" ry="4" fill="#E2B04E" />
      <rect x="20" y="10" width="6" height="10" rx="2" fill="#8C6A2F" />
    </svg>
  ),
  ghee: (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <circle cx="23" cy="23" r="22" fill="#F3E7C9" />
      <path d="M16 18 Q23 12 30 18 L28 32 Q23 36 18 32 Z" fill="#C89B3C" />
      <ellipse cx="23" cy="18" rx="7" ry="3" fill="#E2B04E" />
    </svg>
  ),
  recipes: (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <circle cx="23" cy="23" r="22" fill="#F3E7C9" />
      <rect x="15" y="12" width="16" height="22" rx="2" fill="#C89B3C" />
      <rect x="18" y="16" width="10" height="2" fill="#FAF6EA" />
      <rect x="18" y="20" width="10" height="2" fill="#FAF6EA" />
      <rect x="18" y="24" width="7" height="2" fill="#FAF6EA" />
    </svg>
  ),
  hygiene: (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <circle cx="23" cy="23" r="22" fill="#F3E7C9" />
      <rect x="13" y="24" width="8" height="10" rx="1" fill="#C89B3C" />
      <rect x="23" y="18" width="8" height="16" rx="1" fill="#B67F2E" />
      <rect x="15" y="14" width="4" height="10" rx="1" fill="#8C6A2F" />
    </svg>
  ),
}

export default function Tradition() {
  return (
    <section className="section" id="tradition">
      <h2 className="section-title">Our Tradition &amp; Quality</h2>
      <div className="grid grid-4 tradition-grid">
        {traditionItems.map((item) => (
          <div className="tradition-item" key={item.id}>
            {icons[item.id]}
            <h4>{item.label}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
