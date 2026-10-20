import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkedAlt,
  FaCrown,
  FaGlassMartiniAlt,
  FaUserCheck,
  FaGem,
  FaShieldAlt,
  FaArrowRight,
} from 'react-icons/fa';
import { whyChooseUsData } from '../data/resortData';

const iconMap = {
  FaMapMarkedAlt,
  FaCrown,
  FaGlassMartiniAlt,
  FaUserCheck,
  FaGem,
  FaShieldAlt,
};

/* Accent colors cycling per card — adapted for white bg */
const accentPalette = [
  { pill: 'bg-emerald-100 text-emerald-600', glow: 'rgba(52,211,153,0.12)',  border: '#34d399' },
  { pill: 'bg-lime-100 text-lime-600',       glow: 'rgba(132,204,22,0.12)',  border: '#84cc16' },
  { pill: 'bg-teal-100 text-teal-600',       glow: 'rgba(20,184,166,0.12)',  border: '#14b8a6' },
  { pill: 'bg-green-100 text-green-600',     glow: 'rgba(34,197,94,0.12)',   border: '#22c55e' },
  { pill: 'bg-cyan-100 text-cyan-600',       glow: 'rgba(6,182,212,0.10)',   border: '#06b6d4' },
  { pill: 'bg-emerald-100 text-emerald-500', glow: 'rgba(16,185,129,0.12)',  border: '#10b981' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const WhyChooseUs = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-32 overflow-hidden bg-white"
    >
      {/* ── Soft ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #dcfce7 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #d1fae5 0%, transparent 70%)', filter: 'blur(100px)' }} />
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #ecfccb 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* ── Fine dot-grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #5E7B52 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: '0.04',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center space-x-3 mb-5"
          >
            <span className="w-8 h-[1px] bg-[#5E7B52]/50" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-[#5E7B52] font-semibold">
              ROOTED IN NATURE
            </span>
            <span className="w-8 h-[1px] bg-[#5E7B52]/50" />
            <span className="w-8 h-[1px] bg-[#5E7B52]/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1a2e1a] leading-tight mb-5"
          >
            Why Choose{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(90deg, #3E5C35 0%, #5E7B52 50%, #4a7c3f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              MAA Resort
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-500 font-light leading-relaxed"
          >
            Set between lush green farmlands and serene mountain ranges, MAA Resort offers a one-of-a-kind retreat where nature is your closest neighbour.
          </motion.p>
        </div>

        {/* ── Feature Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {whyChooseUsData.map((item, index) => {
            const IconComp = iconMap[item.icon] || FaCrown;
            const accent = accentPalette[index % accentPalette.length];
            const isHovered = hovered === index;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative rounded-[24px] p-6 sm:p-7 cursor-default overflow-hidden transition-transform duration-300"
                style={{
                  background: isHovered ? '#f0faf4' : '#ffffff',
                  border: isHovered
                    ? `1px solid ${accent.border}60`
                    : '1px solid #e8f0e4',
                  boxShadow: isHovered
                    ? `0 0 32px ${accent.glow}, 0 16px 40px rgba(94,123,82,0.08)`
                    : '0 2px 16px rgba(94,123,82,0.06)',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                }}
              >
                {/* Corner glow when hovered */}
                {isHovered && (
                  <div
                    className="absolute -top-12 -right-12 w-36 h-36 rounded-full pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${accent.glow.replace('0.18', '0.4')} 0%, transparent 70%)`,
                      filter: 'blur(20px)',
                    }}
                  />
                )}

                {/* Serial number — editorial accent */}
                <div className="absolute top-5 right-6 font-mono text-[11px] font-bold text-[#5E7B52]/20 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon pill */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5 text-xl transition-all duration-300 ${accent.pill}`}
                  style={{ boxShadow: isHovered ? `0 0 20px ${accent.glow}` : 'none' }}
                >
                  <IconComp />
                </div>

                {/* Title */}
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#2E4723] leading-snug mb-2.5">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-xs sm:text-[13px] text-gray-500 font-light leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Subtle bottom divider line that grows on hover */}
                <div
                  className="h-[1.5px] rounded-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${accent.border}, transparent)`,
                    width: isHovered ? '60%' : '28%',
                    opacity: isHovered ? 0.7 : 0.25,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-[28px] px-8 py-7 border border-[#DCE5D7]"
          style={{ background: 'linear-gradient(135deg, #f0faf4 0%, #e8f5e2 100%)' }}
        >
          <div>
            <p className="font-serif text-xl sm:text-2xl font-bold text-[#2E4723] leading-tight mb-1">
              Ready to experience it yourself?
            </p>
            <p className="text-sm text-gray-500 font-light">
              Book your stay and discover why guests return every season.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:gap-4 hover:shadow-[0_8px_24px_rgba(94,123,82,0.35)]"
            style={{ background: 'linear-gradient(90deg, #5E7B52 0%, #3E5C35 100%)' }}
          >
            <span>Plan Your Visit</span>
            <FaArrowRight className="text-xs" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
