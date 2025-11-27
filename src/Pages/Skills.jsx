import {
  Code,
  Layers,
  Server,
  Database,
  GitBranch,
  BookOpen,
  Palette,
  Rocket,
} from 'lucide-react';

export default function Skills() {
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
    <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
       
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
          <div key={index} className="mb-20">
          
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              <section.icon className="w-8 h-8 text-purple-400" />
              {section.title}
            </h2>

        
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.id}
                    className="p-6 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-xl 
                    border border-gray-300 dark:border-white/10 shadow-lg 
                    transition-all duration-300 hover:bg-white/60 dark:hover:bg-white/10 hover:border-gray-400 
                    dark:hover:border-white/20 hover:scale-[1.05] cursor-pointer group"
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
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
