
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Hub from './pages/Hub'
import Explore from './pages/Explore'
import Services from './pages/Services'
import FairPay from './pages/FairPay'
import Amenities from './pages/Amenities'
import Profile from './pages/Profile'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/explore" element={<Explore />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fair-pay" element={<FairPay />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/hub"
              element={
                <ProtectedRoute>
                  <Hub />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
