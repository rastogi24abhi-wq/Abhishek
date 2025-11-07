
import React from 'react';

const images = [
  'https://picsum.photos/seed/bday1/400/400',
  'https://picsum.photos/seed/bday2/400/400',
  'https://picsum.photos/seed/bday3/400/400',
  'https://picsum.photos/seed/bday4/400/400',
  'https://picsum.photos/seed/bday5/400/400',
  'https://picsum.photos/seed/bday6/400/400',
];

const Gallery: React.FC = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-6 font-nunito">
        Our Awesome Memories! ✨
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src={src} 
              alt={`Memory ${index + 1}`} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
