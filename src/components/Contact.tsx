import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Estou sempre aberto a discutir novas oportunidades e projetos interessantes.
            Entre em contato e vamos criar algo incrível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">werlen.araujo@email.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-600 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Telefone</p>
                    <p className="text-white">+55 (11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-600 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Localização</p>
                    <p className="text-white">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://google.com.br"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
                <a
                  href="https://google.com.br"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
                <a
                  href="https://google.com.br"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Envie uma Mensagem
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 group"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;