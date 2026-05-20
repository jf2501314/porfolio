'use client';

import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-foreground/40 text-sm font-mono">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-accent transition-colors"
        >
          Back to top
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>

        <div className="text-foreground/40 text-sm font-mono">
          Built with Next.js & GSAP
        </div>
      </div>
    </footer>
  );
}
