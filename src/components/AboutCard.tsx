import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeClasses } from '../utils/theme';

export type CardColor = 'red' | 'indigo' | 'sky';

export interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: CardColor;
}

const getColorClasses = (theme: 'dark' | 'light', color: CardColor) => {
  const colorMap = {
    red: {
      dark: {
        bg: 'bg-red-900/70 hover:bg-red-800',
        border: 'border-red-700',
        text: 'text-red-400',
      },
      light: {
        bg: 'bg-white hover:bg-red-50',
        border: 'border-red-100',
        text: 'text-red-600',
      },
    },
    indigo: {
      dark: {
        bg: 'bg-indigo-900/70 hover:bg-indigo-800',
        border: 'border-indigo-700',
        text: 'text-indigo-400',
      },
      light: {
        bg: 'bg-white hover:bg-indigo-50',
        border: 'border-indigo-100',
        text: 'text-indigo-600',
      },
    },
    sky: {
      dark: {
        bg: 'bg-sky-900/70 hover:bg-sky-800',
        border: 'border-sky-700',
        text: 'text-sky-400',
      },
      light: {
        bg: 'bg-white hover:bg-sky-50',
        border: 'border-sky-100',
        text: 'text-sky-600',
      },
    },
  };

  return colorMap[color][theme === 'dark' ? 'dark' : 'light'];
};

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description, color }) => {
  const { theme } = useTheme();
  const colorClasses = getColorClasses(theme, color);

  return (
    <div
      className={`rounded-lg p-4 transition-all duration-300 transform hover:-translate-y-2 h-full
        ${colorClasses.bg} ${colorClasses.border}
        border hover:border-2 group shadow-md flex flex-col`}
    >
      <div className="flex flex-col items-center text-center h-full">
        <div
          className={`text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 ${colorClasses.text}`}
        >
          {icon}
        </div>
        <h3
          className={`text-lg font-bold mb-1 ${getThemeClasses(theme, 'text-gray-100', 'text-gray-800')}`}
        >
          {title}
        </h3>
        <p className={`text-sm ${getThemeClasses(theme, 'text-gray-300', 'text-gray-600')}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
