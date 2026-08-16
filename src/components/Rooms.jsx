import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaBed, FaRulerCombined, FaUsers, FaArrowRight, FaLeaf } from 'react-icons/fa';
import { roomsData } from '../data/resortData';
import RoomDetailModal from './RoomDetailModal';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section id="rooms" className="py-16 sm:py-24 bg-[#F7F8F4] relative overflow-hidden">
      {/* Decorative Natural Ambient Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5E7B52]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#DCE5D7]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="w-8 h-[1px] bg-[#5E7B52]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#5E7B52] font-semibold flex items-center gap-1.5">
              <FaLeaf className="text-[10px]" /> ACCOMMODATIONS & STAY
            </span>
            <span className="w-8 h-[1px] bg-[#5E7B52]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3B27] leading-tight mb-4">
            Sanctuaries Rooted in Nature
          </h2>
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            Elevated suites and private villas nestled between lush organic farmlands and scenic mountain peaks.
          </p>
        </div>

        {/* Unique Organic Grid (Horizontal Capsule Cards) */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10"
        >
          <AnimatePresence>
            {roomsData.map((room, index) => (
              <motion.div
                layout
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row items-center sm:items-stretch gap-6 p-4 rounded-[2.5rem] hover:bg-white/60 transition-all duration-500 border border-transparent hover:border-[#E2E8DF] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                {/* Arch / Capsule Image */}
                <div className="relative w-40 h-56 sm:w-48 sm:h-auto flex-shrink-0 overflow-hidden rounded-full shadow-sm group-hover:shadow-md transition-all duration-500">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle overlay gradient to ensure text readability if we put text on it, but here it's just aesthetic */}
                  <div className="absolute inset-0 bg-[#5E7B52]/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
                  
                  {/* Floating category tag on image */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-[#5E7B52] text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full whitespace-nowrap shadow-xs">
                    {room.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col justify-center py-2 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[10px]" />
                    ))}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D3B27] group-hover:text-[#5E7B52] transition-colors leading-tight mb-2">
                    {room.name}
                  </h3>
                  
                  <div className="font-serif text-lg text-[#5E7B52] font-semibold mb-3">
                    {room.price} <span className="text-xs text-gray-500 font-sans font-normal lowercase tracking-wide">/ night</span>
                  </div>

                  <p className="text-xs text-gray-600 font-light line-clamp-2 leading-relaxed mb-4 max-w-sm">
                    {room.description}
                  </p>

                  {/* Minimalist Specs */}
                  <div className="flex items-center justify-center sm:justify-start gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-5">
                    <div className="flex items-center gap-1.5">
                      <FaRulerCombined className="text-[#5E7B52]" />
                      <span>{room.size}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[#DCE5D7]" />
                    <div className="flex items-center gap-1.5">
                      <FaUsers className="text-[#5E7B52]" />
                      <span>{room.capacity}</span>
                    </div>
                  </div>

                  {/* Elegant CTA */}
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="inline-flex items-center justify-center sm:justify-start gap-2 text-[#5E7B52] font-semibold text-xs uppercase tracking-widest group-hover:text-[#2D3B27] transition-colors"
                  >
                    <span>View Details</span>
                    <span className="w-8 h-[1px] bg-[#5E7B52] group-hover:w-12 group-hover:bg-[#2D3B27] transition-all duration-300 relative">
                      <FaArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-[8px]" />
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <RoomDetailModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </section>
  );
};

export default Rooms;

