import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // In a full-stack flow, this would POST to a backend endpoint.
      await new Promise((r) => setTimeout(r, 900));
      setStatus('Thanks — your message has been received.');
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative bg-black py-20">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          Let’s build something meaningful
        </motion.h2>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-1">
            <label className="text-sm text-white/70">Name</label>
            <input required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30" placeholder="Your name" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-white/70">Email</label>
            <input required type="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30" placeholder="you@example.com" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-white/70">Message</label>
            <textarea required rows={5} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30" placeholder="Tell me about your project" />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">Send Message</button>
            <span className="text-sm text-white/70">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
