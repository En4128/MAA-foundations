import React from 'react';
import { motion } from 'framer-motion';
import {
  FaWifi,
  FaSwimmingPool,
  FaCar,
  FaUtensils,
  FaTree,
  FaChild,
  FaSnowflake,
  FaConciergeBell,
} from 'react-icons/fa';
import { amenitiesData } from '../data/resortData';

const iconMap = {
  FaWifi: FaWifi,
  FaSwimmingPool: FaSwimmingPool,
  FaCar: FaCar,
  FaUtensils: FaUtensils,
  FaTree: FaTree,
  FaChild: FaChild,
  FaSnowflake: FaSnowflake,
  FaConciergeBell: FaConciergeBell,
};

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 bg-[#F8F8F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="w-8 h-[2px] bg-[#E8D5B5]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8D5B5] font-bold">
              UNRIVALLED COMFORTS
            </span>
            <span className="w-8 h-[2px] bg-[#E8D5B5]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#C4956A] leading-tight mb-4">
            5-Star Resort Amenities
          </h2>
          <p className="text-base text-gray-600 font-light leading-relaxed">
            Every convenience designed for complete tranquility. Experience bespoke services tailored to elevate your retreat into an extraordinary experience.
          </p>
        </div>

        {/* 8 Premium Icon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesData.map((item, index) => {
            const IconComp = iconMap[item.icon] || FaConciergeBell;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card p-8 rounded-3xl border border-white/80 shadow-luxury hover:shadow-luxury-hover hover:border-[#E8D5B5]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-14 h-14 rounded-2xl bg-[#C4956A]/10 text-[#C4956A] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#C4956A] group-hover:text-[#E8D5B5] transition-all duration-300 shadow-md group-hover:scale-110">
                    <IconComp />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-[#C4956A] mb-3 group-hover:text-[#E8D5B5] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Decorative Line */}
                <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center justify-between text-[11px] text-[#E8D5B5] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Included Privilege</span>
                  <span>✓</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Amenities;
