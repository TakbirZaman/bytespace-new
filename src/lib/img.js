// Resolve public/ asset URLs against the Vite base (works at "/" and sub-paths like "/repo/").
export function asset(p = '') {
  const base = import.meta.env.BASE_URL || '/'
  const clean = String(p).replace(/^\/+/, '')
  if (/^(https?:|data:|blob:)/.test(clean)) return p
  if (base.endsWith('/')) return `${base}${clean}`
  return `${base}/${clean}`
}
