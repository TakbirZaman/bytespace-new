import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { courses, thumbStyle, images } from '../data/courses'
import { PlayIcon, StarIcon, CheckIcon, UsersIcon, ShareIcon, ClockIcon, BookIcon, AwardIcon, MailIcon } from '../components/icons'
import { isEnrolled, toggleEnrollment } from '../lib/store'
import NotFound from './NotFound'

const lessons = [
  { n: '01', name: 'Introduction to Digital Assets', time: '12 mins' },
  { n: '02', name: 'Design Principles for Impacts', time: '21 mins' },
  { n: '03', name: 'Advanced Techniques in Digital Creation', time: '16 mins' },
]

const modules = [
  { title: 'Module 1: Introduction to Digital Assets', text: 'Lay the groundwork with lessons like \u2018Understanding Digital Elements\u2019 and \u2018Navigating Design Software Tools.\u2019 Dive into the essentials of digital asset creation.' },
  { title: 'Module 2: Design Principles for Impact', text: 'Master the principles that drive impactful designs with lessons such as \u2018Color Theory in Digital Design\u2019 and \u2018Typography Essentials.\u2019 Elevate your visual communication skills.' },
  { title: 'Module 4: User-Centric Design Strategies', text: 'Understand \u2018Design Thinking in Digital Creation\u2019 and delve into \u2018User Experience (UX) Essentials.\u2019 Craft digital assets with a focus on user-centric design.' },
  { title: 'Module 5: Interactive Media and Engagement', text: 'Engage your audience with lessons like \u2018Creating Interactive Presentations\u2019 and \u2018Integrating Multimedia Elements.\u2019 Master the art of creating immersive digital experiences.' },
  { title: 'Module 6: Project Showcase and Critique', text: 'Perfect your presentation skills with \u2018Effective Presentation Techniques\u2019 and embrace collaboration with \u2018Peer Critique and Collaboration.\u2019 Showcase your work with confidence.' },
  { title: 'Module 7: Optimizing Digital Assets for Various Platforms', text: 'Adapt your digital creations for \u2018Mobile Platforms\u2019 and optimize for \u2018Social Media.\u2019 Ensure widespread accessibility and engagement across diverse digital landscapes.' },
]

const ratingRows = [
  { stars: 5, count: 720, fill: 260.23 },
  { stars: 4, count: 120, fill: 102.91 },
  { stars: 3, count: 21, fill: 26.72 },
  { stars: 2, count: 12, fill: 9.89 },
  { stars: 1, count: 16, fill: 14.84 },
]

