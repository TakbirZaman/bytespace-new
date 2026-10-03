import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import { SearchIcon, StarIcon } from '../components/icons'
import { courses, allCategories, images } from '../data/courses'
import { asset } from '../lib/img'

const tabRows = [
  ['Featured', 'Design', 'Development', 'Marketing', 'Data'],
  ['Business', 'Photography', 'Music', 'Finance'],
]

const pathCards = ['Design', 'Development', 'Business', 'Marketing', 'Data', 'Photography']

const partners = ['Northwind', 'Acme Corp', 'Lumina', 'Vertex Labs', 'Craftly']

const testimonials = [
  { name: 'Sarah M.', role: 'Enthusiastic Learner', img: asset('images/avatar-1.jpg'), text: '\u201CByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\u201D' },
  { name: 'James L.', role: 'Lifelong Learner', img: asset('images/avatar-2.jpg'), text: '\u201CI\u2019ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\u201D' },
  { name: 'Alex B.', role: 'Inspired Creator', img: asset('images/avatar-3.jpg'), text: '\u201CAs a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\u2019s fulfilling to see my courses making a positive impact on learners globally.\u201D' },
]

export default function Home() {
  const [cat, setCat] = useState('Featured')
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  const visible = useMemo(() => {
    const list = cat === 'Featured' ? courses : courses.filter(c => c.category === cat)
    return list.slice(0, 6)
  }, [cat])

  function submitSearch(e) {
    e.preventDefault()
    navigate(q.trim() ? `/search?q=${encodeURIComponent(q.trim())}` : '/search')
  }

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
              <form className="searchbar" onSubmit={submitSearch} role="search">
                <div className="search-input">
                  <SearchIcon size={20} />
                  <label className="sr-only" htmlFor="home-search">Search courses, topics, creators</label>
                  <input id="home-search" placeholder="Course, topic, creator" value={q} onChange={e => setQ(e.target.value)} />
                </div>
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-dome" />
          <div className="hero-person"><img src={images.heroStudent} alt="Student learning on a laptop" fetchPriority="high" onError={e => { e.currentTarget.remove() }} /></div>
          <div className="float-card" style={{ width: 232, left: 'calc(50% + 130px)', top: 139 }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>Learning Progress</div>
            <div className="big-55">55%</div>
            <div className="progress-track"><div className="progress-fill" /></div>
          </div>
          <div className="float-card" style={{ width: 258, left: 'calc(50% - 392px)', top: 325 }}>
            <div style={{ fontSize: 16, fontWeight: 500 }}>Happy Students</div>
            <div style={{ fontSize: 12 }}>4.8 (12,400) <StarIcon size={12} /></div>
            <div className="avatars" style={{ marginTop: 8 }}>{images.avatars.map(src => <img key={src} src={src} alt="" loading="lazy" onError={e => { e.currentTarget.remove() }} />)}</div>
          </div>
          <div className="float-card" style={{ width: 208, left: 'calc(50% - 316px)', top: 127 }}>
            <div style={{ fontSize: 16, fontWeight: 500 }}>UI/UX Design</div>
            <div style={{ fontSize: 12, color: '#82868E' }}>200 Courses • 1000+ Students</div>
          </div>
        </div>
      </section>

      <div className="logo-frame">
        <div className="container logo-row" aria-label="Trusted by">
          {partners.map(p => <span key={p} className="partner-logo">{p}</span>)}
        </div>
      </div>

      <section className="section home-discover">
        <div className="container center narrow-917">
          <h2>Discover Your Passion, Build Your Skills</h2>
          <p className="lede">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
        </div>
        <div className="container">
          {tabRows.map((row, ri) => (
            <div key={ri} className="cat-tabs cat-tabs-home" role="tablist" aria-label="Course categories">
              {row.map(c => (
                <button key={c} role="tab" aria-selected={cat === c} className={`cat-tab ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>
              ))}
              {ri === 1 && <Link className="more-link" to="/search">+ More ({allCategories.length} categories)</Link>}
            </div>
          ))}
          <div className="course-grid" style={{ marginTop: 77 }}>
            {visible.map(c => <CourseCard key={c.slug} course={c} />)}
          </div>
          {visible.length === 0 && <p className="center">No courses in this category yet.</p>}
        </div>
      </section>

      <section className="section feat-cats">
        <div className="container">
          <div className="feat-head">
            <div>
              <div className="feat-eyebrow">Featured Categories</div>
              <h2 className="feat-title">Innovative Paths to Knowledge</h2>
            </div>
            <Link to="/search" className="view-more">View More</Link>
          </div>
          <div className="feat-cards">
            {pathCards.map(p => (
              <Link key={p} to={`/search?category=${encodeURIComponent(p)}`} className="feat-card"><span className="feat-icon" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z" /></svg></span><span>{p}</span></Link>
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
              <Link key={p} to={`/search?category=${encodeURIComponent(p)}`} className="path-card"><span className="path-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z" /></svg></span><span>{p}</span></Link>
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
            <img className="growth-photo" src={images.growthStudent} alt="Student with laptop taking a ByteSpace course" loading="lazy" onError={e => { e.currentTarget.remove() }} />
            <div className="float-card" style={{ width: 232, right: 0, top: 213 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Learning Progress</div>
              <div className="big-55">55%</div>
              <div className="progress-track"><div className="progress-fill" /></div>
            </div>
          </div>
        </div>

        <div className="container manage-grid">
          <div className="manage-visual"><img src={images.manageCreator} alt="Creator managing courses on ByteSpace" loading="lazy" onError={e => { e.currentTarget.remove() }} />
            <div className="float-card blue-card">
              <div style={{ fontSize: 16, fontWeight: 500 }}>Total Revenue</div>
              <div style={{ fontSize: 10 }}>July 1-28</div>
              <div className="rev-line"><b>$120.29</b><span className="rev-tag">+12$</span></div>
              <div className="progress-track light"><div className="progress-fill" /></div>
            </div>
            <div className="float-card" style={{ width: 258, right: 0, bottom: 60 }}>
              <div style={{ fontSize: 16, fontWeight: 500 }}>Happy Students</div>
              <div style={{ fontSize: 10, fontWeight: 700 }}>4.8 (12,400) <StarIcon size={10} /></div>
              <div className="avatars" style={{ marginTop: 8 }}>{images.avatars.map(src => <img key={src} src={src} alt="" loading="lazy" onError={e => { e.currentTarget.remove() }} />)}<b>2K+</b></div>
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
                <div className="testi-avatar"><img src={t.img} alt={`Portrait of ${t.name}`} loading="lazy" onError={e => { e.currentTarget.remove() }} /></div>
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
