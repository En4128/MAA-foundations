import React from 'react';
import { motion } from 'framer-motion';
import { FaGlassCheers, FaChevronRight } from 'react-icons/fa';
import { eventsData } from '../data/resortData';

const Events = () => {
  return (
    <section id="events" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="w-8 h-[2px] bg-[#E8D5B5]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8D5B5] font-bold">
              CELEBRATE IN ELEGANCE
            </span>
            <span className="w-8 h-[2px] bg-[#E8D5B5]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#C4956A] leading-tight mb-4">
            Banquet & Royal Events
          </h2>
          <p className="text-base text-gray-600 font-light leading-relaxed">
            From fairy-tale oceanfront wedding ceremonies to high-level executive summits, our grand banquet halls and open lawns create iconic memories.
          </p>
        </div>

        {/* Event Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#F8F8F8] rounded-3xl overflow-hidden border border-gray-100 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col sm:flex-row group"
            >
              {/* Event Image */}
              <div className="sm:w-1/2 relative h-64 sm:h-auto overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#C4956A] text-[#E8D5B5] text-xs font-semibold uppercase tracking-wider shadow">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Event Info */}
              <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#E8D5B5]/20 text-[#C4956A] flex items-center justify-center text-lg mb-4">
                    <FaGlassCheers />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#C4956A] mb-3 group-hover:text-[#E8D5B5] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#C4956A] hover:text-[#E8D5B5] transition-colors"
                >
                  <span>Plan Your Event</span>
                  <FaChevronRight className="text-[10px] transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
