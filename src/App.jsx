import { useLayoutEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Home from './components/home'
import CinemaAppDetail from './components/cinema-app'
import ErrorBoundary from './components/common/ErrorBoundary'
import './App.css'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const ScrollSmootherRouteCleanup = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    // Home (/) uses GSAP ScrollSmoother (fixed wrapper pattern). If any global scroll
    // state lingers after navigation, it can create a "double scrollbar" on other routes.
    if (location.pathname === '/') return

    const smoother = ScrollSmoother.get()
    if (smoother) smoother.kill()

    // Clean up any ScrollTriggers that were bound to the smooth scroller
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger?.vars?.scroller === '#smooth-wrapper') trigger.kill()
    })

    // Reset any leftover inline styles that can affect scrolling
    const html = document.documentElement
    const body = document.body

    ;[
      'height',
      'overflow',
      'overflowY',
      'position',
      'top',
      'left',
      'right',
      'width',
      'paddingRight',
      'marginRight',
    ].forEach((prop) => {
      html.style[prop] = ''
      body.style[prop] = ''
    })

    ScrollTrigger.refresh()
  }, [location.pathname])

  return null
}

const App = () => {
  return (
    <HashRouter>
      <ErrorBoundary>
        <ScrollSmootherRouteCleanup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cinema-app" element={<CinemaAppDetail />} />
        </Routes>
      </ErrorBoundary>
    </HashRouter>
  )
}

export default App