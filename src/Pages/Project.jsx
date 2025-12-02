import React, { useEffect, useState } from 'react';
import Todo from '../assets/TodoList.png';
import rtq from '../assets/Rtq.png';
import users from '../assets/Eccomerc/users.png';
import newUser from '../assets/Eccomerc/newUser.png';
import login from '../assets/Eccomerc/login.png';
import dashBord from '../assets/Eccomerc/dashBord.png';
import { motion } from 'framer-motion';
import {
  MoveLeftIcon,
  MoveRight,
  ExternalLink,
  Lock,
  Globe,
  MoveUp,
} from 'lucide-react';

export default function Project() {
  const [imageIndex, setImageIndex] = useState({});

  const [projects] = useState([
    {
      id: 1,
      name: 'Full E-commerce Website',
      path: 'https://github.com/simoatm234/FULL-STACK-ECCOMERC-',
      languages: ['React', 'Laravel'],
      tools: [
        'RTK Query',
        'Tailwind CSS',
        'React Hook Form',
        'Axios',
        'React Router DOM',
      ],
      image: [users, newUser, login, dashBord],
      description:
        'A complete full-stack e-commerce platform built with React and Laravel.',
      status: 'private',
    },
    {
      id: 2,
      name: 'Todo List App',
      path: 'https://github.com/simoatm234/TODO_LIST_REACT_JS',
      languages: ['React'],
      tools: ['Context API', 'Bootstrap'],
      image: [Todo],
      description: 'A simple Todo application built with React.',
      status: 'public',
    },
    {
      id: 3,
      name: 'CRUD App (RTK Query)',
      path: 'https://github.com/simoatm234/RTQ-DUERY-',
      languages: ['React'],
      tools: ['RTK Query', 'React Router DOM', 'Bootstrap', 'json server'],
      image: [rtq],
      description:
        'A CRUD application using React and RTK Query with json-server.',
      status: 'private',
    },
    {
      id: 4,
      name: 'Calculator',
      path: 'https://github.com/simoatm234/proget1',
      languages: ['HTML', 'CSS', 'JavaScript'],
      tools: [],
      image: [],
      description: 'A calculator built with HTML, CSS, and JavaScript.',
      status: 'public',
    },
  ]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const showImage = (p) => {
    const currentIndex = imageIndex[p.id] || 0;
    const images = p.image;

    if (!images || images.length === 0) {
      return (
        <div className="w-80 h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">
            No Image Available
          </span>
        </div>
      );
    }

    const next = () => {
      setImageIndex((prev) => ({
        ...prev,
        [p.id]: (currentIndex + 1) % images.length,
      }));
    };

    const prev = () => {
      setImageIndex((prev) => ({
        ...prev,
        [p.id]: (currentIndex - 1 + images.length) % images.length,
      }));
    };

    return (
      <div className="relative w-full max-w-2xl mx-auto group">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <img
            src={images[currentIndex]}
            alt={p.name}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {images.length > 1 && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <button
                className="cursor-pointer p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white absolute top-1/2 left-4 -translate-y-1/2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all opacity-0 group-hover:opacity-100"
                onClick={prev}
                aria-label="Previous image"
              >
                <MoveLeftIcon size={20} />
              </button>

              <button
                className="cursor-pointer p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white absolute top-1/2 right-4 -translate-y-1/2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all opacity-0 group-hover:opacity-100"
                onClick={next}
                aria-label="Next image"
              >
                <MoveRight size={20} />
              </button>
            </>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-white scale-125' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-xl bg-white/5
        border border-white/20 
        rounded-2xl 
        shadow-xl m-2"
    >
      {' '}
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed z-40 right-5 bottom-2 cursor-pointer hover:scale-105 
  bg-black text-purple-400 p-3 rounded-full"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <MoveUp />
        </motion.button>
      )}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-gray-900 dark:text-white">
          My Projects
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          A collection of my recent work and personal projects
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6">
                {showImage(p)}

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {p.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          p.status === 'public'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}
                      >
                        {p.status === 'public' ? (
                          <Globe size={14} className="inline mr-1" />
                        ) : (
                          <Lock size={14} className="inline mr-1" />
                        )}
                        {p.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Languages & Technologies:
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.languages.map((lang, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>

                    {p.tools.length > 0 && (
                      <>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Tools & Libraries:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {p.tools.map((tool, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {p.path && (
                    <a
                      href={p.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium"
                    >
                      View Project
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
