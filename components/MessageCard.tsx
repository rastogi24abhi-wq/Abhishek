import React from 'react';

interface MessageCardProps {
  themeColor?: 'pink' | 'red';
}

const MessageCard: React.FC<MessageCardProps> = ({ themeColor = 'pink' }) => {
  const headingColor = themeColor === 'pink' ? 'text-pink-700' : 'text-red-700';

  return (
    <section className="text-center bg-white/60 p-6 rounded-2xl shadow-inner h-full flex flex-col justify-center">
      <h2 className={`text-3xl font-bold ${headingColor} mb-4 font-nunito`}>
        A little note for you... 💖
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        To my dearest friend, my partner-in-crime, and my favorite human! I hope your day is as amazing, bright, and beautiful as you are. Thank you for all the laughs, the late-night talks, and for just being you. Here's to another year of unforgettable adventures together. Love you to the moon and back!
      </p>
    </section>
  );
};

export default MessageCard;