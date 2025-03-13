import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { FaSun, FaMoon } from 'react-icons/fa';
import { getThemeClasses, getConditionalThemeClasses } from '../utils/theme';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav
      className={`${getThemeClasses(
        theme,
        'bg-gray-900 text-white',
        'bg-slate-50 text-gray-800'
      )} p-4 transition-colors duration-200`}
    >
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setLanguage('DE')}
              className={`cursor-pointer px-2 py-1 text-sm rounded ${getConditionalThemeClasses(
                theme,
                language === 'DE',
                { dark: 'bg-sky-600 text-white', light: 'bg-sky-500 text-white' },
                { dark: 'bg-gray-700 text-slate-300', light: 'bg-slate-200 text-gray-700' }
              )}`}
            >
              DE
            </button>
            <button
              onClick={() => setLanguage('EN')}
              className={`cursor-pointer px-2 py-1 text-sm rounded ${getConditionalThemeClasses(
                theme,
                language === 'EN',
                { dark: 'bg-sky-600 text-white', light: 'bg-sky-500 text-white' },
                { dark: 'bg-gray-700 text-slate-300', light: 'bg-slate-200 text-gray-700' }
              )}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${getThemeClasses(
              theme,
              'bg-gray-700 text-yellow-300',
              'bg-slate-200 text-gray-700'
            )}`}
            aria-label={
              theme === 'light'
                ? (t('navbar.switchToDarkMode') as string)
                : (t('navbar.switchToLightMode') as string)
            }
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
