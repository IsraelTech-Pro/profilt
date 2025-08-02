import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down hide the navbar
        setIsVisible(false);
      } else { // if scroll up show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);
  
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <nav className="flex items-center justify-between floating-card rounded-full px-6 py-3 shadow-lg">
        <Link to="/" className="text-xl font-bold text-red-500">SKK</Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
                <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors duration-300 ${
                    isActive ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
                >
                {link.name}
                </Link>
            )
          })}
        </div>
        <Link to="/contact" className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
          Contact Me
        </Link>
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
            className="focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black bg-opacity-40" onClick={() => setIsMenuOpen(false)}></div>
            <div className="fixed top-0 right-0 z-50 w-3/4 max-w-xs h-full bg-black border-l-2 border-white/20 shadow-2xl flex flex-col animate-slideIn rounded-l-2xl" style={{backgroundColor: '#000', opacity: 1, boxShadow: '0 0 0 9999px #000'}}>
              <div className="w-full bg-black pb-4 -mx-6 px-6 border-b border-white/10 rounded-tl-2xl rounded-tr-2xl flex items-center justify-end">
                <button
                  aria-label="Close menu"
                  className="text-gray-400 hover:text-red-500 focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col space-y-6 mt-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`text-lg font-semibold transition-colors duration-300 mb-2 ${isActive ? 'text-red-500' : 'text-white hover:text-red-500'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Me
                </Link>
              </nav>
            </div>
            {/* Animation CSS for slide in */}
            <style>{`
              @keyframes slideIn {
                0% { transform: translateX(100%); opacity: 0; }
                100% { transform: translateX(0); opacity: 1; }
              }
              .animate-slideIn {
                animation: slideIn 0.3s cubic-bezier(0.22, 1, 0.36, 1);
              }
            `}</style>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
