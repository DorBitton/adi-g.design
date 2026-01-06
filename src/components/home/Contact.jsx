import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMobile, useTablet, useDesktop } from '../../hooks/useResponsive';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  
  // Responsive hooks
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isDesktop = useDesktop();

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
      className={`relative w-full min-h-[60vh] bg-background flex items-center justify-center ${
        isMobile ? 'py-12' : 
        isTablet ? 'py-16' : 
        'py-20 md:py-32'
      }`}
    >
      <div id="contact" className={`w-full ${
        isMobile ? 'px-4' : 
        isTablet ? 'px-6' : 
        'px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20'
      }`}>
        <div className={`mx-auto max-w-6xl flex items-start justify-between gap-12 ${
          isMobile ? 'flex-col ml-0' : 
          isTablet ? 'flex-col ml-0 lg:gap-16' : 
          'flex-col lg:flex-row lg:items-center lg:gap-20 ml-[10%]'
        }`}>
          {/* Left side - Big Casta text */}
          <div ref={textRef} className={isMobile ? 'space-y-1' : isTablet ? 'space-y-2' : 'space-y-2 sm:space-y-3 flex-1'}>
            <h2
              className={`contact-line italic text-[#F5F0E7] leading-none tracking-tight ${
                isMobile ? 'text-[48px]' : 
                isTablet ? 'text-[56px]' : 
                'text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px]'
              }`}
              style={{ fontFamily: 'Casta, serif' }}
            >
              Let's create
            </h2>
            <h2
              className={`contact-line italic text-[#F5F0E7] leading-none tracking-tight ${
                isMobile ? 'text-[48px]' : 
                isTablet ? 'text-[56px]' : 
                'text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px]'
              }`}
              style={{ fontFamily: 'Casta, serif' }}
            >
              great things
            </h2>
            <h2
              className={`contact-line italic text-[#F5F0E7] leading-none tracking-tight ${
                isMobile ? 'text-[48px]' : 
                isTablet ? 'text-[56px]' : 
                'text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px]'
              }`}
              style={{ fontFamily: 'Casta, serif' }}
            >
              together
            </h2>
          </div>

          {/* Right side - Contact Info */}
          <div className={isMobile ? 'w-full' : isTablet ? 'w-full' : 'w-full lg:w-[400px] xl:w-[440px]'}>
            <div className="flex flex-col text-[#F5F0E7]">
              {/* Row 1: Name + Adi Gur and Phone */}
              <div className="grid grid-cols-2 gap-12 mb-8">
                <div>
                  <div className={`font-lato-light font-light text-primary mb-2 ${
                    isMobile ? 'text-[18px]' : 'text-[20px]'
                  }`}>
                    Name
                  </div>
                  <div className={`font-lato-light font-light ${
                    isMobile ? 'text-[18px]' : 'text-[20px]'
                  }`}>
                    Adi Gur
                  </div>
                </div>
                <div>
                  <div className={`font-lato-light font-light text-primary mb-2 ${
                    isMobile ? 'text-[18px]' : 'text-[20px]'
                  }`}>
                    Phone
                  </div>
                  <a
                    href="tel:+40756266862"
                    className={`font-lato-light font-light hover:text-[#F5F0E7]/80 transition-colors ${
                      isMobile ? 'text-[18px]' : 'text-[20px]'
                    }`}
                  >
                    +40756266862
                  </a>
                </div>
              </div>

              {/* Row 2: Email and LinkedIn */}
              <div className="grid grid-cols-2 gap-12 mb-10">
                <div>
                  <div className={`font-lato-light font-light text-primary mb-2 ${
                    isMobile ? 'text-[18px]' : 'text-[20px]'
                  }`}>
                    Email
                  </div>
                  <a
                    href="mailto:adigur94@gmail.com"
                    className={`font-lato-light font-light hover:text-[#F5F0E7]/80 transition-colors ${
                      isMobile ? 'text-[18px]' : 'text-[20px]'
                    }`}
                  >
                    adigur94@gmail.com
                  </a>
                </div>
                <div>
                  <div className={`font-lato-light font-light text-primary mb-2 ${
                    isMobile ? 'text-[18px]' : 'text-[20px]'
                  }`}>
                    LinkedIn
                  </div>
                  <a
                    href="https://www.linkedin.com/in/adi-gur-aa597a318/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-lato-light font-light hover:text-[#F5F0E7]/80 transition-colors ${
                      isMobile ? 'text-[18px]' : 'text-[20px]'
                    }`}
                  >
                    linkedin.com/in/adi-gur
                  </a>
                </div>
              </div>

              {/* Download Resume button - slightly left of center */}
              <div className="flex justify-center -ml-20">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Adi_Gur_Resume.pdf"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg font-lato-light font-light transition-all duration-300 ${
                    isMobile ? 'text-[16px]' : 'text-[18px]'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
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

