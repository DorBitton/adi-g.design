import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current || !textRef.current) return;

      // Animate text lines
      const lines = textRef.current.querySelectorAll('.contact-line');
      gsap.from(lines, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[60vh] bg-background flex items-center justify-start py-20 md:py-32"
    >
      <div id="contact" className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16 lg:gap-20">
          {/* Left side - Text */}
          <div ref={textRef} className="space-y-4 ml-[10%] lg:ml-0 flex-1">
            <h2 
              className="contact-line text-[80px] italic text-[#F5F0E7] leading-tight"
              style={{fontFamily: 'Casta, serif'}}
            >
              Let's create
            </h2>
            <h2 
              className="contact-line text-[80px] italic text-[#F5F0E7] leading-tight"
              style={{fontFamily: 'Casta, serif'}}
            >
              great things
            </h2>
            <h2 
              className="contact-line text-[80px] italic text-[#F5F0E7] leading-tight"
              style={{fontFamily: 'Casta, serif'}}
            >
              together
            </h2>
          </div>

          {/* Right side - Contact Info */}
          <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-auto lg:min-w-[280px]">
            {/* Divider line */}
            <div className="hidden lg:block w-px h-16 bg-[#F5F0E7]/20"></div>
            
            <div className="flex flex-col gap-6">
              <div className="group">
                <div className="text-[#F5F0E7]/60 font-lato-light text-sm uppercase tracking-wider mb-2">
                  Name
                </div>
                <div className="text-[#F5F0E7] font-lato text-xl">
                  Adi Gur
                </div>
              </div>

              <div className="group">
                <div className="text-[#F5F0E7]/60 font-lato-light text-sm uppercase tracking-wider mb-2">
                  Email
                </div>
                <a 
                  href="mailto:adigur94@gmail.com" 
                  className="text-[#F5F0E7] font-lato text-xl hover:text-primary transition-colors duration-300 inline-block group-hover:translate-x-1 transition-transform"
                >
                  adigur94@gmail.com
                </a>
              </div>

              <div className="group">
                <div className="text-[#F5F0E7]/60 font-lato-light text-sm uppercase tracking-wider mb-2">
                  Phone
                </div>
                <a 
                  href="tel:+40756266862" 
                  className="text-[#F5F0E7] font-lato text-xl hover:text-primary transition-colors duration-300 inline-block group-hover:translate-x-1 transition-transform"
                >
                  +40756266862
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

