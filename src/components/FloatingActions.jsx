import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaChevronUp } from 'react-icons/fa';
import { resortInfo } from '../data/resortData';

const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3 pointer-events-none">
      <div className="flex flex-col space-y-3 pointer-events-auto">
        {/* Floating WhatsApp Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/${resortInfo.whatsappNumber.replace(/\D/g, '')}?text=Hello%20MAA%20Resort%20,%20I%20would%20like%20to%20inquire%20about%20a%20stay.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl shadow-2xl border-2 border-white cursor-pointer hover:shadow-green-500/40 relative group"
        >
          <FaWhatsapp />
          {/* Tooltip */}
          <span className="absolute right-16 bg-black/80 text-white text-[11px] font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow">
            WhatsApp Concierge
          </span>
        </motion.a>

        {/* Floating Call Now Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          href={`tel:${resortInfo.phone}`}
          aria-label="Call Now"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#5E7B52] text-[#DCE5D7] flex items-center justify-center text-xl shadow-2xl border-2 border-[#DCE5D7] cursor-pointer hover:bg-[#DCE5D7] hover:text-[#5E7B52] transition-colors relative group"
        >
          <FaPhoneAlt />
          {/* Tooltip */}
          <span className="absolute right-16 bg-black/80 text-white text-[11px] font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow">
            Call Direct
          </span>
        </motion.a>

        {/* Floating Back To Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="w-12 h-12 rounded-full bg-white text-[#5E7B52] flex items-center justify-center text-lg shadow-xl border border-gray-200 cursor-pointer hover:bg-[#5E7B52] hover:text-white transition-colors relative group"
            >
              <FaChevronUp />
              <span className="absolute right-16 bg-black/80 text-white text-[11px] font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow">
                Back to Top
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingActions;
