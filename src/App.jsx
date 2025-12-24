import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useLayoutEffect } from 'react'
import Home from './components/home'
import CinemaAppDetail from './components/cinema-app'
import './App.css'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const AppContent = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    // Only initialize ScrollSmoother on home page
    if (location.pathname === '/') {
      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.2,
        effects: false,
        normalizeScroll: true,
        id: 'smooth-scroller'
      })
      
      ScrollTrigger.refresh()
      
      return () => {
        smoother.kill()
      }
    } else {
      // Clean up any existing smoother when navigating away
      const existingSmoother = ScrollTrigger.getById('smooth-scroller')
      if (existingSmoother) {
        existingSmoother.kill()
      }
      ScrollTrigger.refresh()
    }
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cinema-app" element={<CinemaAppDetail />} />
    </Routes>
  )
}

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}

export default App