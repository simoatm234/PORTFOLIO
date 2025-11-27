import React from 'react';
import x from '../assets/image.png';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex justify-center  p-6 bg-gray-100 dark:bg-gray-900"
      >
        <div
          className="flex flex-col-reverse md:flex-row justify-center items-center
        p-8 md:p-14 gap-12
        backdrop-blur-xl bg-white/5 
        border border-white/20 
        rounded-3xl 
        shadow-2xl
        max-w-6xl w-full"
        >
          {/* Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full md:w-auto flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all"></div>

              <img
                src={x}
                alt="Mohamed"
                className="rounded-4xl w-48 md:w-64 shadow-lg 
              transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 
              animate-[float_3s_ease-in-out_infinite]"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Mohamed
              </span>
              , a passionate Full-Stack Developer specializing in modern web
              technologies like <span className="font-medium">React</span> and{' '}
              <span className="font-medium">Laravel</span>. I love building
              fast, responsive, and user-friendly applications that solve real
              problems.
              <br />
              <br />
              My focus is on clean UI, smooth animations, efficient backend
              logic, and delivering high-quality digital experiences. I enjoy
              learning, improving and creating projects that push my limits
              forward.
            </p>
          </motion.div>
        </div>
      </section>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </>
  );
}
