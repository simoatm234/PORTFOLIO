import React, { useEffect, useState } from 'react';
import {
  Code,
  Layers,
  Server,
  Database,
  GitBranch,
  BookOpen,
  Palette,
  Rocket,
  MoveUp,
  Route,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mySkills = {
    frontEnd: [
      { id: 1, name: 'HTML', icon: Code },
      { id: 2, name: 'CSS', icon: Palette },
      { id: 3, name: 'JavaScript', icon: Code },
      { id: 4, name: 'React', icon: Layers },
      { id: 5, name: 'Redux', icon: Layers },
      { id: 6, name: 'REST API', icon: Server },
      { id: 7, name: 'Axios', icon: Server },
      { id: 8, name: 'RTK Query', icon: Database },
      { id: 9, name: 'Bootstrap', icon: Palette },
      { id: 10, name: 'Hook Form', icon: BookOpen },
      { id: 11, name: 'Tailwind', icon: Palette },
      { id: 12, name: 'Framer Motion', icon: Rocket },
      { id: 13, name: 'Recharts', icon: Layers },
      { id: 14, name: 'React Router', icon: Route },
    ],
    backEnd: [
      { id: 15, name: 'PHP', icon: Code },
      { id: 16, name: 'Laravel', icon: Server },
      { id: 17, name: 'MySQL', icon: Database },
      { id: 18, name: 'MongoDB', icon: Database },
      { id: 19, name: 'Git/GitHub', icon: GitBranch },
    ],
    other: [
      { id: 20, name: 'Python', icon: Code },
      { id: 21, name: 'C Language', icon: Code },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 260, damping: 20 },
    },
  };

  return (
    <section className="min-h-screen py-24 px-4 bg-slate-50 dark:bg-[#0b0f1a] transition-colors duration-500">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed z-50 right-8 bottom-8 p-4 bg-blue-600 text-white rounded-2xl shadow-2xl hover:bg-blue-700 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <MoveUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-sm mb-4"
          >
            <Zap size={16} /> Technical Stack
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Expertise & <span className="text-blue-600">Skills</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive overview of my technical abilities, specialized in
            building scalable, high-performance web applications.
          </p>
        </div>

        {/* Skill Sections */}
        {[
          {
            title: 'Front End Development',
            icon: Code,
            items: mySkills.frontEnd,
            color: 'text-blue-500',
          },
          {
            title: 'Back End & DevOps',
            icon: Server,
            items: mySkills.backEnd,
            color: 'text-indigo-500',
          },
          {
            title: 'Other Fundamentals',
            icon: BookOpen,
            items: mySkills.other,
            color: 'text-emerald-500',
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-10">
              <div
                className={`p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 ${section.color}`}
              >
                <section.icon size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {section.title}
              </h2>
              <div className="flex-grow h-[1px] bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {section.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.id}
                    variants={skillVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative group p-6 rounded-[2rem] bg-white dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity"></div>

                    <div className="flex flex-col items-center gap-4 relative z-10">
                      <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors duration-300">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-sm tracking-tight text-center">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
