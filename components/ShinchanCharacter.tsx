import React from 'react';

const ShinchanCharacter: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-56 h-72 md:w-64 md:h-80 animate-bob">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ebxI3YHH2PKN2pl0qVph8uwex7A3Qd-HmQ&s"
          alt="A cute drawing of Shinchan looking up curiously"
          className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-red-400"
        />
        <div className="absolute -bottom-4 -right-4 bg-yellow-300 text-red-600 font-bold font-pacifico p-2 rounded-lg shadow-md transform -rotate-12">
          Shinchanpaglu
        </div>
      </div>
    </div>
  );
};

export default ShinchanCharacter;
