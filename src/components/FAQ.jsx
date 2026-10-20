import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaLeaf } from 'react-icons/fa';
import { faqData } from '../data/resortData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAFAF8] relative overflow-hidden">

      {/* Decorative ambient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#5E7B52]/5 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-[#DCE5D7]/30 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="w-8 h-[1.5px] bg-[#5E7B52]/50" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#5E7B52] font-semibold">
              GUEST INFORMATION
            </span>
            <span className="w-8 h-[1.5px] bg-[#5E7B52]/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#2E4723] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
            Everything you need to know about stay arrangements, dining policies, airport transfers, and bespoke services.
          </p>
        </div>

        {/* ── Split Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 lg:gap-16 items-start">

          {/* ── Left Decorative Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
            className="hidden lg:flex flex-col justify-between h-full"
          >
            {/* Card */}
            <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[#3E5C35] via-[#4A6B3C] to-[#2C4223] p-8 text-white shadow-[0_24px_60px_rgba(62,92,53,0.30)]">
              {/* Grain texture */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
              />

              {/* Leaf icon */}
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                <FaLeaf className="text-[#A8C499] text-xl" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white leading-snug mb-4">
                Still have a question?
              </h3>
              <p className="text-sm text-[#B8CEAF] font-light leading-relaxed mb-8">
                Our 24/7 concierge team is always here to help you with reservations, special occasions, or any personal request.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href="tel:+919611225842"
                  className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full bg-white text-[#3E5C35] text-xs font-bold uppercase tracking-widest hover:bg-[#EDF3EB] transition-colors shadow-sm"
                >
                  Call Concierge
                </a>
                <a
                  href="https://wa.me/919611225842?text=Hello%20MAA%20Resort%2C%20I%20have%20a%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />
            </div>

            {/* Stats strip */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { value: '24/7', label: 'Concierge' },
                { value: '99%', label: 'Satisfaction' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm text-center"
                >
                  <p className="font-serif text-2xl font-bold text-[#3E5C35]">{s.value}</p>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Accordion ── */}
          <div className="space-y-3.5">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#5E7B52]/30 shadow-[0_8px_30px_rgba(94,123,82,0.10)]'
                      : 'bg-white border-gray-150 hover:border-[#5E7B52]/20 hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      {/* Number badge */}
                      <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#3E5C35] text-white'
                          : 'bg-[#EDF3EB] text-[#3E5C35]'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`font-serif text-base sm:text-[17px] font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-[#2E4723]' : 'text-[#2B2B2B]'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    {/* Icon toggle */}
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#3E5C35] text-white'
                        : 'bg-[#EDF3EB] text-[#5E7B52] group-hover:bg-[#DCE5D7]'
                    }`}>
                      {isOpen ? <FaMinus className="text-[10px]" /> : <FaPlus className="text-[10px]" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1">
                          <div className="ml-12 pl-0 border-l-2 border-[#DCE5D7] pl-5">
                            <p className="text-sm text-gray-500 font-light leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* Mobile CTA strip */}
            <div className="lg:hidden mt-6 p-6 rounded-2xl bg-gradient-to-r from-[#3E5C35] to-[#4A6B3C] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-serif text-lg font-bold">Still have a question?</p>
                <p className="text-xs text-[#B8CEAF] mt-0.5">Our concierge is available 24/7</p>
              </div>
              <a
                href="tel:+919611225842"
                className="shrink-0 px-6 py-2.5 rounded-full bg-white text-[#3E5C35] text-xs font-bold uppercase tracking-widest hover:bg-[#EDF3EB] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
