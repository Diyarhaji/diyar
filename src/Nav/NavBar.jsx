import React, { useEffect, useRef, useState } from 'react';
import images from '../assets/Images'; // Make sure this file exports { logo, open, close }
import { FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

 import LanguageSwitcher from '../componant/LanguageSwitcher '
const NavBar = () => {
  const { t } = useTranslation();
  const sideMenuRef = useRef(null);
  const headerRef = useRef(null);
  const backToTopRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.classList.remove('translate-x-full');
      sideMenuRef.current.classList.add('translate-x-0');
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.classList.remove('translate-x-0');
      sideMenuRef.current.classList.add('translate-x-full');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const header = headerRef.current;
      const backToTop = backToTopRef.current;

      if (!header || !backToTop) return;

      if (currentScrollY >= 50) {
        header.classList.add('bg-white', 'shadow-md');
        backToTop.classList.remove('opacity-0', 'invisible');
        backToTop.classList.add('opacity-100', 'visible');

        if (currentScrollY > lastScrollY) {
          header.classList.add('-translate-y-full');
        } else {
          header.classList.remove('-translate-y-full');
        }
      } else {
        header.classList.remove('bg-white', 'shadow-md', '-translate-y-full');
        backToTop.classList.remove('opacity-0', 'visible');
        backToTop.classList.add('opacity-0', 'invisible');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        ref={headerRef}
        className="fixed top-0 py-3 left-0 right-0 z-50 transition-all duration-500 bg-first bg-opacity-50"
      >
        <div className="px-[5%] py-2 flex items-center justify-between">
          <div className="max-sm:order-1 order-3 "><LanguageSwitcher className=''/></div>
          
          <div  className='max-sm:order-2 order-1'>
            <img src={images.logo} alt="Logo" className="w-48" />
          </div>
          {/* Desktop Menu */}
          <div className="hidden order-2  sm:block">
            <ul className="flex gap-4 text-lg font-semibold">
              
                <li > <a href="#home" className="hover:text-fourth rounded-lg px-3 py-2 transition-colors">{t('home')}</a> </li>
                <li > <a href="#about" className="hover:text-fourth rounded-lg px-3 py-2 transition-colors">{t('about')}</a> </li>
                <li > <a href="#services" className="hover:text-fourth rounded-lg px-3 py-2 transition-colors">{t('services')}</a> </li>
                <li > <a href="#projects" className="hover:text-fourth rounded-lg px-3 py-2 transition-colors">{t('projects')}</a> </li>
                <li > <a href="#contact" className="hover:text-fourth rounded-lg px-3 py-2 transition-colors">{t('contact')}</a> </li>
              
            </ul>
          </div>

          

          {/* Mobile Open Button */}
          <div onClick={openMenu} className="sm:hidden max-sm:order-3 cursor-pointer">
            <img src={images.open} alt="Open Menu" className="w-8" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={sideMenuRef}
          className="fixed right-0 top-0 bottom-0 w-44 bg-gray-900 transform translate-x-full transition-transform duration-300 z-50"
        >
          {/* Close Button */}
          <div
            onClick={closeMenu}
            className="border border-gray-900 rounded-full absolute top-10 right-5 p-1 cursor-pointer"
          >
            <img src={images.close} alt="Close Menu" className="w-5" />
          </div>

          {/* Mobile Nav Links */}
          <ul className="mt-[130px] pl-6 pr-7 font-bold text-lg">
           
              <li onClick={closeMenu} className="mb-6 group flex items-center gap-3">
                <div className="w-3 h-3 border rotate-45 hidden group-hover:block transition-all duration-300 border-gray-100"></div>
                <a href="#home" className="group-hover:scale-105 transition-transform">{t('home')}</a>
              </li>
              <li onClick={closeMenu} className="mb-6 group flex items-center gap-3">
                <div className="w-3 h-3 border rotate-45 hidden group-hover:block transition-all duration-300 border-gray-100"></div>
                <a href="#about" className="group-hover:scale-105 transition-transform">{t('about')}</a>
              </li>
              <li onClick={closeMenu} className="mb-6 group flex items-center gap-3">
                <div className="w-3 h-3 border rotate-45 hidden group-hover:block transition-all duration-300 border-gray-100"></div>
                <a href="#services" className="group-hover:scale-105 transition-transform">{t('services')}</a>
              </li>
              <li onClick={closeMenu} className="mb-6 group flex items-center gap-3">
                <div className="w-3 h-3 border rotate-45 hidden group-hover:block transition-all duration-300 border-gray-100"></div>
                <a href="#projects" className="group-hover:scale-105 transition-transform">{t('projects')}</a>
              </li>
              <li onClick={closeMenu} className="mb-6 group flex items-center gap-3">
                <div className="w-3 h-3 border rotate-45 hidden group-hover:block transition-all duration-300 border-gray-100"></div>
                <a href="#contact" className="group-hover:scale-105 transition-transform">{t('contact')}</a>
              </li>
          
          </ul>
        </div>
      </nav>

      {/* Back to Top Button */}
      <a
        ref={backToTopRef}
        href="#top"
        className="fixed  bottom-5 right-5 bg-white text-gray-800 text-xl w-12 h-12 rounded-full grid place-items-center transition-all duration-700 opacity-0 invisible z-40 shadow-md"
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </a>
    </>
  );
};

export default NavBar;