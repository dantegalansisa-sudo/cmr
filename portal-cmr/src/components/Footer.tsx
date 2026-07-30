import { ShieldCheck, Clock, Share2 } from 'lucide-react'
import { BRAND, footerColumns } from '../data/mockData'

const ICONS = { ShieldCheck, Clock, Share2 } as const

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {footerColumns.map((col) => {
            const Icon = ICONS[col.icon as keyof typeof ICONS]
            return (
              <div className="footer-col" key={col.title}>
                <div className="footer-icon">
                  <Icon size={19} />
                </div>
                <div>
                  <h5>{col.title}</h5>
                  {col.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            )
          })}

          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/images/logo.png"
              alt={`${BRAND.name} — ${BRAND.fullName}`}
            />
            <p>{BRAND.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
