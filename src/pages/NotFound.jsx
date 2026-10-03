import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="hero-blue nf-blue">
      <div className="container nf-wrap">
        <div className="nf-giant">404</div>
        <div className="nf-content">
          <h1>The page you are looking for doesn&rsquo;t exist</h1>
          <p>Try to use a correct url or go back to homepage to start again</p>
          <Link to="/" className="nf-btn">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
