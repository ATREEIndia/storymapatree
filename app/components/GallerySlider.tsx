import React, { useState, useEffect } from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";



interface Image {
  src: string;
  alt: string;
  title?: string;
}

const GallerySlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images: Image[] = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      alt: 'Mountain landscape',
      title: 'Majestic Mountains'
    },
    {
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop',
      alt: 'Ocean sunset',
      title: 'Ocean Serenity'
    },
    {
      src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=600&fit=crop',
      alt: 'Forest path',
      title: 'Forest Adventure'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop',
      alt: 'Desert landscape',
      title: 'Desert Dreams'
    },
    {
      src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=600&fit=crop',
      alt: 'Forest path',
      title: 'Forest Adventure'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop',
      alt: 'Desert landscape',
      title: 'Desert Dreams'
    },
    {
      src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=600&fit=crop',
      alt: 'Forest path',
      title: 'Forest Adventure'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop',
      alt: 'Desert landscape',
      title: 'Desert Dreams'
    },
    {
      src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=600&fit=crop',
      alt: 'Forest path',
      title: 'Forest Adventure'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop',
      alt: 'Desert landscape',
      title: 'Desert Dreams'
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <div className="flex items-center justify-center  py-8">
      <div className="w-full">
        <div className="relative group">
          {/* Main Image Container */}
          <div className="relative h-[600px]  overflow-hidden rounded-2xl shadow-2xl ">

            {Array.from({length:10})}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={`https://atree-communication.s3.amazonaws.com/Storymap_media/gallery/${index+1}.jpg`}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* {image.title && (
                  <div className="absolute bottom-8 left-8 text-white">
                    <h2 className="text-4xl font-bold mb-2">{image.title}</h2>
                    <p className="text-lg opacity-90">Slide {index + 1} of {images.length}</p>
                  </div>
                )} */}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 hidden"
            aria-label="Previous slide"
          >
            {/* <ChevronLeft size={24} /> */}
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 hidden"
            aria-label="Next slide"
          >
            {/* <ChevronRight size={24} /> */}
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex
                    ? 'w-10 h-3 bg-white'
                    : 'w-3 h-3 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Toggle */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all"
          >
            {isAutoPlaying ? 'Pause ◻' : 'Play ▷'} 
          </button>
        </div>

        {/* Thumbnail Preview */}
        <div className="mt-6 grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-4 ring-white scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={`https://atree-communication.s3.amazonaws.com/Storymap_media/gallery/${index+1}.jpg`}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;