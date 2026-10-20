import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaStar,
  FaBed,
  FaRulerCombined,
  FaUsers,
  FaArrowRight,
  FaLeaf,
  FaBuilding,
  FaMountain,
} from 'react-icons/fa';
import { roomsData } from '../data/resortData';
import RoomDetailModal from './RoomDetailModal';

const floorTabs = [
  { id: 'all', label: 'All Rooms', count: 7, icon: FaLeaf },
  { id: 'ground', label: 'Ground Floor', count: 4, icon: FaBuilding },
  { id: 'first', label: '1st Floor', count: 3, icon: FaMountain },
];

const Rooms = () => {
  const [selectedFloor, setSelectedFloor] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState(null);

  const filteredRooms = selectedFloor === 'all'
    ? roomsData
    : roomsData.filter((r) => r.floorId === selectedFloor);

  return (
    <section id="rooms" className="py-12 sm:py-16 bg-[#F7F8F4] relative overflow-hidden">
      {/* Decorative Ambient Blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#5E7B52]/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DCE5D7]/40 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 mb-2">
            <span className="w-6 h-[1px] bg-[#5E7B52]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#5E7B52] font-semibold flex items-center gap-1.5">
              <FaLeaf className="text-[10px]" /> 7 BOUTIQUE ROOMS &amp; SUITES
            </span>
            <span className="w-6 h-[1px] bg-[#5E7B52]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D3B27] leading-tight mb-2">
            Sanctuaries Rooted in Nature
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            7 exclusive rooms across 2 levels —{' '}
            <span className="font-medium text-[#2D3B27]">4 on Ground Floor</span> and{' '}
            <span className="font-medium text-[#2D3B27]">3 on 1st Floor</span>.
          </p>
        </div>

        {/* Floor Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-white/90 backdrop-blur-md rounded-full border border-[#E4EAE0] shadow-sm gap-1">
            {floorTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedFloor === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFloor(tab.id)}
                  className={`relative flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-white shadow-md' : 'text-gray-600 hover:text-[#2D3B27]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFloorTab"
                      className="absolute inset-0 bg-[#5E7B52] rounded-full"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className={`text-[11px] sm:text-xs ${isActive ? 'text-white' : 'text-[#5E7B52]'}`} />
                    <span>{tab.label}</span>
                    <span className={`text-[10px] px-1.5 rounded-full font-bold transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#EEF2EC] text-[#5E7B52]'
                    }`}>
                      {tab.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal Room Cards */}
        <motion.div layout className="flex flex-col gap-5">
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room, index) => (
              <motion.div
                layout
                key={room.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E6EDE2] shadow-sm hover:shadow-xl hover:border-[#5E7B52]/30 transition-all duration-500 flex flex-col sm:flex-row"
              >
                {/* Image Panel */}
                <div className="relative sm:w-[38%] min-h-[220px] sm:min-h-0 overflow-hidden shrink-0">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Room number + floor */}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="bg-[#2D3B27]/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">
                      Room {room.roomNumber}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm text-[#5E7B52] text-[10px] font-semibold px-2.5 py-1 rounded-lg">
                      {room.floor}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/55 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <FaStar className="text-amber-400 text-[10px]" />
                    <span className="text-white text-[11px] font-semibold">{room.rating}</span>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-[#2D3B27] text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                      {room.category}
                    </span>
                  </div>
                </div>

                {/* Info Panel */}
                <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D3B27] group-hover:text-[#5E7B52] transition-colors leading-snug mb-3">
                      {room.name}
                    </h3>

                    {/* Specs as pills */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="flex items-center gap-1.5 bg-[#F2F6F0] border border-[#E4EBE0] text-[#2D3B27] text-xs font-medium px-3 py-1.5 rounded-full">
                        <FaUsers className="text-[#5E7B52] text-[11px]" />
                        {room.capacity}
                      </span>
                      <span className="flex items-center gap-1.5 bg-[#F2F6F0] border border-[#E4EBE0] text-[#2D3B27] text-xs font-medium px-3 py-1.5 rounded-full">
                        <FaBed className="text-[#5E7B52] text-[11px]" />
                        {room.bed}
                      </span>
                      <span className="flex items-center gap-1.5 bg-[#F2F6F0] border border-[#E4EBE0] text-[#2D3B27] text-xs font-medium px-3 py-1.5 rounded-full">
                        <FaRulerCombined className="text-[#5E7B52] text-[11px]" />
                        {room.size}
                      </span>
                    </div>

                    {/* Amenities preview */}
                    {room.amenities && room.amenities.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {room.amenities.slice(0, 4).map((a, i) => (
                          <span key={i} className="text-[10px] text-[#5E7B52] bg-[#EBF1E8] px-2 py-0.5 rounded-full font-medium">
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-5 pt-4 border-t border-[#EEF1EC] flex items-center justify-between">
                    <div>
                      <div className="font-serif text-2xl font-bold text-[#2D3B27] leading-none">
                        {room.price}
                      </div>
                      <span className="text-[11px] text-gray-400 font-sans">per night</span>
                    </div>
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5E7B52] hover:bg-[#4A6340] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 group/btn"
                    >
                      <span>View Details</span>
                      <FaArrowRight className="text-[11px] group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal */}
      <RoomDetailModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </section>
  );
};

export default Rooms;
