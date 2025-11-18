import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Overview = ({ overviewRef }) => {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = null
    
    const timer = setTimeout(() => {
      if (!overviewRef.current) {
        ScrollTrigger.refresh()
        return
      }

      ctx = gsap.context(() => {
        // Overview section animation
        gsap.fromTo(
          overviewRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: overviewRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        )

        ScrollTrigger.refresh()
      }, containerRef)
    }, 50)

    return () => {
      clearTimeout(timer)
      if (ctx) {
        ctx.revert()
      }
    }
  }, [overviewRef])

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#3A3A3A] py-16 lg:py-20"
    >
      <div ref={overviewRef} className="w-full max-w-7xl mx-auto px-6 lg:px-12 opacity-100">
        <h2
          className="text-3xl lg:text-5xl font-extrabold text-center text-white"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          Overview
        </h2>
      </div>
    </div>
  )
}

export default Overview

