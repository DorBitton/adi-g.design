import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const imageRef = useRef(null)
  const containerRef = useRef(null)
  const isAnimating = useRef(false)
  const dragStart = useRef({ x: 0, startX: 0 })
  const hasDragged = useRef(false)
  const draggedDistance = useRef(0)
  const lastIndex = useRef(currentIndex)

  const slideToNext = () => {
    if (isAnimating.current || currentIndex >= images.length - 1) return
    
    isAnimating.current = true
    const direction = 1 // sliding to the right (next)
    
    // Update index immediately
    setCurrentIndex(currentIndex + 1)
    
    gsap.timeline({
      onComplete: () => {
        isAnimating.current = false
      }
    })
    .to(imageRef.current, {
      x: direction * -100,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      force3D: true
    })
    .set(imageRef.current, { 
      x: direction * 100 
    })
    .to(imageRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.inOut',
      force3D: true
    })
  }

  const slideToPrev = () => {
    if (isAnimating.current || currentIndex <= 0) return
    
    isAnimating.current = true
    const direction = -1 // sliding to the left (previous)
    
    // Update index immediately
    setCurrentIndex(currentIndex - 1)
    
    gsap.timeline({
      onComplete: () => {
        isAnimating.current = false
      }
    })
    .to(imageRef.current, {
      x: direction * -100,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      force3D: true
    })
    .set(imageRef.current, { 
      x: direction * 100 
    })
    .to(imageRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.inOut',
      force3D: true
    })
  }

  // Instant slide changes for drag navigation (no animation)
  const instantSlideToNext = () => {
    if (currentIndex >= images.length - 1) return
    
    gsap.set(imageRef.current, { x: 0, opacity: 1 })
    setCurrentIndex(currentIndex + 1)
  }

  const instantSlideToPrev = () => {
    if (currentIndex <= 0) return
    
    gsap.set(imageRef.current, { x: 0, opacity: 1 })
    setCurrentIndex(currentIndex - 1)
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    hasDragged.current = false
    lastIndex.current = currentIndex
    draggedDistance.current = 0
    dragStart.current = {
      x: e.clientX,
      startX: 0
    }
    
    // Reset image position
    gsap.set(imageRef.current, { x: 0, opacity: 1 })
    
    // Prevent text selection while dragging
    e.preventDefault()
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    
    const deltaX = e.clientX - dragStart.current.x
    draggedDistance.current = deltaX
    
    // Mark that we've actually dragged (threshold of 5px)
    if (Math.abs(deltaX) > 5) {
      hasDragged.current = true
    }
    
    // Calculate how many images we should move based on drag distance
    const threshold = 100 // Distance needed to move one full image
    const imagesMoved = Math.floor(Math.abs(deltaX) / threshold)
    
    // Determine target index based on drag direction
    let targetIndex = lastIndex.current
    if (deltaX < 0) {
      // Dragging left - move forward
      targetIndex = Math.min(lastIndex.current + imagesMoved, images.length - 1)
    } else {
      // Dragging right - move backward
      targetIndex = Math.max(lastIndex.current - imagesMoved, 0)
    }
    
    // Update index if it changed
    if (targetIndex !== currentIndex) {
      setCurrentIndex(targetIndex)
      gsap.set(imageRef.current, { x: 0, opacity: 1 })
    }
    
    // Visual feedback for partial drag
    const remainder = Math.abs(deltaX) % threshold
    const direction = deltaX < 0 ? -1 : 1
    
    // Only show drag feedback if we can still move in that direction
    let visualOffset = 0
    if ((direction < 0 && currentIndex < images.length - 1) || 
        (direction > 0 && currentIndex > 0)) {
      visualOffset = direction * remainder * 0.3 // Reduced visual movement
    }
    
    gsap.set(imageRef.current, {
      x: visualOffset,
      force3D: true
    })
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    
    setIsDragging(false)
    
    // Reset position
    gsap.set(imageRef.current, { x: 0 })
    
    hasDragged.current = false
    draggedDistance.current = 0
  }

  // Global mouse event listeners to track mouse even outside container
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e) => {
        handleMouseMove(e)
      }
      
      const handleGlobalMouseUp = (e) => {
        handleMouseUp(e)
      }
      
      window.addEventListener('mousemove', handleGlobalMouseMove)
      window.addEventListener('mouseup', handleGlobalMouseUp)
      
      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove)
        window.removeEventListener('mouseup', handleGlobalMouseUp)
      }
    }
  }, [isDragging, currentIndex, images.length])

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {/* Image Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-full overflow-hidden rounded-xl select-none"
        onMouseDown={handleMouseDown}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none'
        }}
      >
        <img 
          ref={imageRef}
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-contain pointer-events-none"
          style={{ willChange: 'transform, opacity' }}
          draggable={false}
        />
      </div>

      {/* Glass Effect Navigation Buttons */}
      {currentIndex > 0 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={slideToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 shadow-lg transition-all duration-300 rounded-full w-12 h-12"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </Button>
      )}

      {currentIndex < images.length - 1 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={slideToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 shadow-lg transition-all duration-300 rounded-full w-12 h-12"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </Button>
      )}

      {/* Optional: Image Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md bg-black/30 px-4 py-2 rounded-full text-white text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default ImageSlider

