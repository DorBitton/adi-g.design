import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SmallProjects = () => {
  const containerRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: 'Small Project One',
      description: 'Description for the first small project. This is a brief overview of what this project is about.',
      image: '/images/projects/cinema.png',
      imagePosition: 'left'
    },
    {
      id: 2,
      title: 'Small Project Two',
      description: 'Description for the second small project. This is a brief overview of what this project is about.',
      image: '/images/projects/cinema.png',
      imagePosition: 'right'
    },
    {
      id: 3,
      title: 'Small Project Three',
      description: 'Description for the third small project. This is a brief overview of what this project is about.',
      image: '/images/projects/cinema.png',
      imagePosition: 'left'
    }
  ]

  useEffect(() => {
    const initTimeout = setTimeout(() => {
      const boxes = gsap.utils.toArray('.box-wrapper')
      
      boxes.forEach((box, index) => {
        const boxInner = box.querySelector('.box')
        
        // Set initial state
        gsap.set(boxInner, { opacity: 0, y: 100 })
        
        // Animate in with opacity and Y movement
        gsap.to(boxInner, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
            scroller: '#smooth-wrapper'
          }
        })
        
        // Pin each box when it reaches the top
        ScrollTrigger.create({
          trigger: box,
          start: 'top top',
          end: 'bottom top',
          pin: boxInner,
          pinSpacing: false,
          scroller: '#smooth-wrapper'
        })
      })

      ScrollTrigger.refresh()
    }, 500)

    return () => {
      clearTimeout(initTimeout)
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger?.classList?.contains('box-wrapper') || 
            trigger.pin?.classList?.contains('box')) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section ref={containerRef} id="small-projects" className="wrapper">
      <div className="boxes">
        {projects.map((project, index) => (
          <div key={project.id} className="box-wrapper" style={{ height: '100vh' }}>
            <div 
              className="box w-full bg-[#93472D] flex items-center"
              style={{
                height: '30vh',
                minHeight: '300px',
                width: '100%'
              }}
            >
              <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  project.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Image */}
                  <div className={`${project.imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
                    <div className="rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ maxHeight: '20vh' }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`${project.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#F7EFE2] mb-4 font-lato-bold">
                      {project.title}
                    </h3>
                    <p className="text-lg text-[#F7EFE2] font-lato-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SmallProjects

