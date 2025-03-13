import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { getThemeClasses } from '../utils/theme';

export type ButtonVariant = 'primary' | 'outline' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  openInNewTab?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  fullWidth = false,
  openInNewTab = false,
}) => {
  const { theme } = useTheme();

  const getSizeClasses = (size: ButtonSize): string => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      case 'md':
      default:
        return 'px-6 py-3';
    }
  };

  const getVariantClasses = (variant: ButtonVariant): string => {
    switch (variant) {
      case 'outline':
        return getThemeClasses(
          theme,
          'border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white',
          'border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white'
        );
      case 'text':
        return getThemeClasses(
          theme,
          'text-sky-400 hover:text-sky-300',
          'text-sky-500 hover:text-sky-600'
        );
      case 'primary':
      default:
        return getThemeClasses(
          theme,
          'bg-sky-400 text-slate-900 hover:bg-sky-500',
          'bg-sky-500 text-white hover:bg-sky-600'
        );
    }
  };

  const buttonClasses = `
    ${getSizeClasses(size)}
    ${getVariantClasses(variant)}
    rounded-md transition-colors font-medium
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
        className={buttonClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
