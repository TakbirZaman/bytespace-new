import { useMemo, useState } from 'react'
import CourseCard from '../components/CourseCard'
import FilterBar from '../components/FilterBar'
import { courses, creators } from '../data/courses'
import { isFollowing, toggleFollow } from '../lib/store'

const CREATOR = 'PurePearl Studio'

export default function Creator() {
  const [following, setFollowing] = useState(() => isFollowing(CREATOR))
  const [level, setLevel] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('Most relevant')
  const info = creators[CREATOR]
  const mine = useMemo(() => courses.filter(c => c.creator === CREATOR), [])

  const visible = useMemo(() => {
    let list = mine.filter(c => (!level || c.level === level) && (!category || c.category === category))
    if (sort === 'Highest rated') list = [...list].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    if (sort === 'Price: low to high') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'Price: high to low') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [mine, level, category, sort])

  function onFollow() {
    setFollowing(toggleFollow(CREATOR))
  }

  return (
    <>
      <section className="hero-blue creator-hero">
        <div className="container creator-content">
          <div className="creator-top">
            <div className="creator-avatar"><img src={info.image} alt={`Portrait of ${CREATOR}`} onError={e => { e.currentTarget.remove() }} /></div>
            <div>
              <div className="creator-name-row">
                <h1>{CREATOR}</h1>
                <span className="creator-badge">Creator</span>
              </div>
              <div className="creator-tagline">{info.tagline}</div>
            </div>
          </div>
          <p className="creator-bio">Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
          <div className="creator-stats">
            <div className="creator-stat-pills">
              <span className="stat-pill"><b>{mine.length}</b> Courses</span>
              <span className="stat-pill"><b>{(info.followers + (following ? 1 : 0)).toLocaleString()}</b> Followers</span>
            </div>
            <button className="follow-btn" onClick={onFollow} aria-pressed={following}>{following ? 'Following' : 'Follow'}</button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container creator-grid-wrap">
          <FilterBar level={level} category={category} sort={sort} onLevel={setLevel} onCategory={setCategory} onSort={setSort} onReset={() => { setLevel(''); setCategory(''); setSort('Most relevant') }} />
          <p className="result-count" role="status">{visible.length} {visible.length === 1 ? 'course' : 'courses'} by {CREATOR}</p>
          <div className="course-grid">
            {visible.map(c => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>
    </>
  )
}
