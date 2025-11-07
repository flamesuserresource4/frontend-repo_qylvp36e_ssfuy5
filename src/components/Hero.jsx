import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Camera, Video, Edit3, Code2 } from 'lucide-react';

const Badge = ({ icon: Icon, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-white border border-white/20"
  >
    <Icon className="h-4 w-4" />
    <span className="text-sm font-medium">{label}</span>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            Modern • Minimal • Story-driven
          </span>

          <h1 className="text-4xl leading-tight font-semibold text-white sm:text-6xl md:text-7xl">
            Lucku Achmadanu Amartha
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl">
            Videographer • Photographer • Editor • Content Creator • Full‑Stack Developer
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Badge icon={Camera} label="Cinematic Frames" />
            <Badge icon={Video} label="Storytelling Videos" />
            <Badge icon={Edit3} label="Precise Editing" />
            <Badge icon={Code2} label="Interactive Experiences" />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              View Portfolio
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
