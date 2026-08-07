import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExpand } from 'react-icons/fa';

const GalleryModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-5xl w-full bg-black/80 rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/20"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#E8D5B5] text-white hover:text-[#C4956A] flex items-center justify-center transition-colors shadow-lg"
          >
            <FaTimes className="text-xl" />
          </button>

          {/* Image */}
          <div className="relative max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full max-h-[75vh] object-contain"
            />
          </div>

          {/* Footer Bar */}
          <div className="p-6 bg-gradient-to-r from-[#DDD0C0] to-[#C4956A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E8D5B5] font-semibold">
                {item.category} • {item.tag}
              </span>
              <h3 className="font-serif text-2xl font-bold">{item.title}</h3>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#E8D5B5] text-[#C4956A] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
              Close Viewer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GalleryModal;
