import React from 'react';
import Header from '../components/Header';
import MessageCard from '../components/MessageCard';
import ShinchanCharacter from '../components/ShinchanCharacter';

const ShinchanPage: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
      <main className="container mx-auto max-w-4xl bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg transition-all duration-500 ease-in-out transform hover:shadow-2xl">
        <Header name="shinchanpaglu! 🖍️" />
        <div className="my-8 h-px bg-red-300"></div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <MessageCard themeColor="red" />
          </div>
          <div className="md:w-1/2 flex justify-center">
            <ShinchanCharacter />
          </div>
        </div>
      </main>
      <footer className="w-full text-center p-4 mt-8">
        <p className="text-red-600/80">
          Made with lots of mischief &lt;3
        </p>
      </footer>
    </div>
  );
};

export default ShinchanPage;