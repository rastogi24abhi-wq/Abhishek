import React from 'react';

interface PageSwitcherProps {
  currentPage: 'diya' | 'shinchan';
  setCurrentPage: (page: 'diya' | 'shinchan') => void;
}

const PageSwitcher: React.FC<PageSwitcherProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="page-switcher">
      <button 
        className={`diya ${currentPage === 'diya' ? 'active' : ''}`}
        onClick={() => setCurrentPage('diya')}
        aria-pressed={currentPage === 'diya'}
      >
        For Cutie Pie
      </button>
      <button 
        className={`shinchan ${currentPage === 'shinchan' ? 'active' : ''}`}
        onClick={() => setCurrentPage('shinchan')}
        aria-pressed={currentPage === 'shinchan'}
      >
        For Paglu
      </button>
    </div>
  );
};

export default PageSwitcher;