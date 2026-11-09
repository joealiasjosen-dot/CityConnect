
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="app">
      <main className="hero-section">
        <p className="tagline">
          YOUR CITY. YOUR COMMUNITY. YOUR CONNECT.
        </p>

        <h1>
          Discover Your City.
          <br />
          <span>Connect Better.</span>
        </h1>

        <p className="description">
          Explore local services, discover places, compare prices,
          and stay connected with everything happening around your city.
        </p>

        <div className="hero-actions">
          <Link to="/hub">
            <button>Explore Your City</button>
          </Link>

          <Link to="/about">
            <button className="secondary-button">Learn More</button>
          </Link>
        </div>
      </main>

      <footer>
        <p>CityConnect © 2026. Connecting communities, intelligently.</p>
      </footer>
    </div>
  )
}

export default Home
