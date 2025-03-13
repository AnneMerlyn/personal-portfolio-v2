import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { getThemeClasses } from '../utils/theme';
import Button from './Button';
import TypingEffect from './TypingEffect';
import '../styles/Hero.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const typingPhrases = t('hero.typingPhrases', { returnObjects: true }) as unknown as string[];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/anne-merlyn-martinez',
      label: 'LinkedIn',
    },
    { icon: FaGithub, href: 'https://github.com/AnneMerlyn', label: 'GitHub' },
    {
      icon: FaEnvelope,
      href: 'mailto:martinezannemerlyn@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <header id="hero" className="flex flex-col md:min-h-[85vh]">
      <div className="container mx-auto px-4 text-center relative flex-grow">
        <div className={`capitals mt-4 ${getThemeClasses(theme, 'text-white', 'text-gray-800')}`}>
          <h4 className="text-xl mb-4">{t('hero.greeting')}</h4>
          <h2 className="text-4xl mb-12">{t('hero.name')}</h2>
          <h2 className="text-6xl lg:text-8xl role-text font-bold mb-12">{t('hero.role')}</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
          <Button
            href="https://drive.google.com/file/d/1oxnSyrRFx6rYGHaazsxT9uYRBtwbbhII/view?usp=sharing"
            variant="outline"
            openInNewTab
          >
            {t('hero.downloadCvEn')}
          </Button>
          <Button
            href="https://drive.google.com/file/d/1VjvhKdVMnDqpM5AB5umOWPVBruUmyNZu/view?usp=sharing"
            variant="outline"
            openInNewTab
          >
            {t('hero.downloadCvDe')}
          </Button>
          <Button href="#contact" variant="primary">
            {t('hero.contactMe')}
          </Button>
        </div>

        <div className="hidden md:block">
          <TypingEffect phrases={typingPhrases} />
        </div>
      </div>
      <div className="container mx-auto px-4 pb-8">
        <div className="flex items-center justify-center md:justify-between">
          <div className="flex flex-row md:flex-col gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`p-3 border-2 rounded-full transition-colors ${getThemeClasses(
                  theme,
                  'border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white',
                  'border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white'
                )}`}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          <div className="hidden md:block relative">
            <a
              href="#contact"
              className={`scroll-down ${getThemeClasses(theme, 'text-sky-400', 'text-sky-500')}`}
            >
              {t('hero.scrollDown')}
              <FaChevronDown className="scroll-down-arrow" />
            </a>
          </div>
        </div>

        <div className="md:hidden mt-8">
          <a
            href="#contact"
            className={`flex items-center justify-center gap-2 ${getThemeClasses(
              theme,
              'text-sky-400',
              'text-sky-500'
            )}`}
          >
            {t('hero.scrollDown')}
            <FaChevronDown />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
