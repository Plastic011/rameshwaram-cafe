import { locations } from '../data.js'

export default function Locations() {
  return (
    <section className="section alt" id="locations">
      <h2 className="section-title">Locations &amp; Timings</h2>
      <div className="grid grid-2">
        {locations.map((loc) => (
          <article className="location-card" key={loc.id}>
            <div className="map-thumb">
              <svg width="100%" height="100%" viewBox="0 0 200 100">
                <rect width="200" height="100" fill="#E7E2D2" />
                <path
                  d="M0 60 L60 40 L110 55 L160 30 L200 45 L200 100 L0 100 Z"
                  fill="#D7CFB4"
                />
                <circle cx="100" cy="45" r="7" fill="#C0533B" />
              </svg>
            </div>
            <h4>{loc.title}</h4>
            <p className="addr">{loc.addr}</p>
            <p className="hours">{loc.hours}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
