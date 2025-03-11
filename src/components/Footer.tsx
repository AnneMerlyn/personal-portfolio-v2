import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeClasses } from '../utils/theme';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`${getThemeClasses(
        theme,
        'bg-gray-900 text-white',
        'bg-slate-50 text-gray-800'
      )} pt-34 pb-8 transition-colors duration-200`}
    >
      <div className="container mx-auto px-4 text-center">
        <p>Made with ❤️ by Anne Martinez</p>
      </div>
    </footer>
  );
};

export default Footer;
