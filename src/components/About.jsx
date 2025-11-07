import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-black py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white">About</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I’m Lucku Achmadanu Amartha — a storyteller at heart. I craft visuals that feel alive: cinematic films, evocative photographs, crisp edits, and interactive web experiences. My approach blends creative intuition with technical precision, bringing ideas to life through clean aesthetics and meaningful narratives.
            </p>
            <p className="mt-4 text-white/70">
              Whether it’s directing a short film, building a brand teaser, or engineering a smooth user journey on the web, I shape stories that connect.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {["Videography","Photography","Editing","Content","Web","Branding"].map((tag) => (
              <div key={tag} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-white font-semibold">{tag}</p>
                <p className="mt-1 text-xs text-white/60">Selected works and case studies.</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
