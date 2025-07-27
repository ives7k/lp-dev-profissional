import React from 'react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Server, 
  Globe, 
  Cpu,
  Layers,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      skills: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android']
    },
    {
      title: 'DevOps',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Nginx']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-indigo-500 to-blue-500',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma']
    },
    {
      title: 'Ferramentas',
      icon: GitBranch,
      color: 'from-gray-500 to-slate-500',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tecnologias & Habilidades
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experiência sólida em desenvolvimento full-stack com foco em tecnologias modernas
            e melhores práticas de desenvolvimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700 group-hover:border-gray-600 transition-colors duration-200"
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            dot <= 4 ? 'bg-blue-500' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;