import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ minimal }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}><span className="logo-mark">▲</span>ByteSpace</Link>
        {!minimal && (
          <>
            <nav className="nav-links" aria-label="Primary">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/search">Courses</NavLink>
              <NavLink to="/creator">Creators</NavLink>
            </nav>
            <div className="nav-actions">
              <Link to="/login">Sign In</Link>
              <Link to="/register">Join Us</Link>
              <Link to="/search" aria-label="Cart" style={{ fontSize: 20 }}>🛍</Link>
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
          <Link to="/login" onClick={() => setOpen(false)}>Sign In</Link>
          <Link to="/register" className="btn-lime" onClick={() => setOpen(false)}>Join Us</Link>
        </nav>
      )}
    </header>
  )
}
