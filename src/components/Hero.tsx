'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatedText } from './AnimatedText';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.5,
    })
    .from('.hero-cta', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    }, '-=0.4')
    .from('.scroll-indicator', {
      opacity: 0,
      y: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6"
    >
      {/* Background Mesh */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #8b5cf6 0%, transparent 50%), 
                            radial-gradient(circle at 80% 20%, #4c1d95 0%, transparent 30%)`,
          filter: 'blur(100px)',
        }}
      />
      
      <div className="text-center z-10">
        <AnimatedText
          text="JOHN DOE"
          className="text-6xl md:text-9xl font-black tracking-tighter mb-4"
        />
        <p className="hero-subtitle text-xl md:text-2xl text-foreground/60 font-mono mb-8">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="hero-cta px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold hover:scale-105 transition-transform"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="hero-cta px-8 py-4 border border-border rounded-full font-bold hover:bg-white/5 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40">
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} />
      </div>
    </section>
  );
}
