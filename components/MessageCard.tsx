
import React from 'react';

const MessageCard: React.FC = () => {
  return (
    <section className="text-center bg-white/60 p-6 rounded-2xl shadow-inner">
      <h2 className="text-3xl font-bold text-pink-700 mb-4 font-nunito">
        A little note for you... 💖
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        To my dearest friend, my partner-in-crime, and my favorite human! I hope your day is as amazing, bright, and beautiful as you are. Thank you for all the laughs, the late-night talks, and for just being you. Here's to another year of unforgettable adventures together. Love you to the moon and back!
      </p>
    </section>
  );
};

export default MessageCard;
