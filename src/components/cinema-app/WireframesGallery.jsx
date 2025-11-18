import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WireframesGallery = ({ imagesRef }) => {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = null
    
    const timer = setTimeout(() => {
      if (!imagesRef.current) {
        ScrollTrigger.refresh()
        return
      }

      ctx = gsap.context(() => {
        // Images gallery animation
        const imageItems = imagesRef.current?.children || []
        gsap.fromTo(
          imageItems,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: imagesRef.current,
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
  }, [imagesRef])

  const wireframeImages = [
    { src: 'v451_513.png', alt: 'Cinema App screen 1' },
    { src: 'v449_507.png', alt: 'Cinema App screen 2' },
    { src: 'v449_509.png', alt: 'Cinema App screen 3' },
    { src: 'v449_510.png', alt: 'Cinema App screen 4' },
    { src: 'v449_511.png', alt: 'Cinema App screen 5' },
  ]

  return (
    <div ref={containerRef} className="w-full bg-black pb-16 lg:pb-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={imagesRef}
          className="flex flex-wrap justify-center gap-4 lg:gap-6 opacity-100"
        >
          {wireframeImages.map((image, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0 w-[160px] lg:w-[180px]"
            >
              <img
                src={`/images/cinema-app/${image.src}`}
                alt={image.alt}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WireframesGallery

