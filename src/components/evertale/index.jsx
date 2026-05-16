import { useEffect } from 'react'
import Hero from './Hero'
import OpportunityProblem from './OpportunityProblem'
import MeetUsers from './MeetUsers'
import ResearchDirection from './ResearchDirection'
import InformationArchitecture from './InformationArchitecture'
import Wireframes from './Wireframes'
import DesignChallenge from './DesignChallenge'
import UserTesting from './UserTesting'
import HighFiMockups from './HighFiMockups'
import Contact from '../home/Contact'

const EverTaleDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="w-full min-h-screen bg-black">
      <Hero />
      <OpportunityProblem />
      <MeetUsers />
      <ResearchDirection />
      <InformationArchitecture />
      <Wireframes />
      <DesignChallenge />
      <UserTesting />
      <HighFiMockups />
      <hr className="border-t border-neutral-800 mx-6 lg:mx-16" />
      <Contact />
    </main>
  )
}

export default EverTaleDetail
