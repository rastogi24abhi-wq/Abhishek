import React from 'react';
import Header from '../components/Header';
import MessageCard from '../components/MessageCard';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const DiyaPage: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
      <main className="container mx-auto max-w-4xl bg-white/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg transition-all duration-500 ease-in-out transform hover:shadow-2xl">
        <Header name="Diya Gupta" />
        <div className="my-8 h-px bg-pink-300"></div>
        <MessageCard themeColor="pink" />
        <div className="my-8 h-px bg-pink-300"></div>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default DiyaPage;