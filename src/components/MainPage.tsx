import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeClasses } from '../utils/theme';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';

const MainPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`${getThemeClasses(
        theme,
        'bg-gray-900 text-white',
        'bg-slate-50 text-gray-800'
      )} flex-grow transition-colors duration-200`}
    >
      <Hero />
      <About />
      <Contact />
    </main>
  );
};

export default MainPage;
