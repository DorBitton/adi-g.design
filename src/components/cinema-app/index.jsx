import { useRef } from 'react'
import BackButton from './BackButton'
import CinemaAppHero from './Hero'
import Overview from './Overview'
import ProblemGoal from './ProblemGoal'
import WireframesGallery from './WireframesGallery'

const CinemaAppDetail = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const overviewRef = useRef(null)
  const problemGoalRef = useRef(null)
  const imagesRef = useRef(null)
  const mainImageRef = useRef(null)

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-x-hidden">
      <BackButton />
      <CinemaAppHero
        titleRef={titleRef}
        subtitleRef={subtitleRef}
        mainImageRef={mainImageRef}
      />
      <Overview overviewRef={overviewRef} />
      <ProblemGoal problemGoalRef={problemGoalRef} />
      <WireframesGallery imagesRef={imagesRef} />
    </div>
  )
}

export default CinemaAppDetail

