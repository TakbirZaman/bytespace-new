import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setSession } from '../lib/store'
import { asset } from '../lib/img'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function slugId(label) {
  return `auth-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

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
  const navigate = useNavigate()

  useEffect(() => {
    let t
    if (status === 'done') {
      t = setTimeout(() => navigate('/search'), 900)
    }
    return () => clearTimeout(t)
  }, [status, navigate])

  function submit(e) {
    e.preventDefault()
    const errs = validate(values, fields)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setStatus('loading')
    // Demo auth — persist session locally, no backend (see README)
    setTimeout(() => {
      const email = (values.Email ?? '').trim()
      setSession({ email, name: (values['Full Name'] ?? email.split('@')[0] ?? '').trim() })
      window.dispatchEvent(new Event('bytespace:auth'))
      setStatus('done')
    }, 800)
  }

  return (
    <div className="hero-blue auth-page">
      <div className="container auth-grid">
        <div className="auth-promo">
          <h2>{promoTitle}</h2>
          <p>{promoText}</p>
            <img className="auth-promo-img" src={asset('images/auth-promo.jpg')} alt="ByteSpace course cards with happy student reviews" loading="lazy" onError={e => { e.currentTarget.remove() }} />
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
                  <label htmlFor={slugId(f.label)}>{f.label}</label>
                  <input
                    id={slugId(f.label)}
                    type={f.type ?? 'text'}
                    placeholder={f.placeholder}
                    autoComplete={f.type === 'password' ? 'current-password' : f.type === 'email' ? 'email' : 'name'}
                    value={values[f.label] ?? ''}
                    onChange={e => setValues(v => ({ ...v, [f.label]: e.target.value }))}
                    aria-invalid={Boolean(errors[f.label])}
                    aria-describedby={errors[f.label] ? `${slugId(f.label)}-err` : undefined}
                  />
                  {errors[f.label] && <span className="aerror" id={`${slugId(f.label)}-err`}>{errors[f.label]}</span>}
                </div>
              ))}
              {forgot && <Link to="/login" className="forgot">Forgot password?</Link>}
              <div className="abtn-row">
                <button className="abtn" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Please wait…' : cta}
                </button>
              </div>
              {status === 'done' && <p className="asuccess">Signed in — redirecting to courses…</p>}
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
