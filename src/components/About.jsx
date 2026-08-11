import React from 'react';
import { motion } from 'framer-motion';
import { FaSmileBeam, FaAward, FaHotel, FaStar, FaCheckCircle } from 'react-icons/fa';
import { statistics } from '../data/resortData';
import aboutAerial from '../assets/about_aerial.jpg';
import aboutNight from '../assets/about_night.jpg';

const statIconMap = { FaSmileBeam, FaAward, FaHotel, FaStar };

const S = {
  section: { padding: '96px 0', background: '#F8F8F8', position: 'relative', overflow: 'hidden' },
  container: { maxWidth: '88rem', margin: '0 auto', padding: '0 24px' },
  tag: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' },
  tagLine: { width: '32px', height: '2px', background: '#DCE5D7' },
  tagText: { fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#DCE5D7', fontWeight: 700 },
  headline: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
    fontWeight: 700,
    color: '#5E7B52',
    lineHeight: 1.2,
    marginBottom: '24px',
  },
  bodyText: { fontSize: '15px', color: '#2B2B2B', fontWeight: 300, lineHeight: 1.75, marginBottom: '18px' },
};

const About = () => (
  <section id="about" style={S.section}>
    {/* Ambient glows */}
    <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'rgba(94,123,82,0.05)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '400px', height: '400px', background: 'rgba(220,229,215,0.05)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />

    <div style={S.container}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px', alignItems: 'center' }}>

        {/* ── Left: Images ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', maxWidth: '540px' }}
        >
          {/* Main image */}
          <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.15)', border: '4px solid #ffffff' }}>
            <img
              src={aboutAerial}
              alt="MAA Foundations Resort Aerial View"
              loading="lazy"
              style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Secondary image (hidden on small screens) */}
          <div className="hidden sm:block" style={{
            position: 'absolute', bottom: '-28px', right: '-28px',
            width: '220px', height: '160px', borderRadius: '18px',
            overflow: 'hidden', border: '4px solid #ffffff',
            boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
          }}>
            <img
              src={aboutNight}
              alt="MAA Foundations Resort Night View"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Years badge */}
          <div style={{
            position: 'absolute', top: '-20px', left: '-20px',
            background: 'linear-gradient(135deg, #5E7B52, #3E5C35)',
            padding: '20px 24px', borderRadius: '18px',
            boxShadow: '0 10px 30px -5px rgba(220,229,215,0.35)',
            border: '1px solid rgba(220,229,215,0.35)',
            display: 'flex', alignItems: 'center', gap: '14px',
          }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: '#DCE5D7', color: '#5E7B52',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '20px', fontFamily: '"Playfair Display", serif',
            }}>
              18
            </div>
            <div>
              <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#DCE5D7', textTransform: 'uppercase', fontWeight: 700, marginBottom: '3px' }}>Years of Excellence</p>
              <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '13px', color: '#ffffff' }}>Award-Winning Hospitality</p>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Content ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <div style={S.tag}>
            <div style={S.tagLine} />
            <span style={S.tagText}>Welcome to Excellence </span>
          </div>

          <h2 style={S.headline}>
            A Place Where Luxury Feels Natural
          </h2>

          <p style={S.bodyText}>
            <strong style={{ fontWeight: 600, color: '#5E7B52' }}>MAA Resort</strong> was built with one simple idea that a truly great escape should feel personal, relaxed, and deeply beautiful. We welcome travelers from around the world who come here to rest, reconnect, and experience something they won't find anywhere else.
          </p>

          <p style={{ ...S.bodyText, color: '#555', fontSize: '14px', marginBottom: '32px' }}>
            Great food. Stunning views. People who genuinely care. That's what we offer, and we mean every bit of it.
          </p>

          {/* Checkmarks */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '40px' }}>
            {[
              'Walk Through Nature at Your Own Pace',
              'Meals, Traditions and Stories Rooted in Local Culture',
              'Mornings on the Farm, Evenings in Pure Stillness'
            ].map((feat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 500, color: '#2B2B2B' }}>
                <FaCheckCircle style={{ color: '#DCE5D7', fontSize: '14px', flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <a
            href="#rooms"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              borderRadius: '9999px',
              background: '#5E7B52',
              color: '#DCE5D7',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 8px 20px rgba(94,123,82,0.25)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#DCE5D7'; e.currentTarget.style.color = '#5E7B52'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#5E7B52'; e.currentTarget.style.color = '#DCE5D7'; }}
          >
            Explore Accommodation
          </a>
        </motion.div>
      </div>

      {/* ── Statistics ── */}
      <div style={{ marginTop: '80px', paddingTop: '48px', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {statistics.map((stat, index) => {
            const IconComp = statIconMap[stat.icon] || FaStar;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                style={{
                  background: 'rgba(255,255,255,0.78)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  padding: '32px 24px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.07)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  cursor: 'default',
                }}
                whileHover={{ y: -6 }}
              >
                <div style={{
                  width: '48px', height: '48px', margin: '0 auto 16px',
                  borderRadius: '12px', background: 'rgba(94,123,82,0.08)',
                  color: '#5E7B52', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '20px',
                  transition: 'background 0.3s ease',
                }}>
                  <IconComp />
                </div>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.2rem', fontWeight: 700, color: '#5E7B52', marginBottom: '4px' }}>
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default About;
