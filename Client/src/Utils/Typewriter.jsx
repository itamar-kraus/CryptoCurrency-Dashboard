import React, { useState, useEffect } from "react";

// Typewriter Component
// This component creates a typewriter effect for displaying text. It progressively reveals the text based on the provided speed.
export const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState(""); // State to hold the currently displayed text
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index of the text being displayed

  useEffect(() => {
    let timer;
    // Check if the current index is less than the length of the text
    if (currentIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);
    }
    // Cleanup function to clear the timeout if the component unmounts or updates
    return () => clearTimeout(timer);
  }, [currentIndex, speed, text]);
  // Render the currently displayed text wrapped in a span element
  return <span>{displayText}</span>;
};
