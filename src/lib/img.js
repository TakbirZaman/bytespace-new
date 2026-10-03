// Resolve public/ asset URLs. Always root-absolute so SPA routes
// (/search, /courses/:slug) resolve correctly on Vercel/Netlify.
export function asset(p = '') {
  const raw = String(p || '')
  if (/^(https?:|data:|blob:)/.test(raw)) return raw
  const clean = raw.replace(/^\/+/, '')
  const base = import.meta.env.BASE_URL || '/'
  // Relative build base ('./') -> treat as site root.
  if (base.startsWith('.')) return `/${clean}`
  const norm = base.endsWith('/') ? base : `${base}/`
  return `${norm}${clean}`
}
