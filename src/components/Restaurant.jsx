import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaChevronRight, FaLeaf } from 'react-icons/fa';
import { diningData } from '../data/resortData';

const TAG = { fontSize:'11px', letterSpacing:'0.25em', textTransform:'uppercase', color:'#C4956A', fontWeight:700 };
const H2  = { fontFamily:'"Playfair Display",Georgia,serif', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:700, color:'#2C2416', lineHeight:1.2, marginBottom:'16px' };
const BOX = { maxWidth:'88rem', margin:'0 auto', padding:'0 24px' };

const Restaurant = () => (
  <section id="restaurant" style={{ padding:'96px 0', background:'#EDE3D4', position:'relative', overflow:'hidden' }}>

    {/* Decorative ambient blobs */}
    <div style={{ position:'absolute', top:'-80px', right:'-80px', width:'400px', height:'400px', borderRadius:'50%', background:'rgba(196,149,106,0.12)', filter:'blur(60px)', pointerEvents:'none' }} />
    <div style={{ position:'absolute', bottom:'-60px', left:'-60px', width:'360px', height:'360px', borderRadius:'50%', background:'rgba(221,185,138,0.15)', filter:'blur(60px)', pointerEvents:'none' }} />

    <div style={BOX}>

      {/* ── Section Header ── */}
      <div style={{ textAlign:'center', maxWidth:'700px', margin:'0 auto 64px' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', marginBottom:'12px' }}>
          <div style={{ width:'32px', height:'2px', background:'#C4956A' }} />
          <span style={TAG}>{diningData.subtitle}</span>
          <div style={{ width:'32px', height:'2px', background:'#C4956A' }} />
        </div>
        <h2 style={H2}>{diningData.title}</h2>
        <p style={{ fontSize:'15px', color:'#6B5A45', fontWeight:300, lineHeight:1.75 }}>{diningData.description}</p>
      </div>

      {/* ── Dining Venue Cards ── */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'28px', marginBottom:'72px' }}>
        {diningData.highlights.map((venue, idx) => (
          <motion.div
            key={venue.name}
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6, delay:idx * 0.15 }}
            style={{
              background:'#FEFCF8',
              borderRadius:'24px',
              overflow:'hidden',
              border:'1px solid #E2D0BA',
              boxShadow:'0 16px 40px rgba(196,149,106,0.10)',
              display:'flex', flexDirection:'column',
            }}
          >
            <div style={{ position:'relative', height:'220px', overflow:'hidden' }}>
              <img
                src={venue.image}
                alt={venue.name}
                loading="lazy"
                style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.7s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform='scale(1.08)'}
                onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
              />
              <div style={{ position:'absolute', top:'14px', left:'14px', padding:'4px 14px', borderRadius:'9999px', background:'rgba(254,252,248,0.90)', backdropFilter:'blur(8px)', fontSize:'11px', fontWeight:700, color:'#A8784E', letterSpacing:'0.1em', textTransform:'uppercase', border:'1px solid rgba(196,149,106,0.25)' }}>
                {venue.type}
              </div>
            </div>

            <div style={{ padding:'24px 28px', flex:1, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <div>
                <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.35rem', fontWeight:700, color:'#2C2416', marginBottom:'10px' }}>
                  {venue.name}
                </h3>
                <p style={{ fontSize:'13px', color:'#6B5A45', fontWeight:300, lineHeight:1.7, marginBottom:'20px' }}>{venue.desc}</p>
              </div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:'16px', borderTop:'1px solid #E2D0BA' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'8px', fontSize:'12px', color:'#9B8878' }}>
                  <FaClock style={{ color:'#C4956A' }} />
                  <span>{venue.timing}</span>
                </div>
                <a href="#contact" style={{ display:'flex', alignItems:'center', gap:'4px', fontSize:'12px', color:'#C4956A', fontWeight:700, textDecoration:'none', letterSpacing:'0.05em' }}>
                  Reserve Table <FaChevronRight style={{ fontSize:'10px' }} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Chef's Specialties ── */}
      <div style={{ background:'#FEFCF8', padding:'48px', borderRadius:'28px', border:'1px solid #E2D0BA', boxShadow:'0 16px 48px rgba(196,149,106,0.08)' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'8px', marginBottom:'40px' }}>
          <span style={TAG}><FaLeaf style={{ display:'inline', marginRight:'6px' }} />Gastronomic Artistry</span>
          <h3 style={{ ...H2, fontSize:'clamp(1.5rem,3vw,2.2rem)', marginBottom:0 }}>Chef's Signature Creations</h3>
          <p style={{ fontSize:'13px', color:'#6B5A45', fontWeight:300, maxWidth:'480px' }}>
            Crafted daily with fresh organic harvests and sustainably harvested wild deep-sea catches.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:'24px' }}>
          {diningData.specialties.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity:0, scale:0.95 }}
              whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }}
              transition={{ duration:0.5, delay:idx * 0.15 }}
              style={{
                background:'#F7F1E8',
                borderRadius:'20px',
                overflow:'hidden',
                border:'1px solid #E2D0BA',
                boxShadow:'0 8px 24px rgba(196,149,106,0.08)',
              }}
            >
              <div style={{ position:'relative', height:'160px', overflow:'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform='scale(1.07)'}
                  onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                />
                <div style={{ position:'absolute', top:'10px', right:'10px', background:'#C4956A', color:'#FEFCF8', fontWeight:700, padding:'4px 12px', borderRadius:'9999px', fontSize:'12px', fontFamily:'"Playfair Display",serif' }}>
                  {item.price}
                </div>
              </div>
              <div style={{ padding:'18px 20px' }}>
                <span style={{ fontSize:'10px', color:'#C4956A', textTransform:'uppercase', letterSpacing:'0.18em', fontWeight:700 }}>{item.category}</span>
                <h4 style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.05rem', fontWeight:700, color:'#2C2416', margin:'6px 0 8px' }}>{item.title}</h4>
                <p style={{ fontSize:'12px', color:'#6B5A45', fontWeight:300, lineHeight:1.65 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Restaurant;
