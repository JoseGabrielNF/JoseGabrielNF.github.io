import React, { useState } from 'react';
import Logo from '../atoms/Logo';
import Icon from '../atoms/Icon';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#schedule', label: 'Programação' },
    { href: '#speakers', label: 'Palestrantes' },
    { href: '#partners', label: 'Parceiros' },
    { href: '#location', label: 'Localização' }
  ];

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo />
          <div>
            <h1 className="text-xl font-bold">Seminário de TA</h1>
            <p className="text-xs">UFMS 2025</p>
          </div>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="hover:text-yellow-300 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-2xl" 
          onClick={toggleMobileMenu}
        >
          <Icon name="bars" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-blue-800 w-full ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="px-4 py-2 space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="block py-2 hover:text-yellow-300 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navigation;