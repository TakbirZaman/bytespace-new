import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CartIcon } from './icons'
import { getEnrollments, getSession, setSession } from '../lib/store'

export default function Navbar({ minimal }) {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(() => getSession())
  const [cartCount, setCartCount] = useState(() => getEnrollments().length)
  const navigate = useNavigate()

  useEffect(() => {
    const sync = () => {
      setUser(getSession())
      setCartCount(getEnrollments().length)
    }
    sync()
    window.addEventListener('storage', sync)
    window.addEventListener('bytespace:auth', sync)
    window.addEventListener('bytespace:enroll', sync)
    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener('bytespace:auth', sync)
      window.removeEventListener('bytespace:enroll', sync)
    }
  }, [])

  function signOut() {
    setSession(null)
    window.dispatchEvent(new Event('bytespace:auth'))
    navigate('/')
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)} aria-label="ByteSpace home"><span className="logo-mark" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l9 16H3z" /></svg></span>ByteSpace</Link>
        {!minimal && (
          <>
            <nav className="nav-links" aria-label="Primary">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/search">Courses</NavLink>
              <NavLink to="/creator">Creators</NavLink>
            </nav>
            <div className="nav-actions">
              {user ? (
                <>
                  <span aria-label={`Signed in as ${user.email}`}>{user.name ?? user.email}</span>
                  <button type="button" className="nav-signout" onClick={signOut}>Sign out</button>
                </>
              ) : (
                <>
                  <Link to="/login">Sign In</Link>
                  <Link to="/register">Join Us</Link>
                </>
              )}
              <Link to="/search" aria-label={`Enrolled courses, ${cartCount} enrolled`}>
                <CartIcon />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </Link>
            </div>
            <button className="hamburger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(o => !o)}>
              {open ? '✕' : '☰'}
            </button>
          </>
        )}
      </div>
      {!minimal && open && (
        <nav className="mobile-menu" aria-label="Mobile">
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/search" onClick={() => setOpen(false)}>Courses</NavLink>
          <NavLink to="/creator" onClick={() => setOpen(false)}>Creators</NavLink>
          {user ? (
            <button type="button" onClick={() => { signOut(); setOpen(false) }}>Sign out ({user.email})</button>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>Sign In</Link>
              <Link to="/register" className="btn-lime" onClick={() => setOpen(false)}>Join Us</Link>
            </>
          )}
        </nav>
      )}
    </header>
  )
}
