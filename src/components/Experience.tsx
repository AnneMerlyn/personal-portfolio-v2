import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeClasses } from '../utils/theme';
import ExperienceCard from './ExperienceCard';
import { FaCode, FaServer, FaSitemap } from 'react-icons/fa';

const Experience: React.FC = () => {
  const { theme } = useTheme();

  const experienceCards = [
    {
      icon: <FaCode />,
      title: 'Frontend',
      technologies: [
        'React & Next.js',
        'TypeScript',
        'Tailwind CSS',
        'HTML5 & CSS3',
        'Responsive Design',
      ],
    },
    {
      icon: <FaServer />,
      title: 'Backend',
      technologies: [
        'C# .Net',
        'Node.js',
        'Express',
        'MSSQL',
        'MongoDB',
        'PostgreSQL',
        'RESTful APIs',
      ],
    },
    {
      icon: <FaSitemap />,
      title: 'Methodologies',
      technologies: [
        'Agile Development',
        'CI/CD',
        'Test-Driven Development',
        'Git & GitHub',
        'Docker',
        'Microservices',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h4
          className={`text-center text-xl mb-2 ${getThemeClasses(
            theme,
            'text-gray-200',
            'text-gray-700'
          )}`}
        >
          What I Offer
        </h4>
        <h2
          className={`text-4xl font-bold mb-12 text-center ${getThemeClasses(
            theme,
            'text-sky-400',
            'text-sky-500'
          )}`}
        >
          My Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceCards.map((card, index) => (
            <ExperienceCard
              key={index}
              icon={card.icon}
              title={card.title}
              technologies={card.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
