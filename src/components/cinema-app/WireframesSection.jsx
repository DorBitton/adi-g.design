import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const WireframesSection = ({ wireframesRef }) => {
  const containerRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [useCarousel, setUseCarousel] = useState(false)

  // Check if screen width can fit the images
  useEffect(() => {
    const checkScreenWidth = () => {
      // 5 images * 200px + 4 gaps * 44px + padding = ~1176px + 96px buffer
      const minWidthNeeded = 1176 + 96
      setUseCarousel(window.innerWidth < minWidthNeeded)
    }

    checkScreenWidth()
    window.addEventListener('resize', checkScreenWidth)
    return () => window.removeEventListener('resize', checkScreenWidth)
  }, [])

  useLayoutEffect(() => {
    let ctx = null
    
    const timer = setTimeout(() => {
      if (!wireframesRef.current) {
        ScrollTrigger.refresh()
        return
      }

      ctx = gsap.context(() => {
        // Wireframes section animation
        const wireframeItems = wireframesRef.current?.children || []
        gsap.fromTo(
          wireframeItems,
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
              trigger: wireframesRef.current,
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
  }, [wireframesRef])

  const baseUrl = import.meta.env.BASE_URL
  const wireframeImages = [
    { src: `${baseUrl}images/cinema-app/Lofi-Wireframe-Sketches/step 1.png`, alt: 'Cinema App screen 1' },
    { src: `${baseUrl}images/cinema-app/Lofi-Wireframe-Sketches/step 2.png`, alt: 'Cinema App screen 2' },
    { src: `${baseUrl}images/cinema-app/Lofi-Wireframe-Sketches/step 3 1.png`, alt: 'Cinema App screen 3' },
    { src: `${baseUrl}images/cinema-app/Lofi-Wireframe-Sketches/step 4.png`, alt: 'Cinema App screen 4' },
    { src: `${baseUrl}images/cinema-app/Lofi-Wireframe-Sketches/step 5 1.png`, alt: 'Cinema App screen 5' },
  ]

  // Navigation functions for carousel
  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? wireframeImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === wireframeImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div ref={containerRef} className="w-full bg-black py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={wireframesRef} className="space-y-12 opacity-100">
          {/* Title */}
          <h2
            className="text-[50px] text-lato-bold font-bold text-center text-white mb-20"
          >
            Lofi Wireframe Sketches
          </h2>

          {useCarousel ? (
            /* Mobile/Tablet: Carousel with navigation buttons */
            <div className="relative w-full px-4">
              {/* Carousel Container */}
              <div className="relative flex justify-center items-center">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-0 z-10 p-2 bg-neutral-800/80 hover:bg-neutral-700 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Image */}
                <div className="w-full max-w-[300px] mx-12">
                  <img
                    src={wireframeImages[currentImageIndex].src}
                    alt={wireframeImages[currentImageIndex].alt}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-0 z-10 p-2 bg-neutral-800/80 hover:bg-neutral-700 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4 text-neutral-300 text-sm">
                {currentImageIndex + 1} / {wireframeImages.length}
              </div>
            </div>
          ) : (
            /* Desktop/Tablet: Horizontal layout */
            <div className="flex flex-nowrap justify-center items-center gap-11">
              {wireframeImages.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[160px] lg:w-[200px]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WireframesSection

