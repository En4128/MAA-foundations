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
  FaMountain 
} from 'react-icons/fa';
import { roomsData } from '../data/resortData';
import RoomDetailModal from './RoomDetailModal';

const floorTabs = [
  { id: 'all', label: 'All Rooms', count: 7, icon: FaLeaf },
  { id: 'ground', label: 'Ground Floor', count: 4, sub: '4 Rooms', icon: FaBuilding },
  { id: 'first', label: '1st Floor', count: 3, sub: '3 Rooms', icon: FaMountain },
];

const Rooms = () => {
  const [selectedFloor, setSelectedFloor] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState(null);

  const filteredRooms = selectedFloor === 'all'
    ? roomsData
    : roomsData.filter(r => r.floorId === selectedFloor);

  return (
    <section id="rooms" className="py-12 sm:py-16 bg-[#F7F8F4] relative overflow-hidden">
      {/* Decorative Ambient Blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#5E7B52]/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DCE5D7]/40 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header — Compact & Crisp */}
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
            7 exclusive rooms across 2 levels — <span className="font-medium text-[#2D3B27]">4 on Ground Floor</span> and <span className="font-medium text-[#2D3B27]">3 on 1st Floor</span>.
          </p>
        </div>

        {/* Floor Filter Tabs */}
        <div className="flex justify-center mb-7">
          <div className="inline-flex p-1 bg-white/90 backdrop-blur-md rounded-full border border-[#E4EAE0] shadow-sm">
            {floorTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedFloor === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFloor(tab.id)}
                  className={`relative flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'text-gray-600 hover:text-[#2D3B27]'
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
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#EEF2EC] text-[#5E7B52]'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Rooms Grid */}
        <motion.div
          layout
          className={`grid gap-4 sm:gap-5 ${
            selectedFloor === 'first'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room) => (
              <motion.div
                layout
                key={room.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8EDE5] hover:border-[#5E7B52]/40 flex flex-col justify-between"
              >
                {/* ── Image Block (Compact 16:10 ratio) ── */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                  {/* Top Badges: Room Number & Floor */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="bg-[#2D3B27]/85 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                      Room {room.roomNumber}
                    </span>
                    <span className="bg-white/90 backdrop-blur-md text-[#5E7B52] text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-sm">
                      {room.floor}
                    </span>
                  </div>

                  {/* Category Pill — Bottom Left */}
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="bg-white/95 backdrop-blur-md text-[#2D3B27] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                      {room.category}
                    </span>
                  </div>

                  {/* Rating Badge — Bottom Right */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded flex items-center gap-1 text-[10px] text-white">
                    <FaStar className="text-amber-400 text-[9px]" />
                    <span className="font-semibold">{room.rating}</span>
                  </div>
                </div>

                {/* ── Content Area (Small & Tight) ── */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Room Name */}
                    <h3 className="font-serif text-base font-bold text-[#2D3B27] group-hover:text-[#5E7B52] transition-colors leading-snug line-clamp-1 mb-2">
                      {room.name}
                    </h3>

                    {/* Quick Specs Chip Row */}
                    <div className="grid grid-cols-3 gap-1 text-[10px] text-gray-500 font-medium py-1.5 px-2 bg-[#F7F9F5] rounded-lg border border-[#EEF2EC] mb-3">
                      <div className="flex items-center gap-1 truncate" title={room.capacity}>
                        <FaUsers className="text-[#5E7B52] shrink-0 text-[10px]" />
                        <span className="truncate">{room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1 truncate" title={room.bed}>
                        <FaBed className="text-[#5E7B52] shrink-0 text-[10px]" />
                        <span className="truncate">{room.bed.split(' ')[0]} {room.bed.split(' ')[1] || ''}</span>
                      </div>
                      <div className="flex items-center gap-1 truncate justify-end" title={room.size}>
                        <FaRulerCombined className="text-[#5E7B52] shrink-0 text-[10px]" />
                        <span className="truncate">{room.size}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Action */}
                  <div className="pt-2.5 border-t border-[#EEF1EC] flex items-center justify-between">
                    <div>
                      <div className="font-serif text-base font-bold text-[#2D3B27] leading-none">
                        {room.price}
                      </div>
                      <span className="text-[10px] text-gray-400 font-sans font-normal">per night</span>
                    </div>

                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#5E7B52]/10 hover:bg-[#5E7B52] text-[#5E7B52] hover:text-white text-[11px] font-semibold transition-all duration-200"
                    >
                      <span>Details</span>
                      <FaArrowRight className="text-[8px]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>



      </div>

      {/* Modal Popup for Complete Room Details */}
      <RoomDetailModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </section>
  );
};

export default Rooms;
