import CourseCard from '../components/CourseCard'
import FilterBar from '../components/FilterBar'
import { courses } from '../data/courses'

export default function Creator() {
  return (
    <>
      <section className="hero-blue creator-hero">
        <div className="container creator-content">
          <div className="creator-top">
            <div className="creator-avatar" />
            <div>
              <div className="creator-name-row">
                <h1>PurePearl Studio</h1>
                <span className="creator-badge">Creator</span>
              </div>
              <div className="creator-tagline">Passionate UI/UX, Web designer</div>
            </div>
          </div>
          <p className="creator-bio">Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
          <div className="creator-stats">
            <div className="creator-stat-pills">
              <span className="stat-pill"><b>3</b> Products</span>
              <span className="stat-pill"><b>12</b> Followers</span>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container creator-grid-wrap">
          <FilterBar />
          <div className="course-grid">
            {courses.map(c => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>
    </>
  )
}
