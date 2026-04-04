'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      icon: "👨‍💻",
      title: "What I build",
      description: "Complete web applications with tidy, adaptable frontends paired with the server-side essentials to activate them."
    },
    {
      icon: "⚙️",
      title: "My Stack",
      description: "I work with technologies, like Next.js, FastAPI and Python to deliver solutions that cover everything. I make sure the frontends look really good and the backend systems are strong."
    },
    {
      icon: "🤖",
      title: "Currently Learning",
      description: "Exploring Agentic AI, using OpenAI Agents SDK for custom agents and claude code for general agents."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[var(--color-bg)] w-full overflow-hidden relative">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50"></div>
          <span className="text-xs tracking-widest text-[var(--color-accent)] uppercase font-bold">
            ABOUT ME
          </span>
          <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50"></div>
        </div>

        {/* Section Heading */}
        <motion.h2
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] dark:text-white mb-8"
        >
          A Little About Me
        </motion.h2>

        {/* Short Bio Paragraphs */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center space-y-4 text-[var(--color-text-secondary)] dark:text-zinc-400 text-lg leading-relaxed mb-16"
        >
          <p>
            I&apos;m a Full Stack Developer from Pakistan with 1+ year of hands-on experience building modern web applications.
          </p>

        </motion.div>

        {/* Three Highlight Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 * (index + 1) }}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-[var(--color-accent)] dark:hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-bold text-xl text-[var(--color-text-primary)] dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] dark:text-zinc-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
