import React, { useState, useEffect } from 'react';

const BALLOON_COUNT = 15;
const DEFAULT_COLORS = ['#ffc0cbdd', '#ffb6c1dd', '#ff69b4dd', '#db7093dd', '#fff0f5dd']; // Added alpha for translucency

interface BalloonState {
  id: number;
  style: React.CSSProperties;
  popped: boolean;
}

interface BalloonsProps {
  colors?: string[];
}

const Balloons: React.FC<BalloonsProps> = ({ colors = DEFAULT_COLORS }) => {
  const [balloons, setBalloons] = useState<BalloonState[]>([]);

  useEffect(() => {
    const generatedBalloons = Array.from({ length: BALLOON_COUNT }).map((_, index) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 50 + 60; // 60px to 110px
      const left = `${Math.random() * 90}vw`; // Avoid edges
      const animationDuration = `${Math.random() * 10 + 10}s`; // 10s to 20s
      const animationDelay = `${Math.random() * 15}s`;

      return {
        id: index,
        style: {
          width: `${size}px`,
          height: `${size * 1.2}px`,
          background: `radial-gradient(circle at 25% 25%, #ffffffcc, ${color})`,
          left,
          animationDuration,
          animationDelay,
        },
        popped: false,
      };
    });
    setBalloons(generatedBalloons);
  }, [colors]);

  const handlePop = (id: number) => {
    setBalloons(prevBalloons =>
      prevBalloons.map(b => (b.id === id ? { ...b, popped: true } : b))
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-20 overflow-hidden">
      {balloons.map(({ id, style, popped }) => (
        <div
          key={id}
          className={`balloon ${popped ? 'popped' : ''}`}
          style={style}
          onClick={() => !popped && handlePop(id)}
        ></div>
      ))}
    </div>
  );
};

export default Balloons;