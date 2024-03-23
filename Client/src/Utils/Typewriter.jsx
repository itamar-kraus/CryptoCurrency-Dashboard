import React, { useState, useEffect } from 'react';

export const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (currentIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, speed, text]);

  return <span>{displayText}</span>;
};