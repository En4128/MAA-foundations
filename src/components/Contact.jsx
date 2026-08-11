import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaCompass,
} from 'react-icons/fa';
import { resortInfo } from '../data/resortData';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="w-8 h-[2px] bg-[#5E7B52]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5E7B52] font-bold">
              GET IN TOUCH
            </span>
            <span className="w-8 h-[2px] bg-[#5E7B52]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E5C35] leading-tight mb-4">
            Connect With Our Concierge
          </h2>
          <p className="text-base text-gray-600 font-light leading-relaxed">
            Our dedicated 24/7 VIP concierge desk is available to assist with room recommendations, wedding inquiries, and custom itineraries.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards & Instant Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-[#F8F8F8] p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-luxury flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#3E5C35] mb-6 border-b border-gray-200 pb-4">
                Resort Direct Information
              </h3>

              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#5E7B52] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                      Sanctuary Address
                    </h4>
                    <p className="text-sm font-medium text-[#2B2B2B] leading-relaxed">
                      {resortInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#5E7B52] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                      24/7 Concierge Hotline
                    </h4>
                    <p className="text-sm font-bold text-[#3E5C35] leading-relaxed">
                      {resortInfo.displayPhone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#5E7B52] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                      Email Inquiries
                    </h4>
                    <p className="text-sm font-medium text-[#2B2B2B] leading-relaxed">
                      {resortInfo.email}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#5E7B52] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                      Reception Hours
                    </h4>
                    <p className="text-sm font-medium text-[#2B2B2B] leading-relaxed">
                      {resortInfo.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${resortInfo.whatsappNumber.replace(/\D/g, '')}?text=Hello%20MAA%20Resort%20Concierge,%20I%20would%20like%20to%20inquire%20about%20a%20stay.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp Instant</span>
              </a>

              {/* Call Now Button */}
              <a
                href={`tel:${resortInfo.phone}`}
                className="py-3.5 px-6 rounded-full bg-[#5E7B52] hover:bg-[#3E5C35] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <FaPhoneAlt className="text-sm" />
                <span>Call Concierge</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 min-h-[400px] rounded-3xl overflow-hidden shadow-luxury border-4 border-white relative bg-gray-100"
          >
            <iframe
              title="MAA Resort Location Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.2318121652374!2d79.15137920000001!3d12.8282916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s12%C2%B049'41.9%22N+79%C2%B009'14.2%22E!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[450px] border-0 opacity-95"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-gray-100 flex items-center space-x-3">
              <FaCompass className="text-[#5E7B52] text-xl" />
              <div>
                <p className="text-xs font-bold text-[#5E7B52] uppercase tracking-wider">Location</p>
                <p className="text-[11px] text-gray-500 font-mono">12.8283° N, 79.1540° E</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
