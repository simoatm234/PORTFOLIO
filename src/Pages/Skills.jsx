import {
  Code,
  Layers,
  Server,
  Database,
  GitBranch,
  BookOpen,
  Palette,
  Rocket,Z
  MoveUp,
  Route,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Skills() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

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
      { id: 6, name: 'API', icon: Server },
      { id: 7, name: 'Axios', icon: Server },
      { id: 8, name: 'RTQ Query', icon: Database },
      { id: 9, name: 'Bootstrap', icon: Palette },
      { id: 10, name: 'React Hook Form', icon: BookOpen },
      { id: 11, name: 'Tailwind CSS', icon: Palette },
      { id: 12, name: 'Framer Motion', icon: Rocket },
      { id: 13, name: 'Recharts', icon: Layers },
      { id: 14, name: 'react-router-dom', icon: Route },
    ],
    backEnd: [
      { id: 14, name: 'PHP', icon: Code },
      { id: 15, name: 'Laravel', icon: Server },
      { id: 16, name: 'MySQL', icon: Database },
      { id: 17, name: 'MongoDB', icon: Database },
      { id: 18, name: 'Git', icon: GitBranch },
    ],
    other: [
      { id: 19, name: 'Basic Python', icon: Code },
      { id: 20, name: 'Basic C', icon: Code },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-4 bg-gradient-to-b from-gray-100 to-gray-200 
      dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
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
      <div
        className="max-w-6xl mx-auto backdrop-blur-xl bg-white/5 
        border border-white/20 rounded-3xl shadow-2xl p-6"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white tracking-wide">
            My Skills
          </h1>
          <div className="w-32 h-1 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {[
          { title: 'Front End', icon: Code, items: mySkills.frontEnd },
          { title: 'Back End', icon: Server, items: mySkills.backEnd },
          { title: 'Other', icon: BookOpen, items: mySkills.other },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-20"
          >
            <h2
              className="text-3xl font-bold mb-8 flex items-center gap-3 bg-clip-text 
            text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            >
              <section.icon className="w-8 h-8 text-purple-400" />
              {section.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.items.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="p-6 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-xl 
                    border border-gray-300 dark:border-white/10 shadow-lg 
                    transition-all duration-300 cursor-pointer group hover:scale-105"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <Icon
                        className="w-12 h-12 text-purple-500 dark:text-purple-400 
                      group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
                      />

                      <span className="text-gray-900 dark:text-white font-medium text-center text-sm">
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
    </motion.div>
  );
}
