import { useState } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'

const tabRows = [
  ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'],
  ['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
]

const pathCards = ['Design', 'Development', 'IT & Software', 'Business', 'Marketing', 'Photography']

const testimonials = [
  { name: 'Sarah M.', role: 'Enthusiastic Learner', text: '\u201CByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\u201D' },
  { name: 'James L.', role: 'Lifelong Learner', text: '\u201CI\u2019ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\u201D' },
  { name: 'Alex B.', role: 'Inspired Creator', text: '\u201CAs a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\u2019s fulfilling to see my courses making a positive impact on learners globally.\u201D' },
]

export default function Home() {
  const [cat, setCat] = useState('Featured')
  return (
    <>
      <section className="hero-blue hero">
        <div className="container">
          <div className="hero-stack">
            <div className="hero-copy">
              <div>
                <h1>Get Access to Hundreds Courses Available</h1>
                <p className="sub">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
              </div>
              <div className="searchbar">
                <div className="search-input">
                  <span style={{ fontSize: 20 }}>⌕</span>
                  <input placeholder="Course, topic, creator" />
                </div>
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-dome" />
          <div className="hero-person" />
          <div className="float-card" style={{ width: 232, left: 'calc(50% + 130px)', top: 139 }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>Learning Progress</div>
            <div className="big-55">55%</div>
            <div className="progress-track"><div className="progress-fill" /></div>
          </div>
          <div className="float-card" style={{ width: 258, left: 'calc(50% - 392px)', top: 325 }}>
            <div style={{ fontSize: 16, fontWeight: 500 }}>Happy Students</div>
            <div style={{ fontSize: 12 }}>4.5 (240) ★</div>
            <div className="avatars" style={{ marginTop: 8 }}><i /><i /><i /><i /><i /></div>
          </div>
          <div className="float-card" style={{ width: 208, left: 'calc(50% - 316px)', top: 127 }}>
            <div style={{ fontSize: 16, fontWeight: 500 }}>UI/UX Design</div>
            <div style={{ fontSize: 12, color: '#82868E' }}>200 Courses • 1000+ Students</div>
          </div>
        </div>
      </section>

      <div className="logo-frame">
        <div className="container logo-row">
          {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5'].map(p => <span key={p}>◍ {p}</span>)}
        </div>
      </div>

      <section className="section home-discover">
        <div className="container center narrow-917">
          <h2>Discover Your Passion, Build Your Skills</h2>
          <p className="lede">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
        </div>
        <div className="container">
          {tabRows.map((row, ri) => (
            <div key={ri} className="cat-tabs cat-tabs-home">
              {row.map(c => (
                <button key={c} className={`cat-tab ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>
              ))}
              {ri === 2 && <span className="more-link">+ More</span>}
            </div>
          ))}
          <div className="course-grid" style={{ marginTop: 77 }}>
            {courses.slice(0, 6).map(c => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>

      <section className="section feat-cats">
        <div className="container">
          <div className="feat-head">
            <div>
              <div className="feat-eyebrow">Featured Categories</div>
              <h2 className="feat-title">Innovative Paths to Knowledge</h2>
            </div>
            <button className="view-more">View More</button>
          </div>
          <div className="feat-cards">
            {pathCards.map(p => (
              <div key={p} className="feat-card"><span className="feat-icon">✦</span><span>{p}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-paths">
        <div className="container center narrow-917">
          <h2 className="hs">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="lede">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.</p>
        </div>
        <div className="container">
          <div className="path-cards">
            {pathCards.map(p => (
              <div key={p} className="path-card"><span className="path-icon">✦</span><span>{p}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="growth-frame">
        <div className="container growth-grid">
          <div>
            <h2>Your Path to Professional Growth Starts Here!</h2>
            <p className="growth-copy">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
            <div className="growth-stats">
              <div><b>12K</b><span>Students</span></div>
              <div><b>70+</b><span>Courses</span></div>
              <div><b>16</b><span>Creators</span></div>
            </div>
          </div>
          <div className="growth-visual">
            <CourseCard course={courses[0]} />
            <div className="float-card" style={{ width: 232, right: 0, top: 213 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Learning Progress</div>
              <div className="big-55">55%</div>
              <div className="progress-track"><div className="progress-fill" /></div>
            </div>
          </div>
        </div>

        <div className="container manage-grid">
          <div className="manage-visual">
            <div className="float-card blue-card">
              <div style={{ fontSize: 16, fontWeight: 500 }}>Total Revenue</div>
              <div style={{ fontSize: 10 }}>July 1-28</div>
              <div className="rev-line"><b>$120.29</b><span className="rev-tag">+12$</span></div>
              <div className="progress-track light"><div className="progress-fill" /></div>
            </div>
            <div className="float-card" style={{ width: 258, right: 0, bottom: 60 }}>
              <div style={{ fontSize: 16, fontWeight: 500 }}>Happy Students</div>
              <div style={{ fontSize: 10, fontWeight: 700 }}>4.5 (240) ★</div>
              <div className="avatars" style={{ marginTop: 8 }}><i /><i /><i /><i /><i /><i /><b>2K+</b></div>
            </div>
          </div>
          <div>
            <h2>Create &amp; Manage Courses Easily.</h2>
            <p className="manage-copy">ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul className="manage-checks">
              <li>Share Your Expertise</li>
              <li>Monetize Your Passion</li>
              <li>Flexibility and Autonomy</li>
              <li>Build a Community</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hero-blue cta-frame">
        <div className="container center narrow-964">
          <h2>Unlock Your Potential as a Creator with ByteSpace</h2>
          <p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
          <Link to="/register" className="cta-btn">Join as Creator</Link>
        </div>
      </section>

      <section className="testi-frame">
        <div className="container">
          <div className="testi-head">
            <h2>Discover What Our Community Is Saying</h2>
            <p>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
          </div>
          <div className="testi-cards">
            {testimonials.map(t => (
              <div key={t.name} className="testi-card">
                <div className="testi-avatar" />
                <div><div className="testi-name">{t.name}</div><div className="testi-role">{t.role}</div></div>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
