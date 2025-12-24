import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Header from './Header'
import { Hero, Transition } from './Hero'
import Projects from './Projects'
import SmallProjects from './SmallProjects'
import AboutMe from './AboutMe'
import Contact from './Contact'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const Home = () => {
  useLayoutEffect(() => {
    // Ensure a clean slate (especially helpful during fast navigations)
    const existing = ScrollSmoother.get()
    if (existing) existing.kill()

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      effects: false,
      normalizeScroll: true,
      id: 'smooth-scroller',
    })

    ScrollTrigger.refresh()

    return () => {
      // Kill triggers that were explicitly bound to the Home scroller
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger?.vars?.scroller === '#smooth-wrapper') trigger.kill()
      })

      smoother.kill()
      ScrollTrigger.refresh()
    }
  }, [])

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="relative min-h-screen w-screen overflow-x-hidden bg-background">
            <Hero />
            <Transition />
            <Projects />
            <SmallProjects />
            <AboutMe />
            <Contact />
          </main>
        </div>
      </div>
    </>
  )
}

export default Home

