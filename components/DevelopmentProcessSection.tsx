'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Lightbulb,
  Rocket,
  ClipboardCheck,
  Repeat2,
} from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Observe',
    icon: Search,
    summary: 'Discover the real problem and the opportunity behind it.',
    description:
      'I start by listening closely, mapping the workflow, and understanding the actual user and business needs before choosing a direction.',
    points: ['User research', 'Scope mapping', 'Goal alignment'],
  },
  {
    number: '02',
    title: 'Think',
    icon: Lightbulb,
    summary: 'Shape the product strategy and technical direction.',
    description:
      'I turn the findings into a clear structure: architecture, UX flow, and the decisions that keep the solution practical and scalable.',
    points: ['UX planning', 'System design', 'Feature prioritization'],
  },
  {
    number: '03',
    title: 'Act',
    icon: Rocket,
    summary: 'Build the product in lean, visible stages.',
    description:
      'I move from planning into focused execution, creating a working version that can be tested, improved, and shared quickly.',
    points: ['Rapid prototyping', 'Build & iterate', 'Performance-first coding'],
  },
  {
    number: '04',
    title: 'Check',
    icon: ClipboardCheck,
    summary: 'Validate the experience and remove friction.',
    description:
      'I review the product from the user lens, test edge cases, and tighten the details so the final flow feels smooth and reliable.',
    points: ['QA review', 'UX checks', 'Refinement'],
  },
  {
    number: '05',
    title: 'Iterate',
    icon: Repeat2,
    summary: 'Improve continuously after launch.',
    description:
      'I keep refining based on feedback, measuring outcomes, and evolving the product so it keeps delivering long-term value.',
    points: ['Feedback loop', 'Optimization', 'Growth roadmap'],
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function DevelopmentProcessSection() {
  const [activeStep, setActiveStep] = useState(processSteps[2]);
  const activeIndex = processSteps.findIndex((step) => step.number === activeStep.number);
  const ActiveIcon = activeStep.icon;

  return (
    <section
      id="process"
      className="relative w-full overflow-hidden border-b border-zinc-800/80 bg-[var(--color-bg)] py-14 md:py-16 transition-colors duration-300 scroll-mt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mb-8 text-center"
        >
          <motion.div
            variants={fadeUpVariant}
            className="mb-4 flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-8 bg-[var(--color-accent)] opacity-50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[var(--color-accent)]">
              MY PROCESS
            </span>
            <div className="h-[1px] w-8 bg-[var(--color-accent)] opacity-50" />
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            How I take an idea to live
          </motion.h2>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="relative mx-auto flex aspect-square w-full max-w-[450px] items-center justify-center"
          >
            <div className="absolute inset-5 rounded-full border border-zinc-700/80" />
            <div className="absolute inset-[18%] rounded-full border border-zinc-700/60" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.1),transparent_58%)]" />

            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-accent)]/70 bg-[var(--color-accent)]/15 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
              <div className="flex flex-col items-center gap-1 text-center text-[var(--color-accent)]">
                <span className="text-[9px] font-semibold uppercase tracking-[0.28em]">
                  {activeStep.number}
                </span>
                <span className="text-lg font-bold uppercase tracking-[0.08em]">
                  {activeStep.title}
                </span>
              </div>
            </div>

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const angle = (Math.PI * 2 * index) / processSteps.length - Math.PI / 2;
              const radius = 32;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              const isActive = step.number === activeStep.number;

              return (
                <motion.button
                  key={step.number}
                  type="button"
                  variants={fadeUpVariant}
                  onClick={() => setActiveStep(step)}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 transition-all duration-300"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm transition-all duration-300 ${
                      isActive
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.28)]'
                        : 'border-zinc-700 bg-[#0b0b0b] text-[var(--color-accent)] hover:border-[var(--color-accent)]/70'
                    }`}
                  >
                    <Icon size={18} />
                  </span>
                  <span
                    className={`rounded-full border px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] ${
                      isActive
                        ? 'border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 text-white'
                        : 'border-zinc-700 bg-zinc-950/80 text-zinc-300'
                    }`}
                  >
                    {step.title}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="rounded-[1.75rem] border border-zinc-800/80 bg-[rgba(11,11,11,0.9)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <ActiveIcon size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                    STEP {activeStep.number}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {activeStep.title}
                  </h3>
                </div>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                {activeIndex + 1}/5
              </span>
            </div>

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
              {activeStep.summary}
            </p>

            <p className="text-sm leading-7 text-zinc-300">
              {activeStep.description}
            </p>

            <div className="mt-6 space-y-3">
              {activeStep.points.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                  <span className="text-sm text-zinc-200">{point}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {processSteps.map((step) => {
            const isActive = step.number === activeStep.number;

            return (
              <motion.button
                key={step.number}
                type="button"
                variants={fadeUpVariant}
                onClick={() => setActiveStep(step)}
                className={`rounded-full border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                  isActive
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/12 text-white shadow-[0_0_20px_rgba(34,211,238,0.1)]'
                    : 'border-zinc-700 bg-zinc-950/60 text-zinc-400 hover:border-[var(--color-accent)]/40 hover:text-white'
                }`}
              >
                {step.number} · {step.title}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}