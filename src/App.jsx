import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <footer className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Lucku Achmadanu Amartha — All rights reserved.</p>
          <div className="text-white/60 text-sm">Crafted with care · Modern · Minimal</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
