import Header from './Header'
import { Hero, Transition } from './Hero'
import Projects from './Projects'
import SmallProjects from './SmallProjects'
import AboutMe from './AboutMe'
import Contact from './Contact'

const Home = () => {
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

