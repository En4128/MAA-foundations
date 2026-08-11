import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaSearchPlus, FaThLarge, FaExpandAlt, FaImages, FaChevronRight } from 'react-icons/fa';
import { galleryData } from '../data/resortData';
import GalleryModal from './GalleryModal';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const categories = ['All', 'Resort', 'Rooms', 'Restaurant', 'Events', 'Nature'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'carousel'
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DCE5D7]/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5E7B52]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 mb-3 px-4 py-1.5 rounded-full bg-[#DCE5D7]/25 border border-[#DCE5D7]/50"
          >
            <FaImages className="text-[#5E7B52] text-xs" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#3E5C35] font-bold">
              VISUAL SANCTUARY • {galleryData.length} PHOTOS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B2B2B] leading-tight mb-4"
          >
            Resort Photo Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-gray-600 font-light leading-relaxed"
          >
            Explore our curated collection of luxury villa architecture, tranquil garden paths, royal dining spaces, and unforgettable event venues.
          </motion.p>
        </div>

        {/* Controls Bar: Category Filters + View Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-[#DCE5D7]/40 pb-6">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = cat === 'All' 
                ? galleryData.length 
                : galleryData.filter(i => i.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                    isActive
                      ? 'bg-[#5E7B52] text-white shadow-lg shadow-[#5E7B52]/20 scale-105'
                      : 'bg-white text-gray-700 hover:bg-[#F3ECE1] border border-gray-200/80 hover:border-[#DCE5D7]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle Switch */}
          <div className="flex items-center bg-white p-1 rounded-2xl border border-gray-200 shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-[#5E7B52] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#5E7B52]'
              }`}
            >
              <FaThLarge className="text-sm" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                viewMode === 'carousel'
                  ? 'bg-[#5E7B52] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#5E7B52]'
              }`}
            >
              <FaImages className="text-sm" />
              <span>Carousel</span>
            </button>
          </div>
        </div>

        {/* Gallery Content View */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            /* ── GRID VIEW (STAGGERED LUXURY GRID) ── */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-88 sm:h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-white/60 bg-white cursor-pointer"
                >
                  {/* Photo Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Top Category Badge & Expand Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] text-[#DCE5D7] uppercase tracking-widest font-semibold border border-white/20">
                      {item.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 border border-white/20">
                      <FaExpandAlt className="text-xs text-[#DCE5D7]" />
                    </div>
                  </div>

                  {/* Bottom Content Caption */}
                  <div className="absolute bottom-6 left-6 right-6 text-white transform group-hover:-translate-y-1 transition-transform duration-300 z-10">
                    <span className="text-[11px] text-[#DCE5D7] font-semibold uppercase tracking-wider block mb-1">
                      {item.tag || item.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight mb-2 group-hover:text-[#DCE5D7] transition-colors">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-gray-300 font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* ── CAROUSEL SLIDER VIEW ── */
            <motion.div
              key="carousel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative pb-12"
            >
              <Swiper
                key={activeCategory}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={28}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
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
                      className="group relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-white cursor-pointer transition-all duration-500"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 border border-white/20">
                        <FaSearchPlus className="text-sm text-[#DCE5D7]" />
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#5E7B52]/80 backdrop-blur-md text-[10px] text-[#DCE5D7] uppercase tracking-widest font-semibold mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Lightbox Popup Modal */}
      <GalleryModal
        item={selectedImage}
        items={filteredItems}
        onClose={() => setSelectedImage(null)}
        onSelect={(newItem) => setSelectedImage(newItem)}
      />
    </section>
  );
};

export default Gallery;
