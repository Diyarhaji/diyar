import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  // Determine direction based on the current language
  const direction = i18n.language === 'ar' || i18n.language === 'ku' ? 'rtl' : 'ltr';

  // Optional: Apply direction to the <html> or <body> element
  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  return (
    <div className="relative inline-block text-left" dir={direction}>
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-second text-white text-sm font-medium hover:bg-opacity-90"
      >
        {i18n.language.toUpperCase()}
        <svg
          className="ml-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {['en', 'ar', 'ku'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  i18n.language === lang ? 'bg-second text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;