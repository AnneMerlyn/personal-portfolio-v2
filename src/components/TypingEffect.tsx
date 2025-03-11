import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeClasses } from '../utils/theme';
import '../styles/Hero.css';

interface TypingEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterPhrase?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  phrases,
  typingSpeed = 150,
  deletingSpeed = 80,
  delayAfterPhrase = 1500,
}) => {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
      );

      setCurrentSpeed(isDeleting ? deletingSpeed : typingSpeed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delayAfterPhrase);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, currentSpeed);
    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    loopNum,
    currentSpeed,
    phrases,
    typingSpeed,
    deletingSpeed,
    delayAfterPhrase,
  ]);

  return (
    <div className="cursor-container">
      <div className={`typing-text ${getThemeClasses(theme, 'text-white', 'text-gray-800')}`}>
        <span>{text}</span>
        <span className="cursor"></span>
      </div>
    </div>
  );
};

export default TypingEffect;
