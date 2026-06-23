'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Command = 'about' | 'skills' | 'experience' | 'projects' | 'contact' | 'help';

interface OutputLine {
  id: number;
  type: 'command' | 'output';
  content: React.ReactNode;
}

const commands: Command[] = ['about', 'skills', 'experience', 'projects', 'contact', 'help'];

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<OutputLine[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [lineCounter, setLineCounter] = useState(0);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Show welcome message on mount
    addOutput('welcome', null);
  }, []);

  

  const addOutput = (cmd: string | null, userTyped: boolean | null) => {
    setLineCounter(prev => prev + 1);
    const id = Date.now();

    if (cmd === 'welcome') {
      setHistory([
        {
          id,
          type: 'output',
          content: (
            <div className="space-y-4">
              <p className="text-cyan-400 font-semibold">Welcome to my interactive portfolio terminal!</p>
              <p className="text-zinc-400 text-sm">Type a command or click one of the buttons below to learn more about me.</p>
            </div>
          )
        }
      ]);
      return;
    }

    // Add command to history if user typed it
    if (userTyped) {
      setHistory(prev => [
        ...prev,
        {
          id: id - 0.5,
          type: 'command',
          content: `portfolio:~$ ${cmd}`
        }
      ]);
    }

    const output = getCommandOutput(cmd || '');
    setHistory(prev => [
      ...prev,
      {
        id,
        type: 'output',
        content: output
      }
    ]);
  };

  const handleCommand = (cmd: string) => {
    const normalized = cmd.trim().toLowerCase();
    addOutput(normalized, true);
    setInputValue('');
  };

  const handleButtonClick = (cmd: Command) => {
    // Clear history and show only the selected command output
    setHistory([]);
    const id = Date.now();
    const output = getCommandOutput(cmd);
    setHistory([
      {
        id,
        type: 'output',
        content: output
      }
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleCommand(inputValue);
    }
  };

  const getCommandOutput = (cmd: string): React.ReactNode => {
    switch (cmd) {
      case 'about':
        return (
          <div className="space-y-3">
            <p className="text-cyan-400 font-semibold text-lg">About Me</p>
            <p className="text-zinc-300 leading-relaxed">
              I specialize in building production-ready full stack applications and AI-powered tools. I've shipped real client projects at IRIS Software Solutions, built a government web platform used by Pakistan's Fishermen's Co-operative Society, and developed AI agents using OpenAI Agents SDK.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              I'm currently deepening my expertise in agentic AI architecture.
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <div className="bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <p className="text-xs text-zinc-500">Experience</p>
                <p className="text-cyan-400 font-semibold">1+ Years</p>
              </div>
              <div className="bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <p className="text-xs text-zinc-500">Projects</p>
                <p className="text-cyan-400 font-semibold">5+ Completed</p>
              </div>
              <div className="bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                <p className="text-xs text-zinc-500">Status</p>
                <p className="text-emerald-400 font-semibold">Available</p>
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-3">
            <p className="text-cyan-400 font-semibold text-lg">Tech Stack</p>
            <div className="space-y-3">
              <div>
                <p className="text-zinc-500 text-sm mb-1.5">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'Python', 'PHP'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-zinc-800/70 border border-cyan-500/30 text-cyan-400 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-zinc-500 text-sm mb-1.5">Frameworks</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Node.js', 'FastAPI', 'Tailwind CSS'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-zinc-800/70 border border-cyan-500/30 text-cyan-400 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-zinc-500 text-sm mb-1.5">AI & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {['OpenAI SDK', 'Claude Code', 'Git', 'MySQL', 'Neon DB'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-zinc-800/70 border border-cyan-500/30 text-cyan-400 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-4">
            <p className="text-cyan-400 font-semibold text-lg">Work Experience</p>
            <div className="space-y-4">
              <div className="border-l-2 border-cyan-500 pl-4 pb-4">
                <p className="text-white font-semibold">Full Stack Developer</p>
                <p className="text-cyan-400 text-sm">IRIS Software Solutions</p>
                <p className="text-zinc-500 text-xs mt-1">August 2025 - Present · Hyderabad, Pakistan</p>
                <p className="text-zinc-300 text-sm mt-2 leading-relaxed">
                  Working on real client-facing projects delivering complete web solutions from frontend to backend using Next.js, Tailwind CSS, PHP, and MySQL.
                </p>
              </div>
              <div className="border-l-2 border-zinc-600 pl-4 pb-4">
                <p className="text-white font-semibold">Python Instructor</p>
                <p className="text-cyan-400 text-sm">NAVTTC</p>
                <p className="text-zinc-500 text-xs mt-1">Feb 2026 - May 2026 · Hyderabad, Pakistan</p>
                <p className="text-zinc-300 text-sm mt-2 leading-relaxed">
                  Training students in Python fundamentals and programming concepts as an official instructor.
                </p>
              </div>
              <div className="border-l-2 border-zinc-600 pl-4">
                <p className="text-white font-semibold">Web Developer Intern</p>
                <p className="text-cyan-400 text-sm">IRIS Software Solutions</p>
                <p className="text-zinc-500 text-xs mt-1">May 2025 - July 2025 · Hyderabad, Pakistan</p>
                <p className="text-zinc-300 text-sm mt-2 leading-relaxed">
                  Completed a 3-month internship building full stack web applications. Transitioned into a full-time role after successful completion.
                </p>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-3">
            <p className="text-cyan-400 font-semibold text-lg">Featured Projects</p>
            <p className="text-zinc-300 leading-relaxed">
              Visit the Projects section below to see my portfolio of full-stack applications, AI agents, and web platforms.
            </p>
            <p className="text-zinc-500 text-sm">
              Tip: Scroll down or use the navigation menu to explore my projects.
            </p>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-3">
            <p className="text-cyan-400 font-semibold text-lg">Contact Information</p>
            <div className="space-y-2">
              <p className="text-zinc-300">
                <span className="text-zinc-500">Email:</span>{' '}
                <a href="mailto:bhuttoshahab15@gmail.com" className="text-cyan-400 hover:underline">
                  bhuttoshahab15@gmail.com
                </a>
              </p>
              <p className="text-zinc-300">
                <span className="text-zinc-500">LinkedIn:</span>{' '}
                <a href="https://www.linkedin.com/in/shahab1544" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  linkedin.com/in/shahab1544
                </a>
              </p>
              <p className="text-zinc-300">
                <span className="text-zinc-500">GitHub:</span>{' '}
                <a href="https://github.com/Shahab155" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  github.com/Shahab155
                </a>
              </p>
              <p className="text-zinc-300">
                <span className="text-zinc-500">Twitter:</span>{' '}
                <a href="https://x.com/Shahab1544SK" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  @Shahab1544SK
                </a>
              </p>
            </div>
          </div>
        );

      case 'help':
        return (
          <div className="space-y-3">
            <p className="text-cyan-400 font-semibold text-lg">Available Commands</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p className="text-zinc-300"><span className="text-cyan-400 font-mono">about</span> - Learn about me</p>
              <p className="text-zinc-300"><span className="text-cyan-400 font-mono">skills</span> - View my tech stack</p>
              <p className="text-zinc-300"><span className="text-cyan-400 font-mono">experience</span> - Work history</p>
              <p className="text-zinc-300"><span className="text-cyan-400 font-mono">projects</span> - My projects</p>
              <p className="text-zinc-300"><span className="text-cyan-400 font-mono">contact</span> - Get in touch</p>
              <p className="text-zinc-300"><span className="text-cyan-400 font-mono">clear</span> - Clear terminal</p>
            </div>
          </div>
        );

      case 'clear':
        setHistory([]);
        setTimeout(() => addOutput('welcome', null), 100);
        return null;

      default:
        return (
          <p className="text-red-400">
            Command not found: <span className="font-mono">{cmd}</span>. Type 'help' for available commands.
          </p>
        );
    }
  };

  return (
    <section
      id="about"
      className="py-24 bg-[var(--color-bg)] w-full overflow-hidden relative border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-800"
        >
          {/* Terminal Header */}
          <div className="bg-zinc-800/80 px-4 py-3 flex items-center gap-2 border-b border-zinc-700/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 ml-4">
              <span className="text-cyan-400 text-sm">▸</span>
              <span className="text-zinc-400 text-sm font-medium">Interactive Terminal</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            className="bg-zinc-950 p-6 font-mono text-sm h-[500px] overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Command History */}
            <div className="space-y-4">
              {history.map((line) => (
                <motion.div
                  key={line.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {line.type === 'command' ? (
                    <p className="text-blue-400">{line.content}</p>
                  ) : (
                    <div className="text-zinc-300">{line.content}</div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Command Prompt */}
            <div className="mt-6 space-y-4">
              <p className="text-yellow-400 font-semibold">What do you want to know about me?</p>
              <p className="text-zinc-500 text-xs">Pick an option to run the command instantly.</p>

              {/* Command Buttons */}
              <div className="flex flex-wrap gap-2">
                {commands.map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleButtonClick(cmd)}
                    className="px-3 py-1.5 bg-zinc-800/50 hover:bg-zinc-700/70 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 rounded text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Input Line */}
              <div className="flex items-center gap-2 mt-6">
                <span className="text-blue-400">portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command..."
                  className="flex-1 bg-transparent outline-none text-zinc-300 placeholder-zinc-700"
                  autoFocus
                />
              </div>
            </div>

            {/* Scroll anchor */}
            <div ref={terminalEndRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
