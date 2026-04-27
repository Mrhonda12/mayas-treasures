import { CONTACT_EMAIL, CONTACT_INSTAGRAM } from '../contact'
import './Footer.css'

function EmailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__brand-name">Maya's Treasures</p>
          <p className="footer__tagline">Quality finds. Second lives.</p>
        </div>

        <div className="footer__contact">
          <p className="footer__contact-heading">Contact Us</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="footer__link"
          >
            <EmailIcon />
            {CONTACT_EMAIL}
          </a>
          <a
            href={`https://instagram.com/${CONTACT_INSTAGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <InstagramIcon />
            @{CONTACT_INSTAGRAM}
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Maya's Treasures</p>
      </div>
    </footer>
  )
}
