import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'

export default function Courses() {
  return (
    <section className="section">
      <div className="container">
        <h2>All Courses</h2>
        <p className="lede">Search / filter bar from Figma will go here after exports.</p>
        <div className="course-grid">
          {courses.map(c => <CourseCard key={c.slug} course={c} />)}
        </div>
      </div>
    </section>
  )
}
