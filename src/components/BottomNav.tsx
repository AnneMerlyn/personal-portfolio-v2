import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { getThemeClasses } from '../utils/theme';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const BottomNav: React.FC = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');

  const navItems: NavItem[] = [
    { id: 'hero', icon: <FaHome size={20} />, label: 'Home' },
    { id: 'about', icon: <FaUser size={20} />, label: 'About' },
    { id: 'experience', icon: <FaBriefcase size={20} />, label: 'Experience' },
    { id: 'contact', icon: <FaEnvelope size={20} />, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`
        ${getThemeClasses(theme, 'bg-gray-800/70 text-white', 'bg-white/70 text-gray-800')}
        backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-8 shadow-lg
      `}
      >
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              relative flex items-center justify-center transition-all duration-200
              hover:scale-110 focus:outline-none w-10 h-10
            `}
            aria-label={item.label}
          >
            {activeSection === item.id && (
              <span
                className={`
                absolute inset-0 rounded-full border-2 border-sky-400
                animate-pulse
              `}
              ></span>
            )}
            <div className={`text-sky-400 ${activeSection === item.id ? 'scale-110' : ''}`}>
              {item.icon}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
