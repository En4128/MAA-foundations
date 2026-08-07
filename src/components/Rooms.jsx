import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaBed, FaRulerCombined, FaUsers, FaArrowRight } from 'react-icons/fa';
import { roomsData } from '../data/resortData';
import RoomDetailModal from './RoomDetailModal';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section id="rooms" style={{ padding: '96px 0', background: '#ffffff' }}>
      <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '2px', background: '#E8D5B5' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#E8D5B5', fontWeight: 700 }}>
              Accommodations & Suites
            </span>
            <div style={{ width: '32px', height: '2px', background: '#E8D5B5' }} />
          </div>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#C4956A', lineHeight: 1.2, marginBottom: '16px' }}>
            Sanctuaries of Pure Opulence
          </h2>
          <p style={{ fontSize: '15px', color: '#666', fontWeight: 300, lineHeight: 1.75 }}>
            Each villa and suite is architecturally oriented to capture panoramic views of ocean horizons, verdant botanical hillsides, and starry night skies.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
          {roomsData.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: '#F8F8F8',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid #eeeeee',
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.4s ease',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.10)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1.00)'; }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%)' }} />
                <div style={{ position: 'absolute', top: '14px', left: '14px', padding: '4px 14px', borderRadius: '9999px', background: 'rgba(196,149,106,0.88)', color: '#E8D5B5', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {room.category}
                </div>
                <div style={{ position: 'absolute', bottom: '14px', right: '14px', background: 'rgba(255,255,255,0.95)', padding: '6px 14px', borderRadius: '9999px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '18px', fontWeight: 700, color: '#C4956A' }}>{room.price}</span>
                  <span style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>/ night</span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', gap: '2px', color: '#E8D5B5' }}>
                      {[...Array(5)].map((_, i) => <FaStar key={i} style={{ fontSize: '11px' }} />)}
                    </div>
                    <span style={{ fontSize: '11px', color: '#888' }}>{room.rating} ({room.reviewsCount} reviews)</span>
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', fontWeight: 700, color: '#C4956A', marginBottom: '10px' }}>
                    {room.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#666', fontWeight: 300, lineHeight: 1.7, marginBottom: '20px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {room.description}
                  </p>

                  {/* Specs */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', padding: '12px 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', marginBottom: '18px' }}>
                    {[
                      { icon: FaRulerCombined, text: room.size },
                      { icon: FaUsers, text: room.capacity },
                      { icon: FaBed, text: 'King Bed' },
                    ].map(({ icon: Icon, text }, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#555' }}>
                        <Icon style={{ color: '#C4956A', flexShrink: 0 }} />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenity Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                    {room.amenities.slice(0, 3).map((a, i) => (
                      <span key={i} style={{ padding: '4px 10px', borderRadius: '6px', background: '#fff', border: '1px solid #e0e0e0', fontSize: '10px', color: '#555' }}>{a}</span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span style={{ padding: '4px 8px', fontSize: '10px', color: '#E8D5B5', fontWeight: 600 }}>+{room.amenities.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedRoom(room)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '9999px',
                    background: '#C4956A',
                    color: '#E8D5B5',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 14px rgba(196,149,106,0.20)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#E8D5B5'; e.currentTarget.style.color = '#C4956A'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#C4956A'; e.currentTarget.style.color = '#E8D5B5'; }}
                >
                  <span>Explore Villa Details</span>
                  <FaArrowRight style={{ fontSize: '11px' }} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <RoomDetailModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </section>
  );
};

export default Rooms;
