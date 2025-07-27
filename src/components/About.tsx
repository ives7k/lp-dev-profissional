import React from 'react';
import { Award, Coffee, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Anos de Experiência', value: '5+' },
    { icon: Coffee, label: 'Projetos Concluídos', value: '50+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '30+' },
    { icon: Clock, label: 'Horas de Código', value: '8000+' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sobre Mim
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Sou um desenvolvedor full-stack apaixonado por tecnologia, com mais de 5 anos
                  de experiência criando soluções digitais inovadoras. Minha jornada começou 
                  com curiosidade sobre como as coisas funcionam na web e evoluiu para uma 
                  carreira dedicada a transformar ideias complexas em experiências digitais 
                  intuitivas.
                </p>
                <p>
                  Especializo-me em JavaScript/TypeScript, React, Node.js e tecnologias modernas
                  de desenvolvimento. Tenho experiência tanto em startups quanto em empresas 
                  consolidadas, sempre focando em código limpo, performance e experiência do usuário.
                </p>
                <p>
                  Acredito que a tecnologia deve ser acessível e útil. Por isso, me dedico a 
                  criar interfaces intuitivas e sistemas robustos que realmente fazem a diferença 
                  na vida das pessoas.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Filosofia de Trabalho</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Código limpo e bem documentado</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Foco na experiência do usuário</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Metodologias ágeis e colaboração</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Aprendizado contínuo e inovação</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center group hover:border-gray-600 transition-colors duration-200"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">
                Certificações & Educação
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                  <span className="text-gray-300">Ciência da Computação</span>
                  <span className="text-sm text-blue-400">Universidade</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                  <span className="text-gray-300">AWS Solutions Architect</span>
                  <span className="text-sm text-blue-400">Amazon</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                  <span className="text-gray-300">React Developer Certification</span>
                  <span className="text-sm text-blue-400">Meta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;