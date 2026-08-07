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
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="w-8 h-[2px] bg-[#E8D5B5]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8D5B5] font-bold">
              DISTINCTIVE PRIVILEGES
            </span>
            <span className="w-8 h-[2px] bg-[#E8D5B5]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#C4956A] leading-tight mb-4">
            Why Choose MAA Foundations
          </h2>
          <p className="text-base text-gray-600 font-light leading-relaxed">
            Discover what sets our award-winning 5-star haven apart as one of the world's most sought-after luxury destinations.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => {
            const IconComp = iconMap[item.icon] || FaCrown;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F8F8F8] p-8 rounded-3xl border border-gray-100 shadow-luxury hover:shadow-luxury-hover hover:border-[#E8D5B5]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Gold Badge Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#C4956A] text-[#E8D5B5] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#E8D5B5] group-hover:text-[#C4956A] transition-all duration-300 shadow-md group-hover:scale-110">
                    <IconComp />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-[#C4956A] mb-3 group-hover:text-[#E8D5B5] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs text-[#C4956A] font-semibold">
                  <span>Standard of Excellence</span>
                  <span className="w-2 h-2 rounded-full bg-[#E8D5B5]" />
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
