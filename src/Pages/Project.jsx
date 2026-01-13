import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MoveLeftIcon,
  MoveRight,
  ExternalLink,
  Lock,
  Globe,
  ArrowUp,
  Code2,
  Layers,
  Terminal,
} from 'lucide-react';

// Assets (Keep your existing imports)
import Todo from '../assets/TodoList.png';
import rtq from '../assets/Rtq.png';
import users from '../assets/Eccomerc/users.png';
import newUser from '../assets/Eccomerc/newUser.png';
import login from '../assets/Eccomerc/login.png';
import dashBord from '../assets/Eccomerc/dashBord.png';

export default function Project() {
  const [imageIndex, setImageIndex] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [projects] = useState([
    {
      id: 1,
      name: 'Full E-commerce Website',
      path: 'https://github.com/simoatm234/FULL-STACK-ECCOMERC-',
      languages: ['React', 'Laravel'],
      tools: ['RTK Query', 'Tailwind CSS', 'Axios', 'React Router'],
      image: [users, newUser, login, dashBord],
      description:
        'A complete full-stack e-commerce platform featuring authentication, dashboard management, and real-time data fetching.',
      status: 'private',
    },
    {
      id: 2,
      name: 'Todo List App',
      path: 'https://github.com/simoatm234/TODO_LIST_REACT_JS',
      languages: ['React'],
      tools: ['Context API', 'Bootstrap'],
      image: [Todo],
      description:
        'A task management application focusing on state persistence and clean UI interactions.',
      status: 'public',
    },
    {
      id: 3,
      name: 'CRUD App (RTK Query)',
      path: 'https://github.com/simoatm234/RTQ-DUERY-',
      languages: ['React'],
      tools: ['RTK Query', 'JSON Server', 'Bootstrap'],
      image: [rtq],
      description:
        'Advanced data fetching and caching implementation using Redux Toolkit Query.',
      status: 'private',
    },
    {
      id: 4,
      name: 'Modern Calculator',
      path: 'https://github.com/simoatm234/proget1',
      languages: ['HTML', 'CSS', 'JavaScript'],
      tools: [],
      image: [],
      description:
        'A precision-focused calculator with a responsive design and mathematical logic handled via Vanilla JS.',
      status: 'public',
    },
  ]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showImage = (p) => {
    const currentIndex = imageIndex[p.id] || 0;
    const images = p.image;

    if (!images || images.length === 0) {
      return (
        <div className="w-full h-64 bg-slate-100 dark:bg-slate-800/50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700">
          <Terminal className="text-indigo-500 mb-2" size={40} />
          <span className="text-slate-500 font-medium">
            Preview available in source
          </span>
        </div>
      );
    }

    const updateIndex = (e, step) => {
      e.preventDefault();
      e.stopPropagation();
      setImageIndex((prev) => ({
        ...prev,
        [p.id]: (currentIndex + step + images.length) % images.length,
      }));
    };

    return (
      <div className="relative w-full group overflow-hidden rounded-2xl shadow-xl">
        <div className="relative h-64 md:h-72 overflow-hidden bg-slate-200 dark:bg-slate-900">
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0.5, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src={images[currentIndex]}
            alt={p.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => updateIndex(e, -1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40"
            >
              <MoveLeftIcon size={18} />
            </button>
            <button
              onClick={(e) => updateIndex(e, 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40"
            >
              <MoveRight size={18} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 bg-indigo-400'
                      : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f1a] py-16 px-4 sm:px-8 transition-colors duration-500">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed z-50 right-6 bottom-6 p-4 bg-indigo-600 text-white rounded-full shadow-2xl hover:bg-indigo-500 transition-all active:scale-95"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-widest"
          >
            Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white tracking-tight"
          >
            Recent{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Works.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto"
          >
            Showcasing full-stack applications and interactive front-end
            experiences.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col h-full bg-white dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
            >
              <div className="p-6 md:p-8 flex flex-col h-full">
                {showImage(p)}

                <div className="mt-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {p.name}
                    </h2>
                    <span
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${
                        p.status === 'public'
                          ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                          : 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'
                      }`}
                    >
                      {p.status === 'public' ? (
                        <Globe size={12} />
                      ) : (
                        <Lock size={12} />
                      )}
                      {p.status}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {p.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-3 py-1 bg-indigo-600 text-white dark:bg-indigo-500/20 dark:text-indigo-300 rounded-md text-xs font-bold"
                        >
                          {lang}
                        </span>
                      ))}
                      {p.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 rounded-md text-xs font-bold border border-slate-200 dark:border-slate-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {p.path && (
                      <a
                        href={p.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center w-full gap-2 px-6 py-4 bg-slate-900 dark:bg-indigo-600 text-white rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all font-bold shadow-lg"
                      >
                        Source Code
                        <ExternalLink
                          size={18}
                          className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
