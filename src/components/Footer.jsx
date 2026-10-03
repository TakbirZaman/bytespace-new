import { useState } from 'react'
import { Link } from 'react-router-dom'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const YEAR = new Date().getFullYear()

const COLS = [
  { h: 'Browse', links: [['Featured Courses', '/search'], ['Featured Categories', '/search'], ['Business', '/search?category=Business'], ['Design', '/search?category=Design'], ['Data', '/search?category=Data']] },
  { h: 'Development', links: [['Web Development', '/search?category=Development'], ['Marketing', '/search?category=Marketing'], ['Photography', '/search?category=Photography'], ['Finance', '/search?category=Finance'], ['Music', '/search?category=Music']] },
  { h: 'Platform', links: [['Become a Creator', '/creator'], ['All courses', '/search'], ['Sign in', '/login'], ['Create account', '/register'], ['About', '/']] },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState(null)

  function subscribe(e) {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setMsg({ ok: false, text: 'Enter a valid email address.' })
      return
    }
    try {
      const list = JSON.parse(localStorage.getItem('bytespace:newsletter') ?? '[]')
      localStorage.setItem('bytespace:newsletter', JSON.stringify([...list, email.trim()]))
    } catch {
      /* ignore */
    }
    setMsg({ ok: true, text: 'Subscribed — check your inbox to confirm.' })
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-nav">
          <div className="footer-brand">
            <div>
              <div className="logo logo-dark"><span className="logo-mark" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l9 16H3z" /></svg></span>ByteSpace</div>
              <p className="footer-note">Stay up to date with new courses and creator releases by joining our newsletter.</p>
            </div>
            <div>
              <form className="news" onSubmit={subscribe}>
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input id="newsletter-email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
                <button className="news-btn" type="submit">Subscribe</button>
              </form>
              {msg && <p className={msg.ok ? 'news-ok' : 'news-err'} role="status">{msg.text}</p>}
              <p className="footer-consent">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
            </div>
          </div>
          <div className="footer-cols">
            {COLS.map(col => (
              <div key={col.h}>
                <h4>{col.h}</h4>
                <ul>{col.links.map(([label, to]) => <li key={label}><Link to={to}>{label}</Link></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-copy">
          <hr />
          <div className="bottom">
            <span>© {YEAR} ByteSpace. All rights reserved.</span>
            <span>Privacy Policy &nbsp; Terms of Service &nbsp; Cookies Settings</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
