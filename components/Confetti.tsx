
import React, { useEffect, useState } from 'react';

const CONFETTI_COUNT = 100;
const COLORS = ['#f4a2b8', '#f8b4c4', '#ffc0cb', '#ffe4e1', '#fff0f5'];

interface ConfettiPiece {
  id: number;
  style: React.CSSProperties;
}

const Confetti: React.FC = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generateConfetti = () => {
      const newConfetti = Array.from({ length: CONFETTI_COUNT }).map((_, index) => {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const left = `${Math.random() * 100}vw`;
        const animationDuration = `${Math.random() * 3 + 4}s`; // 4s to 7s
        const animationDelay = `${Math.random() * 5}s`;
        const transform = `rotate(${Math.random() * 360}deg)`;

        return {
          id: index,
          style: {
            backgroundColor: color,
            left,
            animationDuration,
            animationDelay,
            transform,
          },
        };
      });
      setConfetti(newConfetti);
    };

    generateConfetti();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {confetti.map(({ id, style }) => (
        <div key={id} className="confetti" style={style}></div>
      ))}
    </div>
  );
};

export default Confetti;
