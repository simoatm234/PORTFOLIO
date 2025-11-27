import React, { useEffect, useState } from 'react';
import x from '../assets/image.png';
import { Download, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ['Web Developer', 'Full Stack Options', 'React Developer'];
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(roles[textIndex].slice(0, i));
      i++;
      if (i > roles[textIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % roles.length);
          setDisplayText('');
        }, 1200);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <div className="min-h-screen flex justify-center p-4">
      <div
        className="flex flex-col-reverse md:flex-row justify-center items-center
        p-6 md:p-12 gap-10 
        backdrop-blur-xl bg-white/5
        border border-white/20 
        rounded-2xl 
        shadow-xl
        max-w-6xl w-full"
      >
    
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-auto text-center md:text-left space-y-6 max-w-xl "
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-500">Mohamed</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 h-8 flex justify-center md:justify-start items-center">
            {displayText}
            <span className="border-r-2 border-blue-500 dark:border-blue-400 ml-1 animate-pulse"></span>
          </h2>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            Passionate developer specialized in building modern, responsive, and
            high-quality web applications with React, Tailwind, and Laravel.
          </p>

          <motion.div
            initial={{ rotateX: -360 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="flex md:flex-row gap-4 justify-center md:justify-start"
          >
            <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 text-white">
              Download CV
              <Download size={20} />
            </button>

            <a
              href="https://www.linkedin.com/in/mohamed-ait-moulay-3a150b297/"
              className="p-4 rounded-2xl bg-slate-700 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-lg hover:shadow-slate-500/30 flex items-center justify-center text-white"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com/simoatm234"
              className="p-4 rounded-2xl bg-gray-700 dark:bg-gray-800 hover:bg-slate-800 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-slate-500/30 flex items-center justify-center text-white"
            >
              <Github size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full md:w-auto flex justify-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all"></div>

            <img
              src={x}
              alt="Mohamed"
              className="rounded-full w-48 md:w-64 shadow-lg 
              transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 
              animate-[float_3s_ease-in-out_infinite]"
            />
          </div>
        </motion.div>
      </div>

    
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}
