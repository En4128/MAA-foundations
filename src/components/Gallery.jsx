import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryData } from '../data/resortData';
import GalleryModal from './GalleryModal';

/* ─────────────────────────────────────────────────────────────
   Card config: varying heights + bottom offsets for organic look
───────────────────────────────────────────────────────────── */
const CARD_CONFIGS = [
  { height: 380, offsetY: 24 },
  { height: 400, offsetY: 8  },
  { height: 460, offsetY: 0  },
  { height: 380, offsetY: 16 },
  { height: 420, offsetY: 4  },
  { height: 360, offsetY: 30 },
];

/* Duplicate the array so the marquee loops seamlessly */
const LOOPED = [...galleryData, ...galleryData];

/* CSS keyframe injected once */
const STYLE = `
@keyframes gallery-marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.gallery-track {
  animation: gallery-marquee 28s linear infinite;
  will-change: transform;
}
.gallery-track:hover {
  animation-play-state: paused;
}
`;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #B9C3B5 0%, #C8D0C3 40%, #BFC8BA 100%)' }}
    >
      {/* inject keyframe once */}
      <style>{STYLE}</style>

      {/* subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.035,
        }}
      />

      {/* ── Section Heading ── */}
      <div className="pt-14 pb-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.6rem, 5vw, 4rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            letterSpacing: '0.06em',
            color: '#2E5E4A',
            lineHeight: 1,
          }}
        >
          Gallery
        </motion.h2>

        {/* thin decorative rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mx-auto mt-3 origin-center"
          style={{ width: 44, height: 1, background: '#2E5E4A', opacity: 0.50 }}
        />
      </div>

      {/* ── Infinite Marquee Strip ── */}
      {/* outer clip — edge fade */}
      <div
        className="relative z-10 overflow-hidden"
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '3.5rem',
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        }}
      >
        {/* scrolling track — contains 2× the cards */}
        <div
          className="gallery-track flex items-end"
          style={{ gap: '1rem', width: 'max-content' }}
        >
          {LOOPED.map((item, idx) => {
            const cfg = CARD_CONFIGS[idx % CARD_CONFIGS.length];
            return (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => setSelectedImage(item)}
                className="group relative flex-shrink-0"
                style={{
                  width: 'clamp(170px, 18vw, 230px)',
                  height: cfg.height,
                  marginBottom: cfg.offsetY,
                  borderRadius: 14,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 14px 44px rgba(20,40,20,0.22), 0 2px 10px rgba(20,40,20,0.12)',
                  transition: 'transform 0.32s ease, box-shadow 0.32s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.035) translateY(-7px)';
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(20,40,20,0.30)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow = '0 14px 44px rgba(20,40,20,0.22), 0 2px 10px rgba(20,40,20,0.12)';
                }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className="w-full h-full object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-110"
                />

                {/* Bottom gradient */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 opacity-60 group-hover:opacity-90"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(15,28,15,0.80) 0%, rgba(15,28,15,0.12) 55%, transparent 100%)',
                  }}
                />

                {/* Category pill */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span
                    className="text-white bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full uppercase"
                    style={{ fontSize: 9, letterSpacing: '0.18em', fontWeight: 600 }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      color: '#fff',
                      textShadow: '0 1px 6px rgba(0,0,0,0.55)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      fontSize: '0.7rem',
                      color: 'rgba(255,255,255,0.75)',
                      lineHeight: 1.45,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <GalleryModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        item={selectedImage}
        items={galleryData}
        onSelect={setSelectedImage}
      />
    </section>
  );
};

export default Gallery;


