'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-[#0f1729]/80 backdrop-blur-md border-b border-outline-variant/30 dark:border-white/10 shadow-sm">
      <nav className="max-w-container mx-auto flex justify-between items-center px-gutter py-4">
        <div className="text-headline-sm font-bold text-on-surface dark:text-white">
          Muhtasim Ahmed
        </div>

        <div className="hidden md:flex items-center gap-8 text-body-md">
          <a href="#experience" className="text-on-surface-variant dark:text-gray-300 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200">Experience</a>
          <a href="#portfolio" className="text-on-surface-variant dark:text-gray-300 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200">Portfolio</a>
          <a href="#skills" className="text-on-surface-variant dark:text-gray-300 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200">Skills</a>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full text-on-surface dark:text-white hover:bg-surface-variant dark:hover:bg-white/10 transition-standard"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <a href="#contact" className="bg-primary dark:bg-primary-container text-on-primary px-6 py-2.5 rounded-full text-label-md hover:shadow-lg active:scale-95 transition-standard">
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-on-surface dark:text-white"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0f1729]/95 backdrop-blur-md border-t border-outline-variant/30 dark:border-white/10 px-gutter py-4 space-y-3">
          <a href="#experience" onClick={() => setMobileOpen(false)} className="block text-on-surface-variant dark:text-gray-300 hover:text-primary">Experience</a>
          <a href="#portfolio" onClick={() => setMobileOpen(false)} className="block text-on-surface-variant dark:text-gray-300 hover:text-primary">Portfolio</a>
          <a href="#skills" onClick={() => setMobileOpen(false)} className="block text-on-surface-variant dark:text-gray-300 hover:text-primary">Skills</a>
          <button
            onClick={() => { setIsDark(!isDark); setMobileOpen(false); }}
            className="flex items-center gap-2 text-on-surface-variant dark:text-gray-300"
          >
            <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
            {isDark ? 'Light mode' : 'Dark mode'}
          </button>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block bg-primary text-on-primary px-6 py-2.5 rounded-full text-label-md text-center">
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
