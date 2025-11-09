import React, { useState, useEffect } from 'react';
import Confetti from './components/Confetti';
import Balloons from './components/Balloons';
import PageSwitcher from './components/PageSwitcher';
import DiyaPage from './pages/DiyaPage';
import ShinchanPage from './pages/ShinchanPage';

const PINK_COLORS = ['#f4a2b8', '#f8b4c4', '#ffc0cb', '#ffe4e1', '#fff0f5'];
// Shinchan's classic colors: Red, Yellow, White, and Blue shorts
const SHINCHAN_COLORS = ['#ef4444dd', '#facc15dd', '#ffffffdd', '#3b82f6dd']; 

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'diya' | 'shinchan'>('diya');

  // Dynamically set body class for background color
  useEffect(() => {
    document.body.classList.remove('bg-pink-100', 'shinchan-bg');
    if (currentPage === 'diya') {
      document.body.classList.add('bg-pink-100');
    } else {
      document.body.classList.add('shinchan-bg');
    }
  }, [currentPage]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Confetti colors={currentPage === 'diya' ? PINK_COLORS : SHINCHAN_COLORS.map(c => c.slice(0, 7))}/>
      <Balloons colors={currentPage === 'diya' ? undefined : SHINCHAN_COLORS} />
      <PageSwitcher currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'diya' ? <DiyaPage /> : <ShinchanPage />}
    </div>
  );
};

export default App;