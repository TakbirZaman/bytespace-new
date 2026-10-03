import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="cc-media">
        <div className="cc-thumb" />
        <div className="cc-overlays">
          <span>{course.lessons} Lessons</span>
          <span>{course.duration}</span>
          <span>{course.comments} Comments</span>
        </div>
      </div>
      <div className="cc-body">
        <div className="cc-title-row">
          <div>
            <Link to={`/courses/${course.slug}`}><h3>{course.title}</h3></Link>
            <div className="cc-by">by {course.author}</div>
          </div>
          <div className="cc-rating">{course.rating}<span className="cc-star">★</span></div>
        </div>
        <div className="cc-mid">
          <span className="cc-level">▂ {course.level}</span>
          <span className="avatars"><i/><i/><i/><i/><b>26+</b></span>
        </div>
        <div className="cc-price"><strong>${course.price}</strong><span>/lifetime</span></div>
      </div>
    </article>
  )
}
