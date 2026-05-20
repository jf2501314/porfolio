'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatedText } from './AnimatedText';

const stats = [
  { label: 'Years Experience', value: 3 },
  { label: 'Projects Completed', value: 20 },
  { label: 'Happy Clients', value: 15 },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const counters = containerRef.current?.querySelectorAll('.stat-value');
    
    counters?.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      gsap.fromTo(counter, 
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 90%',
          }
        }
      );
    });

    gsap.from('.about-image', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="about-image relative aspect-square max-w-md mx-auto md:mx-0 bg-card border border-border rounded-2xl flex items-center justify-center text-8xl font-black text-accent/20">
          JD
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
        </div>

        <div>
          <AnimatedText
            text="ABOUT ME"
            className="text-sm font-mono text-accent tracking-widest mb-4"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Crafting digital experiences with precision and passion.
          </h2>
          <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
            I'm a Full Stack Developer based in San Francisco, specializing in building high-performance web applications. 
            With a background in both design and engineering, I bridge the gap between aesthetics and functionality. 
            My goal is to create seamless user experiences that leave a lasting impression.
          </p>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  <span className="stat-value" data-target={stat.value}>0</span>+
                </div>
                <div className="text-xs uppercase tracking-wider text-foreground/40 font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
