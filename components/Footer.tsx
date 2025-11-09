import React from 'react';
import BirthdayCake from './BirthdayCake';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center p-4 mt-8">
      <BirthdayCake />
      <p className="text-pink-600/80 mt-4">
      © 2025 Abhishek
      </p>
    </footer>
  );
};

export default Footer;
