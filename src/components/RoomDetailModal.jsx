import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaStar, 
  FaBed, 
  FaRulerCombined, 
  FaUsers, 
  FaCheckCircle, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaBuilding, 
  FaMountain 
} from 'react-icons/fa';
import { resortInfo } from '../data/resortData';

const RoomDetailModal = ({ room, onClose }) => {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (room) {
      setActiveImage(room.image);
    }
  }, [room]);

  if (!room) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello MAA Resort, I am inquiring about booking ${room.name} (${room.floor} - Room ${room.roomNumber}) at ${room.price}/night. Please share availability details.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative bg-white w-full max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 my-4"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 hover:bg-[#5E7B52] text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <FaTimes className="text-sm" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[88vh] overflow-y-auto">
            {/* Image Column */}
            <div className="md:col-span-5 relative bg-gray-900 flex flex-col">
              <div className="relative h-56 md:h-full min-h-[220px]">
                <img
                  src={activeImage || room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-[#2D3B27]/90 text-white font-bold text-[11px] shadow">
                    Room {room.roomNumber}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/90 text-[#5E7B52] font-semibold text-[11px] shadow">
                    {room.floor}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#5E7B52] text-white font-semibold text-[10px] uppercase tracking-wider shadow">
                    {room.category}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails (if available) */}
              {room.gallery && room.gallery.length > 1 && (
                <div className="p-2 bg-gray-900/90 flex gap-2 overflow-x-auto">
                  {room.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-12 h-10 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                        (activeImage || room.image) === img ? 'border-[#5E7B52] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between bg-white text-[#2B2B2B]">
              <div>
                {/* Rating & Floor details */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[11px]" />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-800 ml-1">{room.rating}</span>
                    <span className="text-[11px] text-gray-400">({room.reviewsCount} reviews)</span>
                  </div>
                  <span className="text-[11px] text-[#5E7B52] font-semibold flex items-center gap-1">
                    {room.floorId === 'ground' ? <FaBuilding className="text-[10px]" /> : <FaMountain className="text-[10px]" />}
                    {room.floor}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D3B27] mb-1 leading-tight">
                  {room.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3 pb-3 border-b border-gray-100">
                  <span className="text-2xl font-bold text-[#5E7B52] font-serif">{room.price}</span>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-sans">{room.period}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-4">
                  {room.description}
                </p>

                {/* Quick Specs Grid */}
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-[#F7F9F5] border border-[#E8EDE5] mb-4 text-xs text-gray-700">
                  <div className="flex flex-col items-center text-center">
                    <FaRulerCombined className="text-[#5E7B52] text-sm mb-0.5" />
                    <span className="font-bold text-[11px] text-[#2D3B27]">{room.size}</span>
                    <span className="text-[9px] text-gray-400 uppercase">Space</span>
                  </div>
                  <div className="flex flex-col items-center text-center border-x border-[#E0E7DC]">
                    <FaUsers className="text-[#5E7B52] text-sm mb-0.5" />
                    <span className="font-bold text-[11px] text-[#2D3B27]">{room.capacity}</span>
                    <span className="text-[9px] text-gray-400 uppercase">Guests</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <FaBed className="text-[#5E7B52] text-sm mb-0.5" />
                    <span className="font-bold text-[11px] text-[#2D3B27] truncate w-full">{room.bed}</span>
                    <span className="text-[9px] text-gray-400 uppercase">Bedding</span>
                  </div>
                </div>

                {/* Amenities List */}
                <div className="mb-4">
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#5E7B52] mb-2">
                    Room Inclusions & Amenities
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5 text-xs text-gray-600">
                    {room.amenities.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <FaCheckCircle className="text-[#5E7B52] text-[10px] shrink-0" />
                        <span className="text-[11px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row gap-2">
                <a
                  href={`https://wa.me/${resortInfo.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Book via WhatsApp</span>
                </a>
                <a
                  href={`tel:${resortInfo.phone}`}
                  className="py-2.5 px-4 rounded-xl bg-[#5E7B52] hover:bg-[#4D6643] text-white font-semibold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <FaPhoneAlt className="text-xs" />
                  <span>Call Us</span>
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RoomDetailModal;
