'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function LanguageToggle() {
  const { language, toggleLanguage, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      value: 'th',
      label: 'ไทย',
      flag: '🇹🇭'
    },
    {
      value: 'en',
      label: 'English',
      flag: '🇺🇸'
    }
  ];

  const currentLanguage = languages.find(lang => lang.value === language);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700"
        aria-label="Toggle language"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
          {currentLanguage?.label}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20 overflow-hidden">
            {languages.map((langOption) => (
              <button
                key={langOption.value}
                onClick={() => {
                  setLanguage(langOption.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  language === langOption.value
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">{langOption.flag}</span>
                <span className="font-medium">{langOption.label}</span>
                {language === langOption.value && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Simple Language Toggle (for mobile or compact spaces)
export function SimpleLanguageToggle() {
  const { toggleLanguage, language } = useLanguage();

  const getFlag = () => {
    return language === 'th' ? '🇹🇭' : '🇺🇸';
  };

  const getLabel = () => {
    return language === 'th' ? 'TH' : 'EN';
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle language"
    >
      <span className="text-lg">{getFlag()}</span>
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
        {getLabel()}
      </span>
    </button>
  );
}
