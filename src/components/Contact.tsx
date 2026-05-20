'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatedText } from './AnimatedText';
import { Mail, Send } from 'lucide-react';

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.contact-item', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <AnimatedText
            text="GET IN TOUCH"
            className="text-sm font-mono text-accent tracking-widest mb-4"
          />
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Let's work <br /> together.
          </h2>
          <p className="text-xl text-foreground/60 mb-12 max-w-md">
            Have a project in mind? Or just want to say hi? Feel free to reach out.
          </p>

          <div className="flex gap-6">
            {[
              { icon: <Mail />, href: 'mailto:john@example.com' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="contact-item p-4 bg-card border border-border rounded-full hover:border-accent hover:text-accent transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="contact-item bg-card border border-border p-8 md:p-12 rounded-3xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-mono uppercase tracking-wider text-foreground/40">Name</label>
              <input
                type="text"
                className="w-full bg-background border border-border rounded-xl px-6 py-4 focus:border-accent outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-mono uppercase tracking-wider text-foreground/40">Email</label>
              <input
                type="email"
                className="w-full bg-background border border-border rounded-xl px-6 py-4 focus:border-accent outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-mono uppercase tracking-wider text-foreground/40">Message</label>
              <textarea
                rows={4}
                className="w-full bg-background border border-border rounded-xl px-6 py-4 focus:border-accent outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
