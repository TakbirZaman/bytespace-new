import { useState } from 'react'
import CourseCard from '../components/CourseCard'
import FilterBar from '../components/FilterBar'
import { courses } from '../data/courses'

const cats = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Cooking']

export default function Search() {
  const [cat, setCat] = useState('Featured')
  const all = Array.from({ length: 18 }, (_, i) => courses[i % courses.length])
  return (
    <>
      <section className="hero-blue search-hero">
        <div className="container search-hero-inner">
          <h1>Find Your Next Course</h1>
          <div className="searchbar searchbar-lg">
            <div className="search-input">
              <span style={{ fontSize: 20 }}>⌕</span>
              <input placeholder="Search" />
            </div>
            <button className="courses-btn">Courses ▾</button>
          </div>
        </div>
      </section>
      <section className="section search-body">
        <div className="container">
          <FilterBar />
          <div className="cat-tabs">
            {cats.map(c => (
              <button key={c} className={`cat-tab ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <div className="course-grid">
            {all.map((c, i) => <CourseCard key={i} course={c} />)}
          </div>
          <div className="pagination pagination-spec">
            <button aria-label="Previous">←</button>
            {[1, 2, 3, 4, 5].map(n => <span key={n} className={n === 1 ? 'dim' : ''}>{n}</span>)}
            <button aria-label="Next">→</button>
          </div>
        </div>
      </section>
    </>
  )
}
