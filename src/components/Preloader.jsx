import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCrown } from 'react-icons/fa';

const Preloader = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            background: '#FEFCF8',
          }}
        >
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {/* Pulsing glow ring */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', inset: '-48px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(196,149,106,0.25) 0%, transparent 70%)',
                filter: 'blur(16px)',
              }}
            />

            {/* Crown Badge */}
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                width: '80px', height: '80px', borderRadius: '50%',
                border: '2px solid #C4956A',
                background: '#F7F1E8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(196,149,106,0.30)',
                marginBottom: '24px',
              }}
            >
              <FaCrown style={{ fontSize: '28px', color: '#C4956A' }} />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '2.2rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: '#2C2416',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              MAA FOUNDATIONS
            </motion.h1>

            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.05rem',
                color: '#C4956A',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginTop: '6px',
              }}
            >
              Luxury Resort & Spa
            </motion.p>

            {/* Loading bar */}
            <div style={{
              width: '180px', height: '3px',
              background: '#E2D0BA',
              borderRadius: '9999px',
              overflow: 'hidden',
              marginTop: '28px',
            }}>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(90deg, #C4956A, #DDB98A, #C4956A)',
                  borderRadius: '9999px',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
