'use client';

import { motion } from 'framer-motion';
import {
  FiCode,
  FiShoppingCart,
  FiBox,
  FiLayers,
  FiArrowRight,
} from 'react-icons/fi';

const services = [
  {
    icon: FiCode,
    title: 'Custom Web Development',
    description:
      'Modern, responsive websites and web apps built with a strong focus on performance, scalability, and clean product thinking.',
    tags: ['Next.js', 'React', 'Tailwind', 'API Integration'],
  },
  {
    icon: FiShoppingCart,
    title: 'E-Commerce Solutions',
    description:
      'Conversion-focused storefronts designed to showcase products clearly and turn browsing into orders without friction.',
    tags: ['Shop UX', 'Product Pages', 'Checkout Flow', 'CMS'],
  },
  {
    icon: FiBox,
    title: 'AI Chatbots & Agents',
    description:
      'Smart AI assistants and workflow automations that handle support, booking, and business processes more efficiently.',
    tags: ['OpenAI', 'Agents', 'Automation', 'Prompt Design'],
  },
  {
    icon: FiLayers,
    title: 'SaaS & Business Apps',
    description:
      'Custom digital tools for internal operations, dashboards, client portals, and business systems that need to scale.',
    tags: ['Dashboards', 'Admin Panels', 'Auth', 'APIs'],
  },
  {
    icon: FiArrowRight,
    title: 'Optimization & Growth',
    description:
      'Performance tuning, UX improvements, and technical refinements that help a product evolve after launch.',
    tags: ['Performance', 'UX', 'Maintenance', 'Scaling'],
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden border-b border-zinc-800/80 bg-[var(--color-bg)] py-16 md:py-20 transition-colors duration-300 scroll-mt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mb-10 text-center"
        >
          <motion.div
            variants={fadeUpVariant}
            className="mb-5 flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-8 bg-[var(--color-accent)] opacity-50" />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
              SERVICES
            </span>
            <div className="h-[1px] w-8 bg-[var(--color-accent)] opacity-50" />
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            className="mb-3 text-3xl font-bold text-white md:text-4xl"
          >
            WHAT I BUILD
          </motion.h2>

        
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={fadeUpVariant}
                className="group relative h-full rounded-[1.45rem] p-[1px] bg-gradient-to-b from-[var(--color-accent)]/25 to-transparent transition-all duration-500 hover:from-[var(--color-accent)]/45"
              >
                <div className="relative h-full overflow-hidden rounded-[1.45rem] border border-zinc-800/80 bg-[#0b0b0b] p-5 md:p-6">
                  <div className="absolute left-1/2 top-0 h-24 w-3/4 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/8 text-[var(--color-accent)]">
                        <Icon size={20} />
                      </div>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg font-bold tracking-wide text-white md:text-xl">
                      {service.title}
                    </h3>

                    <p className="mb-5 text-sm leading-6 text-zinc-400">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}