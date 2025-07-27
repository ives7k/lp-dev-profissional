import React from 'react';
import { Terminal, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-400">
                <Terminal className="h-5 w-5" />
                <span className="text-sm font-medium">DESENVOLVEDOR FULL-STACK</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Werlen
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  {" "}Araújo
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Especialista em criar interfaces modernas e estruturas robustas.
                Transformo ideias complexas em soluções digitais elegantes e eficientes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 group"
              >
                Ver Projetos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="https://google.com.br"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-colors duration-200"
              >
                Entrar em Contato
              </a>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://google.com.br"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://google.com.br"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://google.com.br"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gray-800 rounded-lg p-6 shadow-2xl border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="font-mono text-sm text-gray-300 space-y-2">
                <div className="text-blue-400">const <span className="text-white">developer</span> = {`{`}</div>
                <div className="pl-4 text-gray-300">
                  name: <span className="text-green-400">'Werlen Araújo'</span>,
                </div>
                <div className="pl-4 text-gray-300">
                  role: <span className="text-green-400">'Full-Stack Developer'</span>,
                </div>
                <div className="pl-4 text-gray-300">
                  skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'TypeScript'</span>],
                </div>
                <div className="pl-4 text-gray-300">
                  passion: <span className="text-green-400">'Creating amazing UX'</span>
                </div>
                <div className="text-blue-400">{`};`}</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;