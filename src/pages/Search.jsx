import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import FilterBar from '../components/FilterBar'
import { SearchIcon } from '../components/icons'
import { courses } from '../data/courses'

const cats = ['Featured', 'Design', 'Development', 'Business', 'Marketing', 'Data', 'Photography', 'Music', 'Finance']
const PAGE_SIZE = 9

function sortList(list, sort) {
  const arr = [...list]
  switch (sort) {
    case 'Highest rated': return arr.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    case 'Most students': return arr.sort((a, b) => b.students - a.students)
    case 'Price: low to high': return arr.sort((a, b) => a.price - b.price)
    case 'Price: high to low': return arr.sort((a, b) => b.price - a.price)
    default: return arr
  }
}

export default function Search() {
  const [params, setParams] = useSearchParams()
  const [cat, setCat] = useState(params.get('category') ?? 'Featured')
  const [level, setLevel] = useState('')
  const [category, setCategory] = useState(params.get('category') ?? '')
  const [sort, setSort] = useState('Most relevant')
  const [query, setQuery] = useState(params.get('q') ?? '')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = courses.filter(c => {
      if (cat !== 'Featured' && c.category !== cat) return false
      if (category && c.category !== category) return false
      if (level && c.level !== level) return false
      if (q && !`${c.title} ${c.author} ${c.category}`.toLowerCase().includes(q)) return false
      return true
    })
    return sortList(list, sort)
  }, [query, cat, category, level, sort])

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, pages)
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  function updateQuery(v) {
    setQuery(v)
    setPage(1)
    setParams(p => {
      const next = new URLSearchParams(p)
      if (v.trim()) next.set('q', v.trim())
      else next.delete('q')
      return next
    }, { replace: true })
  }

  function pickCat(c) {
    setCat(c)
    setPage(1)
  }

  return (
    <>
      <section className="hero-blue search-hero">
        <div className="container search-hero-inner">
          <h1>Find Your Next Course</h1>
          <form className="searchbar searchbar-lg" onSubmit={e => e.preventDefault()} role="search">
            <div className="search-input">
              <SearchIcon size={20} />
              <label className="sr-only" htmlFor="search-q">Search courses</label>
              <input id="search-q" placeholder="Search by title, creator, or topic" value={query} onChange={e => updateQuery(e.target.value)} />
            </div>
            <button type="submit" className="courses-btn">{filtered.length} Courses</button>
          </form>
        </div>
      </section>
      <section className="section search-body">
        <div className="container">
          <FilterBar
            level={level} category={category} sort={sort}
            onLevel={v => { setLevel(v); setPage(1) }}
            onCategory={v => { setCategory(v); setPage(1) }}
            onSort={v => setSort(v)}
            onReset={() => { setLevel(''); setCategory(''); setSort('Most relevant'); setCat('Featured'); updateQuery(''); setPage(1) }}
          />
          <div className="cat-tabs" role="tablist" aria-label="Categories">
            {cats.map(c => (
              <button key={c} role="tab" aria-selected={cat === c} className={`cat-tab ${cat === c ? 'on' : ''}`} onClick={() => pickCat(c)}>{c}</button>
            ))}
          </div>
          <p className="result-count" role="status">{filtered.length} {filtered.length === 1 ? 'course' : 'courses'} found{query.trim() && <> for “{query.trim()}”</>}</p>
          {visible.length > 0 ? (
            <div className="course-grid">
              {visible.map(c => <CourseCard key={c.slug} course={c} />)}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No courses match your filters</h3>
              <p>Try a different keyword, level, or category.</p>
              <button type="button" className="abtn" onClick={() => { setLevel(''); setCategory(''); setCat('Featured'); updateQuery('') }}>Clear all filters</button>
            </div>
          )}
          <div className="pagination pagination-spec">
            <button aria-label="Previous page" disabled={safePage <= 1} onClick={() => setPage(p => Math.max(1, p - 1))}>←</button>
            {Array.from({ length: pages }, (_, i) => i + 1).slice(0, 5).map(n => (
              <button key={n} className={n === safePage ? 'page-on' : ''} aria-current={n === safePage ? 'page' : undefined} onClick={() => setPage(n)}>{n}</button>
            ))}
            <button aria-label="Next page" disabled={safePage >= pages} onClick={() => setPage(p => Math.min(pages, p + 1))}>→</button>
          </div>
        </div>
      </section>
    </>
  )
}
