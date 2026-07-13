import { testimonials } from '../data.js'

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <h2 className="section-title">Customer Love</h2>
      <div className="grid grid-3">
        {testimonials.map((t) => (
          <article className="testimonial-card" key={t.id}>
            <div className="stars">★★★★★</div>
            <p>"{t.quote}"</p>
            <div className="reviewer">
              <span className="avatar">{t.initial}</span>
              <span className="reviewer-name">{t.name}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
