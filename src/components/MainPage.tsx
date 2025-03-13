import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { getThemeClasses } from '../utils/theme';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import BottomNav from './BottomNav';

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
      <Experience />
      <Contact />
      <BottomNav />
    </main>
  );
};

export default MainPage;
