import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeClasses } from '../utils/theme';

export interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content, link }) => {
  const { theme } = useTheme();

  return (
    <a
      href={link}
      target="_blank"
      className={`block mb-6 rounded-lg p-6
        ${getThemeClasses(
          theme,
          'bg-indigo-900 hover:bg-transparent hover:border-indigo-900',
          'bg-white hover:bg-transparent hover:border-sky-600 shadow-md'
        )}
        hover:border-2 group`}
    >
      <div
        className={`flex flex-col items-center text-center ${getThemeClasses(theme, 'text-sky-500', 'text-sky-600')}`}
      >
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p>{content}</p>
      </div>
    </a>
  );
};

export default ContactCard;
