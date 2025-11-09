import React from 'react';

const ShinchanCharacter: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-64 h-80 md:w-80 md:h-96 animate-bob">
        <img
          src="https://picsum.photos/seed/shinchan/400/500"
          alt="A very realistic and handsome Shin-chan"
          className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-red-400"
        />
        <div className="absolute -bottom-4 -right-4 bg-yellow-300 text-red-600 font-bold font-pacifico p-2 rounded-lg shadow-md transform -rotate-12">
          Ooh la la!
        </div>
      </div>
       <p className="text-sm text-gray-500 mt-4 italic text-center">
        (Imagine a super-duper realistic Shinchan here!)
      </p>
    </div>
  );
};

export default ShinchanCharacter;