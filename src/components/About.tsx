import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { getThemeClasses } from '../utils/theme';
import ImageMe from '../assets/me.png';
import { FaAward, FaHeart, FaLightbulb } from 'react-icons/fa';
import AboutCard, { CardColor } from './AboutCard';

const About: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const cardsWithIcons = [
    {
      icon: <FaAward />,
      title: t('about.cards.0.title'),
      description: t('about.cards.0.description'),
      color: 'indigo' as CardColor,
    },
    {
      icon: <FaHeart />,
      title: t('about.cards.1.title'),
      description: t('about.cards.1.description'),
      color: 'red' as CardColor,
    },
    {
      icon: <FaLightbulb />,
      title: t('about.cards.2.title'),
      description: t('about.cards.2.description'),
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
          {t('about.getToKnow')}
        </h4>
        <h2
          className={`text-4xl font-bold mb-12 text-center ${getThemeClasses(
            theme,
            'text-sky-400',
            'text-sky-500'
          )}`}
        >
          {t('about.aboutMe')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex items-center justify-center">
            <div className="relative max-w-[300px] w-full">
              <div
                className={`absolute inset-0 rounded-2xl transform rotate-12 scale-105 -z-10 ${getThemeClasses(
                  theme,
                  'bg-indigo-300',
                  'bg-indigo-300'
                )}`}
              ></div>

              <div
                className={`rounded-2xl overflow-hidden w-full relative ${getThemeClasses(
                  theme,
                  'bg-yellow-300',
                  'bg-yellow-300'
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
                {t('about.description')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {cardsWithIcons.map((card, index) => (
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
