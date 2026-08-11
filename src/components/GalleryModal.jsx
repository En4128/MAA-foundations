import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GalleryModal = ({ item, items = [], onClose, onSelect }) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (items.length === 0) return;
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      if (onSelect) onSelect(items[prevIndex]);
    },
    [currentIndex, items, onSelect]
  );

  const handleNext = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (items.length === 0) return;
      const nextIndex = (currentIndex + 1) % items.length;
      if (onSelect) onSelect(items[nextIndex]);
    },
    [currentIndex, items, onSelect]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Dark Glass Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/92 backdrop-blur-xl"
        />

        {/* Lightbox Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl w-full h-[88vh] bg-[#121212] rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10 flex flex-col justify-between"
        >
          {/* Top Bar Header */}
          <div className="p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between z-20">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full bg-[#5E7B52]/30 text-[#DCE5D7] border border-[#DCE5D7]/30 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                {item.category}
              </span>
              <span className="text-gray-400 text-xs sm:text-sm font-light">
                {currentIndex !== -1 ? `${currentIndex + 1} of ${items.length}` : ''}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#DCE5D7] text-white hover:text-[#2B2B2B] flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {/* Main Display Area */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden group">
            {/* Previous Arrow Button */}
            {items.length > 1 && (
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 sm:left-6 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-[#5E7B52] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 shadow-2xl"
              >
                <FaChevronLeft className="text-lg sm:text-xl text-[#DCE5D7]" />
              </button>
            )}

            {/* Active Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={item.id}
                src={item.image}
                alt={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="max-h-[58vh] max-w-full object-contain rounded-2xl shadow-2xl"
              />
            </AnimatePresence>

            {/* Next Arrow Button */}
            {items.length > 1 && (
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 sm:right-6 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-[#5E7B52] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 shadow-2xl"
              >
                <FaChevronRight className="text-lg sm:text-xl text-[#DCE5D7]" />
              </button>
            )}
          </div>

          {/* Footer Details & Filmstrip */}
          <div className="bg-[#1A1A1A] border-t border-white/10 p-4 sm:p-6 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[11px] text-[#DCE5D7] uppercase tracking-widest font-semibold block mb-1">
                  {item.tag || item.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
              {item.description && (
                <p className="text-xs sm:text-sm text-gray-300 max-w-md font-light leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>

            {/* Thumbnail Filmstrip */}
            {items.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pt-2 pb-1 scrollbar-thin scrollbar-thumb-[#5E7B52]">
                {items.map((thumb) => {
                  const isActive = thumb.id === item.id;
                  return (
                    <button
                      key={thumb.id}
                      onClick={() => onSelect && onSelect(thumb)}
                      className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                        isActive
                          ? 'border-[#DCE5D7] scale-105 shadow-lg opacity-100 ring-2 ring-[#5E7B52]/50'
                          : 'border-transparent opacity-50 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={thumb.image}
                        alt={thumb.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GalleryModal;
