import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { getThemeClasses } from '../utils/theme';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer
      className={`${getThemeClasses(
        theme,
        'bg-gray-900 text-white',
        'bg-slate-50 text-gray-800'
      )} pt-34 pb-8 transition-colors duration-200`}
    >
      <div className="container mx-auto px-4 text-center">
        <p>{t('footer.copyright') as string}</p>
      </div>
    </footer>
  );
};

export default Footer;
