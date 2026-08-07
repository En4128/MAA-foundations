import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaSearchPlus } from 'react-icons/fa';
import { galleryData } from '../data/resortData';
import GalleryModal from './GalleryModal';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const categories = ['All', 'Resort', 'Rooms', 'Restaurant', 'Events', 'Nature'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#F8F8F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="w-8 h-[2px] bg-[#E8D5B5]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8D5B5] font-bold">
              VISUAL SANCTUARY
            </span>
            <span className="w-8 h-[2px] bg-[#E8D5B5]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#C4956A] leading-tight mb-4">
            Resort Photo Gallery
          </h2>
          <p className="text-base text-gray-600 font-light leading-relaxed">
            Immerse your senses in the breathtaking vistas, luxurious villa interiors, and culinary masterpieces of MAA Foundations.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#C4956A] text-[#E8D5B5] shadow-md border border-[#E8D5B5]/40 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <div className="relative pb-12">
          <Swiper
            key={activeCategory}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-3xl p-2"
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-luxury border border-white cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Zoom Icon Button */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300">
                    <FaSearchPlus className="text-sm text-[#E8D5B5]" />
                  </div>

                  {/* Caption Text */}
                  <div className="absolute bottom-6 left-6 right-6 text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#C4956A]/80 backdrop-blur-md text-[10px] text-[#E8D5B5] uppercase tracking-widest font-semibold mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Lightbox Popup Modal */}
      <GalleryModal
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};

export default Gallery;
