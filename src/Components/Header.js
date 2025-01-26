import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import OfficialSection from './OfficialSection';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollBackground, setScrollBackground] = useState('bg-transparent');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollBackground('bg-[#212730]');
      } else {
        setScrollBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${scrollBackground} text-[#2563eb] py-4 fixed top-0 bg-gradient-to-l from-blue-500 to-blue-950 left-0 w-full z-50 transition-colors duration-300`}
    >
      <div className="flex items-center justify-between px-4 lg:px-2 max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <img
            src="/İmages/EFELOG.png"
            alt="Logo"
            className="md:w-[35%] md:ml-[5%] w-[65%]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 mr-[15%]">
          <a href="#Hero" className="hover:underline font-bold text-white">
            Anasayfa
          </a>
          <a href="#About" className="hover:underline font-bold text-white  ">
            Hakkımızda
          </a>
          <a href="#Services" className="hover:underline font-bold text-white ">
            Hizmetler
          </a>
          <a href="#Contact" className="hover:underline font-bold text-white ">
            İletişim
          </a>
        </nav>

        {/* Phone Number Button */}
        <div className=" justify-center md:mr-[0%] mr-[25%] lg:flex bg-white rounded-3xl">
            <img
              src="/İmages/yetki.png"
              alt="Nova"
              className="w-full max-w-md h-auto rounded-3xl p-2 object-cover shadow-lg"
            />
          </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 rounded-full bg-[#2563eb]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <X size={32} />
          </button>

          {/* Menu Links */}
          <nav className="flex flex-col items-center space-y-6 text-white text-2xl">
            <a href="#Hero" className="hover:text-blue-300" onClick={toggleMenu}>
              Anasayfa
            </a>
            <a href="#About" className="hover:text-blue-300" onClick={toggleMenu}>
              Hakkımızda
            </a>
            <a href="#Services" className="hover:text-blue-300" onClick={toggleMenu}>
              Hizmetler
            </a>
            <a href="#Contact" className="hover:text-blue-300" onClick={toggleMenu}>
              İletişim
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
