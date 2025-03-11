/**
 * Utility functions for theme-based styling
 */

export type Theme = 'light' | 'dark';

/**
 * Returns the appropriate class string based on the current theme
 * @param theme Current theme ('light' or 'dark')
 * @param darkClasses Classes to apply when theme is dark
 * @param lightClasses Classes to apply when theme is light
 * @returns String of CSS classes
 */
export const getThemeClasses = (
  theme: Theme,
  darkClasses: string,
  lightClasses: string
): string => {
  return theme === 'dark' ? darkClasses : lightClasses;
};

/**
 * Returns conditional classes based on theme and condition
 * @param theme Current theme ('light' or 'dark')
 * @param condition Boolean condition to check
 * @param trueClasses Classes to apply when condition is true (with theme variants)
 * @param falseClasses Classes to apply when condition is false (with theme variants)
 * @returns String of CSS classes
 */
export const getConditionalThemeClasses = (
  theme: Theme,
  condition: boolean,
  trueClasses: { dark: string; light: string },
  falseClasses: { dark: string; light: string }
): string => {
  return condition
    ? theme === 'dark'
      ? trueClasses.dark
      : trueClasses.light
    : theme === 'dark'
      ? falseClasses.dark
      : falseClasses.light;
};
