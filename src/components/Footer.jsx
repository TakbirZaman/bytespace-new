export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-nav">
          <div className="footer-brand">
            <div>
              <div className="logo logo-dark"><span className="logo-mark">▲</span>ByteSpace</div>
              <p className="footer-note">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            </div>
            <div>
              <div className="news">
                <input placeholder="Enter your email" />
                <button className="news-btn">Subscribe</button>
              </div>
              <p className="footer-consent">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
            </div>
          </div>
          <div className="footer-cols">
            <div>
              <h4>Browse</h4>
              <ul><li>Featured Courses</li><li>Featured Categories</li><li>Business</li><li>IT</li><li>Design</li></ul>
            </div>
            <div>
              <h4>Development</h4>
              <ul><li>Development</li><li>Marketing</li><li>Photography</li><li>Finance</li><li>Sport</li></ul>
            </div>
            <div>
              <h4>Platform</h4>
              <ul><li>Become a Creator</li><li>Affiliate Program</li><li>Contact</li><li>Help</li><li>About</li></ul>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <hr />
          <div className="bottom">
            <span>@ 2023 ByteSpace. All rights reserved.</span>
            <span>Privacy Policy &nbsp; Terms of Service &nbsp; Cookies Settings</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
