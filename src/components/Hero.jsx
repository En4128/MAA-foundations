import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaChevronDown, FaStar } from 'react-icons/fa';
import { resortInfo } from '../data/resortData';

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{ minHeight: '100vh' }}
      className="relative w-full flex items-center justify-center overflow-hidden"
    >
      {/* ── Background: Video with image fallback ── */}
      <div className="absolute inset-0 z-0">
        {/* Autoplay luxury resort video – muted + loop required for autoplay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.04)',
          }}
        >
          {/* Primary: high-quality luxury resort aerial / pool video from Pexels */}
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
          {/* Fallback source */}
          <source
            src="https://videos.pexels.com/video-files/1134166/1134166-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Luxury Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(44,36,22,0.90) 0%, rgba(196,149,106,0.50) 45%, rgba(0,0,0,0.42) 100%)'
          }}
        />
      </div>

      {/* ── Hero Content ── */}
      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center"
        style={{ paddingTop: '80px', paddingBottom: '100px' }}
      >
        {/* 5-Star Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.10)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(232,213,181,0.4)',
            marginBottom: '28px',
          }}
        >
          <div style={{ display: 'flex', gap: '3px', color: '#E8D5B5' }}>
            {[...Array(5)].map((_, i) => <FaStar key={i} style={{ fontSize: '11px' }} />)}
          </div>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', color: '#FEFCF8', borderLeft: '1px solid rgba(255,255,255,0.25)', paddingLeft: '10px', textTransform: 'uppercase' }}>
            5-Star World-Class Resort & Spa
          </span>
        </motion.div>

        {/* Resort Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: '16px',
            letterSpacing: '-0.01em',
            textShadow: '0 4px 24px rgba(0,0,0,0.4)',
          }}
        >
          {resortInfo.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: '#E8D5B5',
            letterSpacing: '0.05em',
            fontStyle: 'italic',
            marginBottom: '22px',
          }}
        >
          {resortInfo.tagline}
        </motion.p>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{
            maxWidth: '640px',
            fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
            color: 'rgba(230,230,230,0.92)',
            fontWeight: 300,
            lineHeight: 1.75,
            marginBottom: '44px',
          }}
        >
          {resortInfo.shortDesc}
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}
        >
          <button
            onClick={() => handleScrollTo('about')}
            style={{
              padding: '16px 38px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #E8D5B5 0%, #F7F1E8 50%, #C4956A 100%)',
              color: '#C4956A',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 30px -5px rgba(232,213,181,0.45)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px -5px rgba(232,213,181,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(232,213,181,0.45)'; }}
          >
            <span>Explore Resort</span>
            <FaChevronDown style={{ fontSize: '10px' }} />
          </button>

          <a
            href={`tel:${resortInfo.phone}`}
            style={{
              padding: '16px 38px',
              borderRadius: '9999px',
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(255,255,255,0.35)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#C4956A'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)'; e.currentTarget.style.color = '#ffffff'; }}
          >
            <FaPhoneAlt style={{ fontSize: '11px', color: '#E8D5B5' }} />
            <span>Call Now</span>
          </a>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        onClick={() => handleScrollTo('about')}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(200,200,200,0.8)' }}>
          Scroll Down
        </span>
        <div style={{
          width: '24px',
          height: '40px',
          borderRadius: '9999px',
          border: '2px solid rgba(255,255,255,0.3)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '4px',
        }}>
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '6px', height: '10px', borderRadius: '9999px', background: '#E8D5B5' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
