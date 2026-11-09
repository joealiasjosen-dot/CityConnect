
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { signOut } from '../services/auth'

function MainLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, loading } = useAuth()

  const [showSignOut, setShowSignOut] = useState(false)
  const [signingOut, setSigningOut] = useState(false)
  const [signOutError, setSignOutError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  async function handleSignOut() {
    setSigningOut(true)
    setSignOutError('')

    const { error } = await signOut()

    if (error) {
      setSignOutError(error.message)
      setSigningOut(false)
      return
    }

    setShowSignOut(false)
    setSigningOut(false)
    navigate('/')
  }

  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="logo">
          <h2>
            <span className="brand-city">City</span>
            <span className="brand-connect">Connect</span>
          </h2>
        </Link>

        <nav className="main-navigation">
          <Link className={location.pathname === '/' ? 'active' : ''} to="/">
            Home
          </Link>

          <Link className={location.pathname === '/explore' ? 'active' : ''} to="/explore">
            Explore
          </Link>

          <Link className={location.pathname === '/services' ? 'active' : ''} to="/services">
            Services
          </Link>

          <Link className={location.pathname === '/fair-pay' ? 'active' : ''} to="/fair-pay">
            Fair-Pay
          </Link>

          <Link className={location.pathname === '/amenities' ? 'active' : ''} to="/amenities">
            Amenities
          </Link>

          <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">
            About
          </Link>

          {user && (
            <Link className={location.pathname === '/profile' ? 'active' : ''} to="/profile">
              Profile
            </Link>
          )}
        </nav>

        <div className="header-actions">
          {!loading && (
            user ? (
              <button
                type="button"
                className="auth-button"
                onClick={() => setShowSignOut(true)}
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/login" className="auth-button">
                  Sign In
                </Link>

                <Link to="/register" className="register-button">
                  Get Started
                </Link>
              </>
            )
          )}
        </div>
      </header>

      <main key={location.pathname} className="page-transition">
        <Outlet />
      </main>

      {showSignOut && (
        <div className="signout-overlay">
          <div className="signout-dialog">
            <h2>Sign Out?</h2>

            <p>Are you sure you want to sign out of CityConnect?</p>

            {signOutError && (
              <p className="signout-error">{signOutError}</p>
            )}

            <div className="signout-actions">
              <button
                type="button"
                className="cancel-signout"
                onClick={() => setShowSignOut(false)}
                disabled={signingOut}
              >
                Cancel
              </button>

              <button
                type="button"
                className="confirm-signout"
                onClick={handleSignOut}
                disabled={signingOut}
              >
                {signingOut ? 'Signing Out...' : 'Yes, Sign Out'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainLayout
