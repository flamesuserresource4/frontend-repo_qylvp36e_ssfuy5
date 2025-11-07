import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-black/40 py-3 backdrop-blur">
          <a href="#home" className="px-4 text-sm font-semibold text-white">Lucku A.A.</a>
          <nav className="hidden gap-6 md:flex">
            <a href="#portfolio" className="text-sm text-white/80 hover:text-white">Work</a>
            <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="mr-2 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-white/90">Let’s talk</a>
        </div>
      </div>
    </header>
  );
}
