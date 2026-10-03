import { useState } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values, fields) {
  const errors = {}
  for (const f of fields) {
    const v = (values[f.label] ?? '').trim()
    if (!v) errors[f.label] = `${f.label} is required`
    else if (f.type === 'email' && !EMAIL_RE.test(v)) errors[f.label] = 'Enter a valid email address'
    else if (f.type === 'password' && v.length < 8) errors[f.label] = 'Password must be at least 8 characters'
  }
  return errors
}

function Shell({ eyebrow, title, promoTitle, promoText, fields, cta, switchText, switchLink, switchLabel, showSocial, forgot }) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | done

  function submit(e) {
    e.preventDefault()
    const errs = validate(values, fields)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setStatus('loading')
    // Fake submit — no backend (see README)
    setTimeout(() => setStatus('done'), 1200)
  }

  return (
    <div className="hero-blue auth-page">
      <div className="container auth-grid">
        <div className="auth-promo">
          <h2>{promoTitle}</h2>
          <p>{promoText}</p>
          <div className="auth-collage">
            <div className="collage-a"><CourseCard course={courses[1]} /></div>
            <div className="collage-b"><CourseCard course={courses[2]} /></div>
            <div className="float-card lime-card">
              <div style={{ fontSize: 16, fontWeight: 500 }}>Happy Students</div>
              <div style={{ fontSize: 10, fontWeight: 700 }}>4.5 (240) ★</div>
              <div className="avatars" style={{ marginTop: 8 }}><i /><i /><i /><i /><i /><i /><b className="dark">2K+</b></div>
            </div>
          </div>
        </div>
        <div className="auth-card-spec">
          <form className="auth-top" onSubmit={submit} noValidate>
            <div>
              <div className="auth-eyebrow">{eyebrow}</div>
              <h1>{title}</h1>
            </div>
            <div className="afields">
              {fields.map(f => (
                <div className="afield" key={f.label}>
                  <label htmlFor={`auth-${f.label}`}>{f.label}</label>
                  <input
                    id={`auth-${f.label}`}
                    type={f.type ?? 'text'}
                    placeholder={f.placeholder}
                    value={values[f.label] ?? ''}
                    onChange={e => setValues(v => ({ ...v, [f.label]: e.target.value }))}
                    aria-invalid={Boolean(errors[f.label])}
                  />
                  {errors[f.label] && <span className="aerror">{errors[f.label]}</span>}
                </div>
              ))}
              {forgot && <Link to="/login" className="forgot">Forgot password?</Link>}
              <div className="abtn-row">
                <button className="abtn" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Please wait…' : cta}
                </button>
              </div>
              {status === 'done' && <p className="asuccess">Success — this is a frontend-only demo, no account was created.</p>}
            </div>
          </form>
          <div className="auth-bottom">
            {showSocial && (
              <>
                <div className="divider"><span />or<span /></div>
                <div className="social-row">
                  <button className="social-btn" type="button" aria-label="Continue with Apple"></button>
                  <button className="social-btn" type="button" aria-label="Continue with Google">G</button>
                </div>
              </>
            )}
            <div className="switch-row">{switchText} <Link to={switchLink}>{switchLabel}</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Login() {
  return (
    <Shell
      eyebrow="Sign In"
      title="Welcome Back"
      promoTitle="Sign in with ease"
      promoText="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      fields={[
        { label: 'Email', type: 'email', placeholder: 'designer@example.com' },
        { label: 'Password', type: 'password', placeholder: '********' },
      ]}
      cta="Sign In"
      showSocial
      forgot
      switchText="New user?"
      switchLink="/register"
      switchLabel="Create an account"
    />
  )
}

export function Register() {
  return (
    <Shell
      eyebrow="Create an Account"
      title="Welcome to ByteSpace"
      promoTitle="Sign up and come in"
      promoText="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      fields={[
        { label: 'Full Name', placeholder: 'Jamie Davis' },
        { label: 'Email', type: 'email', placeholder: 'designer@example.com' },
        { label: 'Password', type: 'password', placeholder: '********' },
      ]}
      cta="Continue"
      switchText="Already have an account?"
      switchLink="/login"
      switchLabel="Login"
    />
  )
}
