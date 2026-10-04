import { Link } from 'react-router-dom'
import { images } from '../data/courses'
import { StarIcon, LevelIcon, ClockIcon, ChatIcon, BookIcon } from './icons'
import { isEnrolled } from '../lib/store'

export default function CourseCard({ course }) {
  const enrolled = isEnrolled(course.slug)
  return (
    <article className="course-card">
      <div className="cc-media">
        <div className="cc-thumb">
          <img src={course.image} alt={`${course.title} course cover`} loading="lazy" onError={e => { e.currentTarget.remove() }} />
        </div>
        <div className="cc-overlays">
          <span><BookIcon size={12} /> {course.lessons} Lessons</span>
          <span><ClockIcon size={12} /> {course.duration}</span>
          <span><ChatIcon size={12} /> {course.comments}</span>
        </div>
        {enrolled && <span className="cc-enrolled">Enrolled</span>}
      </div>
      <div className="cc-body">
        <div className="cc-title-row">
          <div>
            <h3><Link to={`/courses/${course.slug}`}>{course.title}</Link></h3>
            <div className="cc-by">by {course.author}</div>
          </div>
          <div className="cc-rating" aria-label={`Rated ${course.rating} out of 5`}>{course.rating}<span className="cc-star"><StarIcon size={20} /></span></div>
        </div>
        <div className="cc-mid">
          <span className="cc-level"><LevelIcon size={12} /> {course.level}</span>
          <span className="avatars" aria-hidden="true">
            {images.avatars.map(src => (
              <img key={src} src={src} alt="" loading="lazy" onError={e => { e.currentTarget.remove() }} />
            ))}
            <b>26+</b>
          </span>
        </div>
        <div className="cc-price"><strong>${course.price}</strong><span>/lifetime</span></div>
      </div>
    </article>
  )
}
