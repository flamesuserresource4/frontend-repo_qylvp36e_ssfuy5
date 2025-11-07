import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Cinematic Travel Film',
    role: 'Direction • Cinematography • Edit',
    thumb: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1640&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Studio Portrait Series',
    role: 'Photography • Retouching',
    thumb: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1640&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Brand Launch Teaser',
    role: 'Concept • Motion • Edit',
    thumb: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1640&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Documentary Short',
    role: 'Direction • Color • Sound',
    thumb: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1640&auto=format&fit=crop',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected Work</h2>
            <p className="mt-2 text-white/70">A mix of film, photography, edits and interactive pieces.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex text-sm font-semibold text-white/80 hover:text-white">Inquire for projects →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href={it.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={it.thumb} alt={it.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-white text-lg font-semibold">{it.title}</h3>
                <p className="text-white/70 text-sm">{it.role}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
