import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';
import { diningData } from '../data/resortData';

const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

const Restaurant = () => {
  const [activeVenue, setActiveVenue] = useState(0);
  const venue = diningData.highlights[activeVenue];
  const width = useWindowWidth();

  const isMobile  = width < 640;
  const isTablet  = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  return (
    <section
      id="restaurant"
      style={{ padding: isMobile ? '48px 0 40px' : '72px 0 64px', background: '#F4F6F2', position: 'relative', overflow: 'hidden' }}
    >
      {/* ambient blobs */}
      <div style={{ position:'absolute', top:'-100px', right:'-80px', width:'380px', height:'380px', borderRadius:'50%', background:'rgba(94,123,82,0.10)', filter:'blur(70px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-60px', left:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'rgba(221,185,138,0.13)', filter:'blur(60px)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'88rem', margin:'0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>

        {/* ── Header row ── */}
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px' }}>
          <div style={{ width:'28px', height:'2px', background:'#5E7B52' }} />
          <span style={{ fontSize:'11px', letterSpacing:'0.25em', textTransform:'uppercase', color:'#5E7B52', fontWeight:700 }}>
            {diningData.subtitle}
          </span>
        </div>

        {/* ── Two-column layout (stacks on mobile) ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
          gap: isMobile ? '28px' : '48px',
          alignItems: 'start',
        }}>

          {/* LEFT — title + description + tabs */}
          <div>
            <motion.h2
              initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
              style={{ fontFamily:'"Playfair Display",Georgia,serif', fontSize:'clamp(1.6rem,4vw,2.4rem)', fontWeight:700, color:'#2C2416', lineHeight:1.2, marginBottom:'14px' }}
            >
              {diningData.title}
            </motion.h2>
            <p style={{ fontSize:'14px', color:'#6B5A45', fontWeight:300, lineHeight:1.75, marginBottom:'28px', maxWidth: isMobile ? '100%' : '400px' }}>
              {diningData.description}
            </p>

            {/* Venue tab pills */}
            <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
              {diningData.highlights.map((v, idx) => (
                <button
                  key={v.name}
                  onClick={() => setActiveVenue(idx)}
                  style={{
                    display: 'flex',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    borderRadius: '14px',
                    border: activeVenue === idx ? '1.5px solid #5E7B52' : '1.5px solid #E2D0BA',
                    background: activeVenue === idx ? 'rgba(94,123,82,0.07)' : '#FEFCF8',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    textAlign: 'left',
                    gap: isMobile ? '6px' : '0',
                  }}
                >
                  <div>
                    <div style={{ fontSize:'11px', letterSpacing:'0.15em', textTransform:'uppercase', color:'#5E7B52', fontWeight:700, marginBottom:'2px' }}>
                      {v.type}
                    </div>
                    <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'0.95rem', fontWeight:700, color:'#2C2416' }}>
                      {v.name}
                    </div>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'11px', color:'#9B8878' }}>
                    <FaClock style={{ color:'#5E7B52', fontSize:'10px' }} />
                    {v.timing}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — active venue image card */}
          <motion.div
            key={activeVenue}
            initial={{ opacity:0, x: isDesktop ? 16 : 0, y: isDesktop ? 0 : 12 }}
            animate={{ opacity:1, x:0, y:0 }}
            transition={{ duration:0.45 }}
            style={{ borderRadius:'24px', overflow:'hidden', boxShadow:'0 20px 52px rgba(94,123,82,0.16)', border:'1px solid rgba(94,123,82,0.15)', background:'#FEFCF8' }}
          >
            <div style={{ position:'relative', height: isMobile ? '200px' : '240px', overflow:'hidden' }}>
              <img
                src={venue.image} alt={venue.name}
                style={{ width:'100%', height:'100%', objectFit:'cover' }}
              />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(44,36,22,0.55) 0%, transparent 60%)' }} />
              <span style={{ position:'absolute', top:'14px', left:'14px', padding:'4px 14px', borderRadius:'9999px', background:'rgba(254,252,248,0.92)', backdropFilter:'blur(8px)', fontSize:'10px', fontWeight:700, color:'#3E5C35', letterSpacing:'0.12em', textTransform:'uppercase', border:'1px solid rgba(94,123,82,0.25)' }}>
                {venue.type}
              </span>
            </div>
            <div style={{ padding: isMobile ? '16px' : '22px 24px' }}>
              <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.25rem', fontWeight:700, color:'#2C2416', marginBottom:'8px' }}>
                {venue.name}
              </h3>
              <p style={{ fontSize:'13px', color:'#6B5A45', fontWeight:300, lineHeight:1.7 }}>{venue.desc}</p>
            </div>
          </motion.div>
        </div>



      </div>
    </section>
  );
};

export default Restaurant;
