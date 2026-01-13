import React from 'react';
import x from '../assets/image.png'; // Ensure this path is correct
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Rocket, Sparkles } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section
        id="about"
        className="min-h-screen flex justify-center items-center p-4 md:p-10 bg-slate-50 dark:bg-[#0b0f1a] relative overflow-hidden"
      >
        {/* Animated Background Mesh Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px] animate-pulse"></div>
          <div
            className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-indigo-600 rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 flex flex-col md:flex-row justify-center items-center
            p-8 md:p-16 gap-12 lg:gap-20
            backdrop-blur-2xl bg-white/70 dark:bg-slate-900/60 
            border border-white/40 dark:border-slate-700/50
            rounded-[2.5rem] shadow-2xl
            max-w-6xl w-full"
        >
          {/* IMAGE SIDE */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            {/* Background Decorations */}
            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full scale-125 animate-[spin_20s_linear_infinite]"></div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>

              <img
                src={x}
                alt="Mohamed"
                className="relative z-10 rounded-[2.5rem] w-52 md:w-64 shadow-2xl 
                  transition-all duration-700 group-hover:scale-105 group-hover:-rotate-2
                  border-4 border-white dark:border-slate-800
                  animate-[float_4s_ease-in-out_infinite]"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-20"
              >
                <div className="bg-blue-100 dark:bg-blue-500/20 p-2 rounded-lg text-blue-600">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black leading-none mb-1">
                    Role
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">
                    Full Stack
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <div className="max-w-xl text-center md:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <h4 className="flex items-center justify-center md:justify-start gap-2 text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs mb-3">
                <span className="w-8 h-[2px] bg-blue-600/30"></span>
                Who I Am
              </h4>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Me
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8"
            >
              I'm{' '}
              <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-500/30 decoration-4">
                Mohamed
              </span>
              , a technical architect of digital experiences. I bridge the gap
              between complex
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                {' '}
                backend logic
              </span>{' '}
              and
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                {' '}
                pixel-perfect interfaces
              </span>
              . My methodology revolves around the "Clean Code" philosophy and
              building products that scale.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {[
                {
                  icon: <Code2 className="text-blue-500" />,
                  label: 'Clean Code',
                },
                {
                  icon: <Cpu className="text-indigo-500" />,
                  label: 'Laravel/Backend',
                },
                {
                  icon: <Globe className="text-emerald-500" />,
                  label: 'React/Frontend',
                },
                {
                  icon: <Rocket className="text-orange-500" />,
                  label: 'Fast Delivery',
                },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 transition-all hover:bg-white dark:hover:bg-slate-800"
                >
                  {skill.icon}
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                    {skill.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(1deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
        `}
      </style>
    </>
  );
}
