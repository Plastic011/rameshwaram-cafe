import { useState } from 'react'
import Logo from './Logo.jsx'
import { navLinks } from '../data.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Logo animated />
        <nav className={`main-nav ${open ? 'open' : ''}`} id="mainNav">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={i === 0 ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="nav-toggle"
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
