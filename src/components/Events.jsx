import React from 'react';
import { motion } from 'framer-motion';
import { FaGlassCheers, FaCocktail, FaBriefcase, FaUsers, FaChevronRight } from 'react-icons/fa';
import { eventsData } from '../data/resortData';

const eventIcons = {
  FaGlassCheers: FaGlassCheers,
  FaCocktail: FaCocktail,
  FaBriefcase: FaBriefcase,
  FaUsers: FaUsers,
};

const Events = () => {
  return (
    <section id="events" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-3">
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#5E7B52]/50" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5E7B52] font-semibold">
              OUR EVENT HALLS
            </span>
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#5E7B52]/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#446238] tracking-tight leading-tight mb-4">
            Halls for Every Occasion
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            Whether it's a birthday party, office meeting, family reunion, or a small get-together — we have a hall that fits your event perfectly.
          </p>
        </div>

        {/* Event Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {eventsData.map((event, index) => {
            const IconComponent = eventIcons[event.icon] || FaGlassCheers;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(94,123,82,0.12)] transition-all duration-500 flex flex-col sm:flex-row group"
              >
                {/* Event Image */}
                <div className="sm:w-1/2 relative min-h-[240px] sm:min-h-[280px] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full bg-[#3E5C35]/85 backdrop-blur-md text-[#EDF4EB] text-[10.5px] font-bold uppercase tracking-[0.16em] shadow-sm">
                      {event.badge || event.category}
                    </span>
                  </div>
                </div>

                {/* Event Info */}
                <div className="sm:w-1/2 p-6 sm:p-7 md:p-8 flex flex-col justify-between bg-white">
                  <div>
                    {/* Event Icon Badge */}
                    <div className="w-9 h-9 rounded-full bg-[#EDF3EB] text-[#4A693D] flex items-center justify-center text-sm mb-4 shadow-xs">
                      <IconComponent />
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#446238] leading-snug mb-3 group-hover:text-[#2E4723] transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-xs sm:text-[13.5px] text-gray-500 font-light leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#4A693D] group-hover:text-[#2E4723] transition-colors mt-auto group/btn"
                  >
                    <span>PLAN YOUR EVENT</span>
                    <FaChevronRight className="text-[10px] transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Events;

