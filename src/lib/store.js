export function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage unavailable — ignore */
  }
}

export function getEnrollments() {
  return readJSON('bytespace:enrollments', [])
}

export function isEnrolled(slug) {
  return getEnrollments().includes(slug)
}

export function toggleEnrollment(slug) {
  const list = getEnrollments()
  const next = list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug]
  writeJSON('bytespace:enrollments', next)
  return next
}

export function isFollowing(creator) {
  return readJSON('bytespace:follows', []).includes(creator)
}

export function toggleFollow(creator) {
  const list = readJSON('bytespace:follows', [])
  const next = list.includes(creator) ? list.filter((c) => c !== creator) : [...list, creator]
  writeJSON('bytespace:follows', next)
  return next.includes(creator)
}

export function getSession() {
  return readJSON('bytespace:session', null)
}

export function setSession(user) {
  if (user) writeJSON('bytespace:session', user)
  else {
    try {
      localStorage.removeItem('bytespace:session')
    } catch {
      /* ignore */
    }
  }
}
