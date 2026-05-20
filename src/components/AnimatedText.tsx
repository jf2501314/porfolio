'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

export function AnimatedText({ text, className, once = true, delay = 0 }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.char');
    
    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.02,
        ease: 'power4.out',
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="char inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
