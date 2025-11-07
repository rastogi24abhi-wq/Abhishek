import React, { useState, useEffect } from 'react';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  const fullHeaderText = "Happy Birthday,";
  const [headerText, setHeaderText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isNameVisible, setIsNameVisible] = useState(false);

  useEffect(() => {
    // Ensure animation restarts on component mount, useful for development hot-reloading
    setHeaderText('');
    setShowCursor(true);
    setIsNameVisible(false);

    const typingInterval = setInterval(() => {
      setHeaderText((prev) => {
        if (prev.length < fullHeaderText.length) {
          return fullHeaderText.slice(0, prev.length + 1);
        } else {
          clearInterval(typingInterval);
          // After typing, pause, then hide cursor and show the name with a boom
          setTimeout(() => {
            setShowCursor(false);
            setIsNameVisible(true);
          }, 500); // Pause for 500ms
          return prev;
        }
      });
    }, 150); // Typing speed: 150ms per character

    // Cleanup interval on component unmount
    return () => clearInterval(typingInterval);
  }, [fullHeaderText]);


  return (
    <header className="text-center min-h-[12rem] md:min-h-[16rem] flex flex-col justify-center items-center">
      <h1 className="font-pacifico text-5xl md:text-7xl text-pink-500 drop-shadow-md">
        {headerText}
        {showCursor && <span className="animate-blink ml-1">|</span>}
      </h1>
      <p
        className={`font-pacifico text-6xl md:text-8xl text-pink-600 mt-2 drop-shadow-lg ${
          isNameVisible ? 'animate-boom' : 'opacity-0'
        }`}
      >
        {name}! 🎂
      </p>
    </header>
  );
};

export default Header;