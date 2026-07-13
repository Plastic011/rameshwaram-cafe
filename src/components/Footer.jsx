import Logo from './Logo.jsx'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M14.5 8.5H17V5h-2.5C12.6 5 11 6.6 11 9v2H9v3.5h2V21h3.5v-6.5H17l.5-3.5h-3V9c0-.5.3-1 1-1Z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.8.1 4.1 4.1 0 0 0 3.9 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2Z" />
      </svg>
    ),
  },
]

const footerNavGroups = [
  {
    heading: 'Explore',
    links: [
      { href: '#menu', label: 'Menu' },
      { href: '#signature', label: 'Breakfast' },
      { href: '#dishes', label: 'Special Dosas' },
    ],
  },
  {
    heading: 'Café',
    links: [
      { href: '#tradition', label: 'About Us' },
      { href: '#locations', label: 'Locations' },
      { href: '#footer', label: 'Contact' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-top">
        <Logo light />
        <p className="footer-tagline">
          Serving heritage South Indian flavours since day one.
        </p>
      </div>

      <div className="footer-cols">
        {footerNavGroups.map((group) => (
          <nav className="footer-col" key={group.heading} aria-label={group.heading}>
            <h5>{group.heading}</h5>
            {group.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        ))}

        <div className="footer-col contact-col">
          <h5>Contact</h5>
          <a href="tel:+919827972976">+91 9827 2976</a>
          <a href="mailto:rameshwaram@cafe.com">rameshwaram@cafe.com</a>
        </div>
      </div>

      <div className="footer-social">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <p className="copyright">© {year} Rameshwaram Café. All rights reserved.</p>
    </footer>
  )
}
