import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import aboutAerial from '../assets/about_aerial.jpg';
import aboutNight from '../assets/about_night.jpg';


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
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
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
            <span style={{ ...S.tagText, color: '#5E7B52' }}>Welcome to Excellence</span>
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
        </motion.div>
      </div>

    </div>
  </section>
);

export default About;
