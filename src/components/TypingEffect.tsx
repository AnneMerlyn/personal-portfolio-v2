import React, { useState, useEffect, useMemo } from 'react';
import { useTheme } from '../hooks/useTheme';
import { getThemeClasses } from '../utils/theme';
import '../styles/Hero.css';

interface TypingEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterPhrase?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  phrases = [],
  typingSpeed = 150,
  deletingSpeed = 80,
  delayAfterPhrase = 1500,
}) => {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(typingSpeed);

  const phrasesArray = useMemo(() => (Array.isArray(phrases) ? phrases : []), [phrases]);

  useEffect(() => {
    if (phrasesArray.length === 0) return;

    const handleTyping = () => {
      const i = loopNum % phrasesArray.length;
      const fullText = phrasesArray[i];

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
    phrasesArray,
    typingSpeed,
    deletingSpeed,
    delayAfterPhrase,
  ]);

  return (
    <div className="cursor-container">
      {phrasesArray.length > 0 && (
        <div className={`typing-text ${getThemeClasses(theme, 'text-white', 'text-gray-800')}`}>
          <span>{text}</span>
          <span className="cursor"></span>
        </div>
      )}
    </div>
  );
};

export default TypingEffect;
