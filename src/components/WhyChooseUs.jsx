import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkedAlt,
  FaCrown,
  FaGlassMartiniAlt,
  FaUserCheck,
  FaGem,
  FaShieldAlt,
} from 'react-icons/fa';
import { whyChooseUsData } from '../data/resortData';

const iconMap = {
  FaMapMarkedAlt: FaMapMarkedAlt,
  FaCrown: FaCrown,
  FaGlassMartiniAlt: FaGlassMartiniAlt,
  FaUserCheck: FaUserCheck,
  FaGem: FaGem,
  FaShieldAlt: FaShieldAlt,
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 mb-2.5">
            <span className="w-6 h-[2px] bg-[#5E7B52]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#5E7B52] font-semibold">
              ROOTED IN NATURE
            </span>
            <span className="w-6 h-[2px] bg-[#5E7B52]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#5E7B52] leading-tight mb-3">
            Why Choose MAA Foundations
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Set between lush green farmlands and serene mountain ranges, MAA Foundations offers a one-of-a-kind retreat where nature is your closest neighbour.
          </p>
        </div>

        {/* Small & Simple Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {whyChooseUsData.map((item, index) => {
            const IconComp = iconMap[item.icon] || FaCrown;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#5E7B52]/30 transition-all duration-300 group flex items-start space-x-4"
              >
                {/* Compact Icon Box */}
                <div className="w-11 h-11 rounded-xl bg-[#5E7B52]/10 text-[#5E7B52] flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-[#5E7B52] group-hover:text-white transition-all duration-300 shadow-xs">
                  <IconComp />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-base font-bold text-[#5E7B52] mb-1 leading-snug group-hover:text-[#4a6340] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

