
import { Link } from 'react-router-dom'

function Hub() {
  return (
    <div className="hub-page">

      <section className="hub-heading">
        <p className="tagline">
          YOUR CITY. ONE CONNECTED EXPERIENCE.
        </p>

        <h1>
            Welcome to <span className="brand-city">City</span><span className="brand-connect">Connect.</span>
        </h1>

        <p>
          Discover places, connect with local services, understand
          fair prices and experience everything your city offers.
        </p>
      </section>

      <section className="hub-layout">

        {/* Four Main Features */}
        <div className="hub-main">

          <Link to="/explore" className="hub-card">
            <span>01</span>
            <h2>Explore</h2>
            <p>Discover your city, places and local experiences.</p>
            <strong>Explore City →</strong>
          </Link>

          <Link to="/services" className="hub-card">
            <span>02</span>
            <h2>Services</h2>
            <p>Find and connect with local service providers.</p>
            <strong>Find Services →</strong>
          </Link>

          <Link to="/fair-pay" className="hub-card">
            <span>03</span>
            <h2>Fair-Pay</h2>
            <p>Compare indicative prices for everyday services.</p>
            <strong>Check Prices →</strong>
          </Link>

          <Link to="/amenities" className="hub-card">
            <span>04</span>
            <h2>Amenities</h2>
            <p>Discover attractions, parks and public facilities.</p>
            <strong>Discover More →</strong>
          </Link>

        </div>

        {/* Additional Navigation */}
        <aside className="hub-side-nav">

          <Link to="/profile" className="hub-side-button">
            <span className="hub-side-icon">♟</span>
            <span className="hub-side-label">My Profile</span>
          </Link>

          <Link to="/activity" className="hub-side-button">
            <span className="hub-side-icon">↻</span>
            <span className="hub-side-label">My Activity</span>
          </Link>

          <Link to="/add-to-city" className="hub-side-button">
            <span className="hub-side-icon">+</span>
            <span className="hub-side-label">Add to City</span>
          </Link>

        </aside>

      </section>
    </div>
  )
}

export default Hub
