import React, { useEffect, useState } from 'react';
import x from '../assets/image.png';
import { Download, Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ['Web Developer', 'Full Stack Developer', 'React Specialist'];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Improved Typing Logic for a smoother "human" feel
  useEffect(() => {
    const currentRole = roles[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 relative overflow-hidden bg-slate-50 dark:bg-[#0b0f1a] transition-colors duration-500">
      {/* Background Decoration: Grid & Glow */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col-reverse md:flex-row justify-center items-center
        p-8 md:p-16 gap-12 
        backdrop-blur-2xl bg-white/60 dark:bg-slate-900/50 
        border border-white/40 dark:border-slate-700/50 
        rounded-[2.5rem] shadow-2xl
        max-w-6xl w-full"
      >
        {/* TEXT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest"
            >
              <Sparkles size={14} /> Available for projects
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Mohamed
              </span>
            </h1>

            <div className="h-10 flex justify-center md:justify-start items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300">
                {displayText}
                <span className="inline-block w-[3px] h-8 bg-blue-500 ml-1 animate-pulse"></span>
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg">
              Crafting digital experiences where{' '}
              <span className="text-slate-900 dark:text-white font-semibold">
                performance
              </span>{' '}
              meets
              <span className="text-slate-900 dark:text-white font-semibold">
                {' '}
                design
              </span>
              . Specializing in high-end React & Laravel ecosystems.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all hover:bg-blue-600"
            >
              Download CV
              <Download
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </motion.button>

            <div className="flex gap-4 justify-center">
              <motion.a
                href="https://linkedin.com"
                whileHover={{ y: -5 }}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-blue-600 shadow-md flex items-center justify-center transition-all"
              >
                <Linkedin size={22} />
              </motion.a>

              <motion.a
                href="https://github.com"
                whileHover={{ y: -5 }}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-indigo-600 shadow-md flex items-center justify-center transition-all"
              >
                <Github size={22} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* IMAGE / AVATAR */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="relative group">
            {/* Animated Glow Rings */}
            <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-all duration-700"></div>

            <div className="relative z-10 p-2 border-2 border-dashed border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]">
              <div className="p-2 border-2 border-indigo-500/20 rounded-full">
                <img
                  src={x}
                  alt="Mohamed"
                  className="rounded-full w-56 md:w-80 h-56 md:h-80 object-cover shadow-2xl 
                    transition-all duration-700 group-hover:scale-105 
                    animate-[float_4s_ease-in-out_infinite] cursor-pointer"
                />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden lg:block"
            >
              <div className="text-center">
                <p className="text-2xl font-black text-blue-600">0+</p>
                <p className="text-[10px] uppercase font-bold text-slate-400">
                  Years Exp.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}
