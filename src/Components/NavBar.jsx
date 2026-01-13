import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar() {
  const [dropMenu, setDropMenu] = useState(false);
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/portfolio/About' },
    { id: 3, name: 'Skills', path: '/portfolio/Skills' },
    { id: 4, name: 'Projects', path: '/portfolio/Projects' },
    { id: 5, name: 'Certificate', path: '/portfolio/Certificate' },
  ];

  // Detect scroll to add glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    if (saved === 'dark') document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-slate-200 dark:border-slate-800'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <Link
            to="/"
            className="group flex items-center gap-2 text-2xl font-black tracking-tighter"
          >
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Sparkles size={20} />
            </div>
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent transition-all">
              MOHAMED
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
            {navItems.map((nav) => (
              <Link
                key={nav.id}
                to={nav.path}
                className={`relative px-5 py-2 text-sm font-bold rounded-xl transition-all duration-300 ${
                  location.pathname === nav.path
                    ? 'text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-all shadow-sm"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setDropMenu(!dropMenu)}
              className="md:hidden p-3 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20"
            >
              {dropMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {dropMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDropMenu(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[110] md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white dark:bg-slate-900 z-[120] shadow-2xl p-8 md:hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-black text-xl tracking-tighter dark:text-white">
                  MENU
                </span>
                <button
                  onClick={() => setDropMenu(false)}
                  className="dark:text-white"
                >
                  <X />
                </button>
              </div>

              <div className="space-y-4">
                {navItems.map((nav) => (
                  <Link
                    key={nav.id}
                    to={nav.path}
                    onClick={() => setDropMenu(false)}
                    className={`flex items-center justify-between p-4 rounded-2xl font-bold transition-all ${
                      location.pathname === nav.path
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {nav.name}
                    <div
                      className={
                        location.pathname === nav.path
                          ? 'opacity-100'
                          : 'opacity-0'
                      }
                    >
                      <Sparkles size={16} />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  © 2026 Mohamed
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Dynamic Spacer */}
      <div className="h-24"></div>
    </>
  );
}
