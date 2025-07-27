import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-blue-500" />
            <span className="text-lg font-semibold text-white">Werlen Araújo</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Desenvolvido com</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>usando React & Tailwind CSS</span>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Werlen Araújo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;