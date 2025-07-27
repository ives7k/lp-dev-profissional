import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Plataforma E-commerce',
      description: 'Sistema completo de e-commerce com painel administrativo, processamento de pagamentos e gestão de estoque.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://google.com.br',
      live: 'https://google.com.br'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados com visualizações em tempo real e relatórios customizáveis.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'Prisma'],
      github: 'https://google.com.br',
      live: 'https://google.com.br'
    },
    {
      title: 'Plataforma Solidária Blockchain',
      description: 'Plataforma de doações solidárias inspirada em vaquinhas virtuais, com foco em transparência e descentralização usando blockchain.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum'],
      github: 'https://google.com.br',
      live: 'https://google.com.br'
    },
    {
      title: 'App Mobile Fitness',
      description: 'Aplicativo de fitness com tracking de exercícios, planos de treino personalizados e integração com wearables.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'Redux', 'Health Kit'],
      github: 'https://google.com.br',
      live: 'https://google.com.br'
    },
    {
      title: 'Sistema de Gestão',
      description: 'ERP completo para pequenas e médias empresas com módulos de vendas, estoque, financeiro e RH.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      github: 'https://google.com.br',
      live: 'https://google.com.br'
    },
    {
      title: 'API de Machine Learning',
      description: 'API robusta para processamento de machine learning com endpoints para análise preditiva e classificação de dados.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL'],
      github: 'https://google.com.br',
      live: 'https://google.com.br'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma seleção dos meus projetos mais relevantes, demonstrando expertise em
            diferentes tecnologias e domínios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-full border border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://google.com.br"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 group"
          >
            Ver Todos os Projetos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;