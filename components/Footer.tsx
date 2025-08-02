
import React from 'react';
import { TelecelLogo } from './icons/TelecelLogo';
import { EmailIcon, LinkedInIcon } from './icons/ContactIcons';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="mb-6">
          <TelecelLogo className="h-12 w-auto text-white" />
        </div>
        <div className="flex space-x-6 mb-6">
          <a href="mailto:samuelkareenkporxah82@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Email">
            <EmailIcon />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
        <p className="text-gray-500 font-inter">
          Built with ❤️ by Samuel Kojo Kporxah using AI design tools
        </p>
         <p className="text-xs text-gray-600 mt-2">
            © {new Date().getFullYear()} Samuel Kojo Kporxah. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
