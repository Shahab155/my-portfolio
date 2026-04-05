'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi';
import { FaXTwitter,  FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { CgSpinner } from 'react-icons/cg';


/* ─── Animation variants ─── */
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeftVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeRightVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

/* ─── Info cards data ─── */
const infoCards = [
  {
    icon: <HiOutlineMail className="w-5 h-5" />,
    title: 'Email',
    subtitle: 'bhuttoshahab15@gmail.com',
    href: 'mailto:bhuttoshahab15@gmail.com',
    external: false,
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    title: 'LinkedIn',
    subtitle: "Let's connect professionally",
    href: 'https://www.linkedin.com/in/shahab1544',
    external: true,
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    title: 'GitHub',
    subtitle: 'Check out my projects',
    href: 'https://github.com/Shahab155',
    external: true,
  },
  {
    icon:<FaXTwitter className="w-5 h-5" />,
    title: 'Twitter(X)',
    subtitle: 'Contact me on Twitter',
    href: 'https://x.com/Shahab1544SK',
    external: true,
  }
];

/* ─── Reusable input styles ─── */
const inputClass =
  'w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-[var(--color-text-primary)] dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[var(--color-bg)] w-full overflow-hidden relative transition-colors duration-300 border-b border-zinc-200 dark:border-zinc-800"
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />

      {/* Glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* ── Section Heading ── */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-8 h-px bg-cyan-500 opacity-50" />
            <span className="text-xs tracking-widest text-cyan-500 uppercase font-bold">
              Contact
            </span>
            <div className="w-8 h-px bg-cyan-500 opacity-50" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] dark:text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-base font-light text-zinc-700 dark:text-zinc-400 leading-relaxed tracking-wide text-center max-w-xl mx-auto">
            Have a project in mind or want to hire me?<br className="hidden sm:block" />
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ── LEFT: Info cards ── */}
          <div className="flex flex-col gap-4">
            {infoCards.map((card, i) => (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                variants={fadeLeftVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-cyan-500/50 rounded-2xl p-5 cursor-pointer transition-all duration-300 group backdrop-blur-sm"
              >
                {/* Icon box */}
                <div className="bg-cyan-500/10 text-cyan-500 p-3 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  {card.icon}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-sm text-[var(--color-text-secondary)] dark:text-zinc-400 mb-0.5">{card.title}</p>
                  <p className="text-[var(--color-text-primary)] dark:text-white font-semibold truncate">{card.subtitle}</p>
                </div>

                {/* Arrow */}
                <motion.span
                  className="ml-auto text-zinc-400 dark:text-zinc-600 group-hover:text-cyan-500 text-xl transition-colors duration-300 shrink-0"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </motion.a>
            ))}

            {/* Decorative tagline under cards */}
            <motion.p
              variants={fadeLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-zinc-600 text-sm mt-2 pl-1"
            >
              Typically replies within 24 hours ✦
            </motion.p>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <motion.div
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
            >
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm text-[var(--color-text-secondary)] dark:text-zinc-400 mb-1">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  suppressHydrationWarning
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm text-[var(--color-text-secondary)] dark:text-zinc-400 mb-1">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  suppressHydrationWarning
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm text-[var(--color-text-secondary)] dark:text-zinc-400 mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  suppressHydrationWarning
                  className={inputClass}
                />
              </div>

              {/* Submit button */}
              <motion.button
                id="contact-submit"
                type="submit"
                suppressHydrationWarning
                disabled={isLoading || isSuccess}
                whileHover={{ scale: isLoading || isSuccess ? 1 : 1.02 }}
                whileTap={{ scale: isLoading || isSuccess ? 1 : 0.98 }}
                className={`w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-base transition-all duration-300
                  ${isSuccess
                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 cursor-default'
                    : 'bg-cyan-500 hover:bg-cyan-400 text-black cursor-pointer'
                  }
                  disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isLoading && (
                  <>
                    <CgSpinner className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                )}
                {isSuccess && (
                  <>
                    <HiOutlineCheckCircle className="w-4 h-4" />
                    Message Sent! ✅
                  </>
                )}
                {!isLoading && !isSuccess && 'Send Message →'}
              </motion.button>

              {/* Error feedback */}
              {isError && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm"
                >
                  <HiOutlineExclamationCircle className="w-4 h-4 shrink-0" />
                  Something went wrong. Try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
