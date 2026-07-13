import AnimatedLogo from './AnimatedLogo.jsx'

export default function Hero() {
  return (
    <section className="hero" id="menu">
      <div className="hero-media hero-media-logo">
        <AnimatedLogo loop />
      </div>

      <div className="hero-content">
        <h1>
          Authentic South Indian
          <br />
          Flavours, Served Fresh
        </h1>
        <p>
          Experience the purity, tradition, and unforgettable taste of South
          India in every bite, prepared with love and heritage.
        </p>
        <div className="hero-actions">
          <a href="#dishes" className="btn btn-filled">
            View Menu
          </a>
          <a href="#locations" className="btn btn-outline">
            Visit Our Café
          </a>
        </div>
      </div>
    </section>
  )
}
