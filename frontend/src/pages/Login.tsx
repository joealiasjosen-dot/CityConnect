
import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  signIn,
  signInWithGoogle,
} from '../services/auth'
import '../App.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)
    setMessage('')

    try {
      const { data, error } = await signIn(email, password)

      if (error) {
        setMessage(error.message)
        return
      }

      if (!data.session) {
        setMessage('Login succeeded, but no active session was created. Please try again.')
        return
      }

      navigate('/hub', { replace: true })
    } catch {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogleLogin() {
    setLoading(true)
    setMessage('')

    try {
      const { error } = await signInWithGoogle()

      if (error) {
        setMessage(error.message)
        setLoading(false)
      }
    } catch {
      setMessage('Google sign-in failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card login-card">
        <Link to="/" className="auth-logo">
          <span className="brand-city">City</span>
          <span className="brand-connect">Connect</span>
        </Link>

        <p className="auth-tagline">YOUR CITY. YOUR COMMUNITY.</p>

        <h1>Welcome Back</h1>
        <p className="auth-description">
          Sign in and reconnect with your city.
        </p>

        <form onSubmit={handleLogin} className="auth-form">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Please wait...' : 'Sign In'}
          </button>
        </form>

        <div className="login-or-divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <button
          type="button"
          className="secondary-button login-google-button"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <svg className="google-symbol" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.7c3.9-3.6 6-8.8 6-15z"/>
            <path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.7-5.1c-1.8 1.2-4.1 2-6.8 2-5.2 0-9.6-3.5-11.2-8.2H5.9v5.3C9.3 39.6 16.1 44 24 44z"/>
            <path fill="#FBBC05" d="M12.8 27.8a12 12 0 0 1 0-7.6v-5.3H5.9a20 20 0 0 0 0 18.2z"/>
            <path fill="#EA4335" d="M24 11.9c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4 16.1 4 9.3 8.4 5.9 14.9l6.9 5.3c1.6-4.8 6-8.3 11.2-8.3z"/>
          </svg>
          Continue with Google
        </button>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Create Account</Link>
        </p>
      </div>

      <p className="auth-footer">
        CityConnect © 2026. Connecting communities, intelligently.
      </p>
    </div>
  )
}

export default Login