const reviews = [
  { name: 'PurePearl Studio', role: 'UI/UX Designer', when: 'a year ago', img: '/images/reviewer-1.jpg', text: '\u201CThe course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!\u201D' },
  { name: 'Albert Flores', role: 'UI/UX Designer', when: 'a year ago', img: '/images/reviewer-2.jpg', text: 'This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\u2019ve learned!' },
  { name: 'Cody Fisher', role: 'UI/UX Designer', when: 'a year ago', img: '/images/reviewer-3.jpg', text: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.' },
  { name: 'Brooklyn Simmons', role: 'UI/UX Designer', when: 'a year ago', img: '/images/reviewer-4.jpg', text: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.' },
]

const keyPoints = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio',
]

export default function CourseDetail() {
  const { slug } = useParams()
  const [tab, setTab] = useState('about')
  const [enrolled, setEnrolled] = useState(() => isEnrolled(slug))
  const [shared, setShared] = useState(false)
  const course = courses.find(c => c.slug === slug)
  if (!course) return <NotFound />

  function onEnroll() {
    const next = toggleEnrollment(course.slug)
    setEnrolled(next.includes(course.slug))
    window.dispatchEvent(new Event('bytespace:enroll'))
  }

  async function onShare() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    } catch {
      setShared(false)
    }
  }

  return (
    <>
      <section className="hero-blue detail-blue">
        <div className="container">
          <h1 className="detail-title">{course.title}: A Comprehensive Guide</h1>
          <div className="detail-sub">Unlock the Power of Digital Creation with Expert Guidance</div>
          <div className="detail-by">by {course.author}</div>
          <div className="detail-pills">
            <span className="dpill">{course.level}</span>
            <span className="dpill"><StarIcon size={15} /> {course.rating} ({course.reviewsCount} reviews)</span>
            <span className="dpill"><UsersIcon size={15} /> {course.students.toLocaleString()} Students</span>
            <button type="button" className="dpill dpill-lime" onClick={onShare}><ShareIcon size={15} /> {shared ? 'Link copied' : 'Share'}</button>
          </div>
          <div className="detail-cover" style={thumbStyle(course.hue)}>
            <img src={images.courseCover} alt={`${course.title} preview`} loading="lazy" onError={e => { e.currentTarget.remove() }} />
          </div>
        </div>
      </section>

      <div className="detail-lower">
        <div className="container detail-cols">
          <div className="detail-main-col">
            <div className="dtabs">
              {['about', 'lessons', 'reviews'].map(t => (
                <button key={t} className={`dtab ${tab === t ? 'on' : ''}`} onClick={() => setTab(t)}>
                  {t[0].toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>

            {tab === 'about' && (
              <>
                <h3>Description</h3>
                <p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &ldquo;{course.title}: A Comprehensive Guide.&rdquo; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.</p>
                <p>In the initial modules, you&rsquo;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p>
                <p>As you progress through the course, you&rsquo;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.</p>
                <h3>Sneak Peek</h3>
                <div className="sneak-row">{courses.slice(0, 4).map(c => <div key={c.slug} className="sneak-thumb" style={thumbStyle(c.hue)}><img src={c.image} alt={`${c.title} preview`} loading="lazy" onError={e => { e.currentTarget.remove() }} /></div>)}</div>
                <h3>Key Points</h3>
                <ul className="keypoints">
                  {keyPoints.map(k => <li key={k}><span className="kp-check"><CheckIcon size={12} /></span>{k}</li>)}
                </ul>
              </>
            )}
            {tab === 'lessons' && (
              <>
                <h3>Explore the Modules</h3>
                <p>Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
                <h3>Lesson List</h3>
                <div className="module-list">
                  {modules.map(m => (
                    <div key={m.title} className="module-row">
                      <span className="module-icon"><PlayIcon size={24} /></span>
                      <div>
                        <div className="module-title">{m.title}</div>
                        <p>{m.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <h3>Lesson Content</h3>
                <p>Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
                <h3>Lesson Progress Tracking</h3>
                <p>Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
                <div className="progress-card">
                  <div className="pc-label">Learning Progress</div>
                  <div className="pc-big">55%</div>
                  <div className="pc-track"><div className="pc-fill" /></div>
                </div>
              </>
            )}
            {tab === 'reviews' && (
              <>
                <h3>What Learners Are Saying</h3>
                <p>Discover what our learners have to say about their experience with &lsquo;{course.title}: A Comprehensive Guide.&rsquo; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>
                <div className="rating-card">
                  <div className="rating-badge">
                    <div className="pc-label">Ratings</div>
                    <div className="rating-big">4.7</div>
                  </div>
                  <div className="rating-rows">
                    {ratingRows.map(r => (
                      <div key={r.stars} className="rating-row">
                        <div className="rbar"><div className="rfill" style={{ width: `${r.fill}px` }} /></div>
                        <span className="rstars" aria-label={`${r.stars} stars`}><StarIcon size={14} /><StarIcon size={14} /><StarIcon size={14} /><StarIcon size={14} /><StarIcon size={14} /></span>
                        <span className="rcount">{r.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <h3>Individual Reviews:</h3>
                <div className="rev-filters">
                  <button className="dtab on">All ratings</button>
                  {[5, 4, 3, 2, 1].map(n => <button key={n} className="dtab" style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}><StarIcon size={13} /> {n}</button>)}
                </div>
                {reviews.map(r => (
                  <article key={r.name} className="review-card">
                    <div className="rev-head">
                      <div className="rev-who">
                        <div className="rev-avatar"><img src={r.img} alt={`Portrait of ${r.name}`} loading="lazy" onError={e => { e.currentTarget.remove() }} /></div>
                        <div>
                          <div className="rev-name">{r.name}</div>
                          <div className="rev-role">{r.role}</div>
                        </div>
                      </div>
                      <div className="rev-meta"><span className="rstars" aria-label="5 out of 5 stars"><StarIcon size={13} /><StarIcon size={13} /><StarIcon size={13} /><StarIcon size={13} /><StarIcon size={13} /></span><span>{r.when}</span></div>
                    </div>
                    <p>{r.text}</p>
                  </article>
                ))}
              </>
            )}
          </div>

          <aside className="enroll-card">
            <h3>{course.lessons} Lessons ({course.duration})</h3>
            <div className="mini-lessons">
              {lessons.map(l => (
                <div key={l.n} className="lesson-row"><span>{l.n}</span><span className="grow">{l.name}</span><span className="ltime">{l.time}</span></div>
              ))}
            </div>
            <div style={{ color: '#4B4C53' }}>{Math.max(0, course.lessons - 3)} more lessons</div>
            <p style={{ color: '#4B4C53' }}>Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
            <div className="enroll-price"><strong>${course.price}</strong><span>/lifetime</span></div>
            <button className="enroll-btn" onClick={onEnroll} aria-pressed={enrolled}>{enrolled ? 'Enrolled — View Courses' : 'Enroll Now'}</button>
            <h3>This course includes</h3>
            <ul className="includes">
              <li><BookIcon size={15} /> Learning Resources</li>
              <li><PlayIcon size={15} /> Quality Lesson Videos</li>
              <li><AwardIcon size={15} /> Certificate of Completion</li>
              <li><MailIcon size={15} /> Private Consultation</li>
            </ul>
            <hr />
            <div className="instructor">
              <div className="inst-avatar"><img src={images.avatars[0]} alt={`Portrait of ${course.author}`} loading="lazy" onError={e => { e.currentTarget.remove() }} /></div>
              <div><div className="inst-name">{course.author}</div><div className="inst-role">Professional Creator</div></div>
            </div>
            <p style={{ color: '#4B4C53' }}><ClockIcon size={13} /> {course.students.toLocaleString()} students enrolled · <StarIcon size={13} /> {course.rating}</p>
            <Link to="/creator" className="profile-btn">See Full Profile</Link>
          </aside>
        </div>
      </div>
    </>
  )
}
