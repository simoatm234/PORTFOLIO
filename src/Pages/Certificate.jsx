import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ExternalLink,
  X,
  Calendar,
  BookOpen,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

// Import images (Ensure these paths match your folder structure)
import reactAdvancedCertificate from '../assets/certificates/react-advanced-certificate.png';
import fullstackReactBootcampCertificate from '../assets/certificates/fullstack-react-bootcamp-certificate.png';
import htmlEssentialsCertificate from '../assets/certificates/html-essentials-certificate.png';
import javascriptEssentials1 from '../assets/certificates/JavaScript_Essentials_1_certificate_atmsimo598-gmail-com_79f4a059-2856-488f-84ad-0e58650c52a3.jpg';
import javascriptEssentials2 from '../assets/certificates/JavaScript_Essentials_2_certificate_atmsimo598-gmail-com_4820b78e-3eae-459f-a965-285cd57185c2.jpg';
import pythonEssentials1 from '../assets/certificates/Python_Essentials_1_certificate_atmsimo598-gmail-com_15e52678-1821-4b4d-b605-506bb9814729.jpg';
import pythonEssentials2 from '../assets/certificates/Python_Essentials_2_certificate_atmsimo598-gmail-com_581f97ec-8f11-482d-a2ad-a0ed58360759.jpg';

export default function Certificate() {
  const [img, setImg] = useState(null);

  const crft = [
    {
      id: 1,
      name: 'Build Apps Using React: Advanced Features',
      path: 'Skillsoft',
      img: reactAdvancedCertificate,
      date: 'Dec 5, 2025',
      description:
        'Deep dive into advanced React hooks, performance optimization, and architectural patterns.',
    },
    {
      id: 2,
      name: 'Full Stack React Bootcamp',
      path: 'Skillsoft',
      img: fullstackReactBootcampCertificate,
      date: 'Dec 4, 2025',
      description:
        'Comprehensive bootcamp covering full-stack integration with React and modern backend services.',
    },
    {
      id: 3,
      name: 'HTML Essentials',
      path: 'Cisco Networking Academy',
      img: htmlEssentialsCertificate,
      date: 'Dec 26, 2025',
      description:
        'Foundational certification in semantic HTML5, accessibility, and web structure best practices.',
    },
    {
      id: 4,
      name: 'JavaScript Essentials 1',
      path: 'Cisco Networking Academy',
      img: javascriptEssentials1,
      date: 'Dec 27, 2025',
      description:
        'Core concepts of JavaScript, including data types, logic flow, and DOM manipulation.',
    },
    {
      id: 5,
      name: 'JavaScript Essentials 2',
      path: 'Cisco Networking Academy',
      img: javascriptEssentials2,
      date: 'Dec 28, 2025',
      description:
        'Intermediate JavaScript focusing on asynchronous programming, APIs, and OOP principles.',
    },
    {
      id: 6,
      name: 'Python Essentials 1',
      path: 'Cisco Networking Academy',
      img: pythonEssentials1,
      date: 'Dec 25, 2025',
      description:
        'Introduction to Python syntax, basic data structures, and algorithmic thinking.',
    },
    {
      id: 7,
      name: 'Python Essentials 2',
      path: 'Cisco Networking Academy',
      img: pythonEssentials2,
      date: 'Dec 31, 2025',
      description:
        'Advanced Python modules, exception handling, and file processing systems.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-24 px-4 min-h-screen bg-slate-50 dark:bg-[#0b0f1a] transition-colors duration-500">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="inline-flex items-center justify-center p-4 mb-6 rounded-3xl bg-white dark:bg-slate-800 shadow-xl text-indigo-600 dark:text-indigo-400 border border-slate-100 dark:border-slate-700"
          >
            <Award size={40} />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight"
            variants={cardVariants}
          >
            Professional{' '}
            <span className="text-indigo-600 dark:text-indigo-400">
              Credentials
            </span>
          </motion.h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A curated list of technical certifications earned through rigorous
            coursework and examination in full-stack development.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {crft.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="group relative flex flex-col h-full bg-white dark:bg-slate-800/40 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-[2.5rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] transition-all duration-500"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-200 dark:bg-slate-900 m-2 rounded-[2rem]">
                <motion.img
                  src={certificate.img}
                  alt={certificate.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setImg(certificate.img)}
                    className="flex items-center gap-2 text-white font-bold bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-2xl scale-90 group-hover:scale-100 transition-all"
                  >
                    Inspect Certificate <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 pt-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center gap-1">
                    <ShieldCheck size={12} /> Verified By {certificate.path}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 line-clamp-2 leading-tight min-h-[3.5rem]">
                  {certificate.name}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed mb-8 italic">
                  "{certificate.description}"
                </p>

                {/* Footer details */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-indigo-500" />
                      {certificate.date.split(',')[1]}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={14} className="text-indigo-500" />
                      Level 1
                    </div>
                  </div>
                  <button
                    onClick={() => setImg(certificate.img)}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {img && (
          <motion.div
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-2 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImg(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-14 right-0 p-3 bg-white/10 hover:bg-red-500 text-white rounded-full transition-all active:scale-90"
                onClick={() => setImg(null)}
              >
                <X size={28} />
              </button>

              <div className="bg-white dark:bg-slate-900 p-3 rounded-[2.5rem] shadow-[0_0_100px_rgba(79,70,229,0.3)] ring-1 ring-white/20">
                <img
                  src={img}
                  alt="Certificate Full Resolution"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-[1.8rem]"
                />
              </div>

              <div className="mt-6 text-center text-white/50 text-sm font-medium">
                Click anywhere outside to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
