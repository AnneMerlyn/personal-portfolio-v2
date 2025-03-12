import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeClasses } from '../utils/theme';
import ImageMe from '../assets/me.png';
import { FaAward, FaHeart, FaLightbulb } from 'react-icons/fa';
import AboutCard, { CardColor } from './AboutCard';

const About: React.FC = () => {
  const { theme } = useTheme();

  const aboutCards = [
    {
      icon: <FaAward />,
      title: 'Experienced',
      description:
        'Years of hands-on development experience building robust applications and solving complex problems.',
      color: 'indigo' as CardColor,
    },
    {
      icon: <FaHeart />,
      title: 'Dedicated',
      description:
        'Committed to delivering high-quality code and exceptional user experiences with attention to detail.',
      color: 'red' as CardColor,
    },
    {
      icon: <FaLightbulb />,
      title: 'Competent',
      description:
        'Proficient in modern technologies and best practices with a continuous learning mindset.',
      color: 'sky' as CardColor,
    },
  ];

  return (
    <section id="about" className="py-16 px-4">
      <div className="relative z-10 py-16 container mx-auto px-4 max-w-6xl">
        <h4
          className={`text-center text-xl mb-2 ${getThemeClasses(
            theme,
            'text-gray-200',
            'text-gray-700'
          )}`}
        >
          Get To Know
        </h4>
        <h2
          className={`text-4xl font-bold mb-12 text-center ${getThemeClasses(
            theme,
            'text-sky-400',
            'text-sky-500'
          )}`}
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex items-center justify-center">
            <div className="relative max-w-[300px] w-full">
              <div
                className={`absolute inset-0 rounded-2xl transform rotate-6 scale-105 -z-10 ${getThemeClasses(
                  theme,
                  'bg-sky-600',
                  'bg-sky-400'
                )}`}
              ></div>

              <div
                className={`rounded-2xl overflow-hidden w-full relative ${getThemeClasses(
                  theme,
                  'bg-amber-400',
                  'bg-amber-400'
                )}`}
              >
                <img
                  src={ImageMe}
                  alt="Profile"
                  className="w-full h-auto max-h-[350px] object-cover transform transition-transform hover:scale-105 duration-300 relative z-10"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="mb-6">
              <p
                className={`text-lg mb-4 ${getThemeClasses(theme, 'text-gray-200', 'text-gray-700')}`}
              >
                I'm a passionate developer with expertise in building modern web applications. My
                journey in software development has equipped me with a diverse skill set and a
                problem-solving mindset.
              </p>
              <p className={`text-lg ${getThemeClasses(theme, 'text-gray-200', 'text-gray-700')}`}>
                I specialize in creating responsive, user-friendly interfaces using cutting-edge
                technologies. My goal is to craft digital experiences that are not only visually
                appealing but also highly functional and accessible.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {aboutCards.map((card, index) => (
                <AboutCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  color={card.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
