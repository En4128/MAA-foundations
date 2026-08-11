import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaLeaf, FaArrowDown } from 'react-icons/fa';
import { resortInfo } from '../data/resortData';
import bgVideo from '../assets/BG-video.mp4';

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{ minHeight: '100vh' }}
      className="relative w-full flex items-end justify-start overflow-hidden"
    >
      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0">
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
          }}
        >
          <source src={bgVideo} type="video/mp4" />
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Natural soft gradient overlay — heavier at bottom, lighter at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(20,26,18,0.82) 0%, rgba(20,26,18,0.42) 45%, rgba(0,0,0,0.12) 100%)',
          }}
        />
        {/* Left side fade for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(20,26,18,0.55) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* ── Hero Content — left-aligned, bottom-anchored ── */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col"
        style={{ paddingBottom: 'clamp(60px, 10vh, 100px)', paddingTop: '120px' }}
      >
        {/* Nature pill badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 16px 7px 10px',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.10)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.18)',
            marginBottom: '26px',
            width: 'fit-content',
          }}
        >
          <span
            style={{
              width: '24px', height: '24px',
              borderRadius: '50%',
              background: 'rgba(94,123,82,0.85)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <FaLeaf style={{ fontSize: '10px', color: '#fff' }} />
          </span>
          <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.90)', textTransform: 'uppercase' }}>
            Where Nature Feels Like Home
          </span>
        </motion.div>

        {/* Resort Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.8rem, 7.5vw, 6rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.08,
            marginBottom: '14px',
            letterSpacing: '-0.01em',
            maxWidth: '720px',
          }}
        >
          {resortInfo.name}
        </motion.h1>

        {/* Tagline — clean and light */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(220,235,210,0.90)',
            letterSpacing: '0.02em',
            fontWeight: 300,
            marginBottom: '18px',
            maxWidth: '540px',
          }}
        >
          {resortInfo.tagline}
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          style={{
            width: '60px',
            height: '2px',
            background: 'rgba(120,180,100,0.60)',
            borderRadius: '2px',
            marginBottom: '20px',
            transformOrigin: 'left',
          }}
        />

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          style={{
            maxWidth: '500px',
            fontSize: 'clamp(0.82rem, 1.8vw, 0.97rem)',
            color: 'rgba(200,215,195,0.82)',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '40px',
          }}
        >
          {resortInfo.shortDesc}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.70 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}
        >
          {/* Primary — forest green */}
          <button
            onClick={() => handleScrollTo('about')}
            style={{
              padding: '14px 32px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #5E7B52 0%, #3E5C35 100%)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.06em',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              boxShadow: '0 6px 24px rgba(62,92,53,0.35)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(62,92,53,0.42)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(62,92,53,0.35)'; }}
          >
            <span>Explore Resort</span>
            <FaArrowDown style={{ fontSize: '11px', opacity: 0.85 }} />
          </button>

          {/* Secondary — ghost */}
          <a
            href={`tel:${resortInfo.phone}`}
            style={{
              padding: '14px 32px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.28)',
              color: '#FFFFFF',
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.20)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)'; }}
          >
            <FaPhoneAlt style={{ fontSize: '11px', opacity: 0.80 }} />
            <span>Call Us</span>
          </a>
        </motion.div>
      </div>

      {/* ── Scroll Indicator (right side, vertical) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        onClick={() => handleScrollTo('about')}
        style={{
          position: 'absolute',
          right: '32px',
          bottom: '40px',
          zIndex: 10,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontSize: '9px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(200,215,195,0.65)',
            writingMode: 'vertical-rl',
            fontWeight: 500,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(120,180,100,0.55))',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '40%',
              background: 'rgba(120,180,100,0.80)',
              borderRadius: '2px',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
