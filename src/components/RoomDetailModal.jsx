import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaStar, FaBed, FaRulerCombined, FaUsers, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import { resortInfo } from '../data/resortData';

const RoomDetailModal = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-[#5E7B52] text-white flex items-center justify-center transition-colors"
          >
            <FaTimes className="text-lg" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Image Column */}
            <div className="md:col-span-6 relative bg-gray-900 min-h-[300px] md:min-h-full">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#5E7B52] text-[#DCE5D7] font-semibold text-xs uppercase tracking-wider shadow">
                  {room.category}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white text-[#2B2B2B]">
              <div>
                {/* Rating & Reviews */}
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                  <div className="flex text-[#DCE5D7]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-700">{room.rating}</span>
                  <span>({room.reviewsCount} verified guest reviews)</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#5E7B52] mb-2">
                  {room.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline space-x-2 mb-4 pb-4 border-b border-gray-100">
                  <span className="text-3xl font-bold text-[#DCE5D7] font-serif">{room.price}</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">{room.period}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Quick Specs */}
                <div className="grid grid-cols-3 gap-3 p-3 rounded-2xl bg-[#F8F8F8] border border-gray-100 mb-6 text-xs text-gray-700">
                  <div className="flex flex-col items-center text-center">
                    <FaRulerCombined className="text-[#5E7B52] text-base mb-1" />
                    <span className="font-semibold">{room.size}</span>
                    <span className="text-[10px] text-gray-400 uppercase">Space</span>
                  </div>
                  <div className="flex flex-col items-center text-center border-x border-gray-200">
                    <FaUsers className="text-[#5E7B52] text-base mb-1" />
                    <span className="font-semibold">{room.capacity}</span>
                    <span className="text-[10px] text-gray-400 uppercase">Guests</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <FaBed className="text-[#5E7B52] text-base mb-1" />
                    <span className="font-semibold">{room.bed}</span>
                    <span className="text-[10px] text-gray-400 uppercase">Bedding</span>
                  </div>
                </div>

                {/* Amenities List */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#5E7B52] mb-3">
                    Villa Highlights & Inclusions
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                    {room.amenities.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <FaCheckCircle className="text-[#DCE5D7] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${resortInfo.phone}`}
                  className="flex-1 py-3 px-4 rounded-full bg-[#5E7B52] text-[#DCE5D7] font-bold text-xs uppercase tracking-widest text-center hover:bg-[#DCE5D7] hover:text-[#5E7B52] transition-all flex items-center justify-center space-x-2 shadow-md"
                >
                  <FaPhoneAlt />
                  <span>Call to Reserve</span>
                </a>
                <button
                  onClick={onClose}
                  className="py-3 px-6 rounded-full border border-gray-300 text-gray-700 font-semibold text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RoomDetailModal;
