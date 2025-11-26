import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [dropMenu, setDropMenu] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/portfolio/About' },
    { id: 3, name: 'Skills', path: '/portfolio/Skills' },
    { id: 4, name: 'Projects', path: '/portfolio/Projects' },
    { id: 5, name: 'Services', path: '/portfolio/Services' },
    { id: 6, name: 'Testimonials', path: '/portfolio/Testimonials' },
    { id: 7, name: 'Contact', path: '/portfolio/Contact' },
  ];

  const [activeNav, setActiveNav] = useState('/');

  // Update active route
  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location.pathname]);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    if (saved === 'dark') document.documentElement.classList.add('dark');
  }, []);

  // Toggle dark/light
  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <>
      {/* Fixed navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 backdrop-blur-sm text-gray-900 dark:text-white shadow-lg border-b border-gray-300 dark:border-gray-700">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Portfolio
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((nav) => (
              <Link
                key={nav.id}
                to={nav.path}
                className={`relative pb-1 transition-all duration-300 ${
                  activeNav === nav.path
                    ? 'text-blue-500 font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                }`}
              >
                {nav.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 ${
                    activeNav === nav.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle & theme */}
          <div className="flex items-center gap-4">
            <label className="theme-toggle-switch">
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <span className="theme-toggle-slider"></span>
            </label>

            <div className="md:hidden">
              <button
                onClick={() => setDropMenu(!dropMenu)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {dropMenu ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {dropMenu && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setDropMenu(false)}
          />
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-sm bg-white dark:bg-gray-900/95 backdrop-blur-sm text-gray-900 dark:text-white rounded-2xl shadow-2xl border border-gray-300 dark:border-gray-700 z-50 p-6 space-y-3 md:hidden">
            {navItems.map((nav) => (
              <Link
                key={nav.id}
                to={nav.path}
                className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                  activeNav === nav.path
                    ? 'bg-blue-500/20 text-blue-500 font-bold border border-blue-500/30'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white border border-transparent'
                }`}
                onClick={() => setDropMenu(false)}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Spacer for fixed navbar */}
      <div className="mt-20"></div>
    </>
  );
}
