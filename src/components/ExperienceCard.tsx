import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeClasses } from '../utils/theme';

export interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ icon, title, technologies }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-lg p-4 h-full border shadow-md
        ${getThemeClasses(
          theme,
          'bg-sky-900/70 border-sky-700 text-white',
          'bg-white border-sky-200 text-gray-800'
        )}`}
    >
      <div className="flex flex-col items-center text-center h-full">
        <div className={`text-2xl mb-2 ${getThemeClasses(theme, 'text-sky-400', 'text-sky-600')}`}>
          {icon}
        </div>
        <h3
          className={`text-lg font-bold mb-3 ${getThemeClasses(
            theme,
            'text-gray-100',
            'text-gray-800'
          )}`}
        >
          {title}
        </h3>
        <ul className="w-full">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className={`flex items-center py-1 ${getThemeClasses(
                theme,
                'text-gray-300',
                'text-gray-600'
              )}`}
            >
              <span
                className={`mr-2 text-xs ${getThemeClasses(theme, 'text-sky-400', 'text-sky-600')}`}
              >
                ●
              </span>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
