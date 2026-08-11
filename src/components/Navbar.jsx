import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaPhoneAlt, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { resortInfo } from '../data/resortData';

const navItems = [
  { label: 'Home',    href: '#home' },
  { label: 'About',  href: '#about' },
  { label: 'Rooms',  href: '#rooms' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery',href: '#gallery' },
  { label: 'Contact',href: '#contact' },
];

const Navbar = () => {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const scrollPos = window.scrollY + 160;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const id = navItems[i].href.substring(1);
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  /* ── Scrolled vs top state ── */
  const scrolledBg     = 'rgba(250, 248, 243, 0.97)';
  const scrolledBorder = '1px solid rgba(180, 160, 120, 0.15)';
  const scrolledShadow = '0 2px 20px rgba(80,60,30,0.07)';

  const topBg     = 'transparent';
  const topBorder = '1px solid transparent';
  const topShadow = 'none';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
          background:   isScrolled ? scrolledBg   : topBg,
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? scrolledBorder : topBorder,
          boxShadow:    isScrolled ? scrolledShadow : topShadow,
          padding: isScrolled ? '10px 0' : '20px 0',
        }}
      >
        <div style={{ maxWidth: '86rem', margin: '0 auto', padding: '0 clamp(16px, 5vw, 40px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* ── Brand Mark ── */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{ display: 'flex', alignItems: 'center', gap: '11px', textDecoration: 'none' }}
          >
            {/* Leaf icon – natural feel */}
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: isScrolled
                  ? 'linear-gradient(135deg, #5E7B52 0%, #3E5C35 100%)'
                  : 'rgba(255,255,255,0.18)',
                backdropFilter: isScrolled ? 'none' : 'blur(8px)',
                border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.28)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.4s ease',
                boxShadow: isScrolled ? '0 2px 12px rgba(94,123,82,0.25)' : 'none',
              }}
            >
              <FaLeaf style={{ fontSize: '16px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(14px, 4vw, 17px)',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: isScrolled ? '#2D2A23' : '#FFFFFF',
                  transition: 'color 0.4s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                MAA RESORT
              </span>
              <span
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: 'clamp(8px, 2vw, 9.5px)',
                  letterSpacing: '0.22em',
                  color: isScrolled ? '#7A6E58' : 'rgba(255,255,255,0.68)',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.4s ease',
                }}
              >
                Nature · Comfort · Peace
              </span>
            </div>
          </a>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    position: 'relative',
                    padding: '7px 15px',
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 400,
                    color: isScrolled
                      ? (isActive ? '#4A6741' : '#4A4438')
                      : (isActive ? '#FFFFFF' : 'rgba(255,255,255,0.80)'),
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'color 0.3s ease',
                    borderRadius: '8px',
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveBar"
                      style={{
                        position: 'absolute',
                        bottom: '3px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '18px',
                        height: '2px',
                        background: isScrolled ? '#5E7B52' : '#FFFFFF',
                        borderRadius: '2px',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Right Actions ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Call CTA (Desktop) */}
            <a
              href={`tel:${resortInfo.phone}`}
              className="hidden sm:inline-flex items-center gap-2"
              style={{
                padding: '9px 20px',
                borderRadius: '9999px',
                background: isScrolled
                  ? 'linear-gradient(135deg, #5E7B52 0%, #3E5C35 100%)'
                  : 'rgba(255,255,255,0.15)',
                backdropFilter: isScrolled ? 'none' : 'blur(10px)',
                border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.30)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '11.5px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.35s ease',
                boxShadow: isScrolled ? '0 2px 14px rgba(62,92,53,0.30)' : 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(62,92,53,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = isScrolled ? '0 2px 14px rgba(62,92,53,0.30)' : 'none';
              }}
            >
              <FaPhoneAlt style={{ fontSize: '10px' }} />
              <span>Book Stay</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                border: isScrolled ? '1px solid rgba(94,123,82,0.25)' : '1px solid rgba(255,255,255,0.25)',
                background: isScrolled ? '#F5F2EA' : 'rgba(255,255,255,0.12)',
                color: isScrolled ? '#3E5C35' : '#FFFFFF',
                cursor: 'pointer',
                fontSize: '16px',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
              }}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 45,
              background: 'rgba(247, 245, 238, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '96px 28px 40px',
              overflowY: 'auto',
            }}
          >
            {/* Subtle natural texture glows */}
            <div style={{ position: 'absolute', top: '8%', right: '-8%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(94,123,82,0.08)', filter: 'blur(60px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '12%', left: '-8%', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(180,160,120,0.12)', filter: 'blur(60px)', pointerEvents: 'none' }} />

            {/* Nav Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#8A7A62', fontWeight: 600, marginBottom: '16px', paddingLeft: '4px' }}>
                Navigation
              </div>

              {navItems.map((item, idx) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.28 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 16px',
                      borderRadius: '14px',
                      background: isActive ? 'rgba(94,123,82,0.10)' : 'transparent',
                      border: isActive ? '1px solid rgba(94,123,82,0.18)' : '1px solid transparent',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: '1.3rem',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? '#3E5C35' : '#4A4438',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5E7B52' }} />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.4 }}
              style={{
                position: 'relative',
                zIndex: 2,
                marginTop: '32px',
                padding: '22px',
                borderRadius: '20px',
                background: '#FFFFFF',
                border: '1px solid rgba(180,160,120,0.20)',
                boxShadow: '0 4px 24px rgba(80,60,30,0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ fontSize: '10px', color: '#8A7A62', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, textAlign: 'center' }}>
                Reach Us
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <a
                  href={`tel:${resortInfo.phone}`}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                    padding: '12px 10px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #5E7B52 0%, #3E5C35 100%)',
                    color: '#FFFFFF',
                    fontWeight: 600, fontSize: '12px',
                    textDecoration: 'none', letterSpacing: '0.04em',
                    boxShadow: '0 2px 12px rgba(62,92,53,0.25)',
                  }}
                >
                  <FaPhoneAlt style={{ fontSize: '11px' }} />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${resortInfo.whatsappNumber.replace(/\D/g, '')}?text=Hello%20MAA%20Resort`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                    padding: '12px 10px',
                    borderRadius: '12px',
                    background: '#25D366',
                    color: '#FFFFFF',
                    fontWeight: 600, fontSize: '12px',
                    textDecoration: 'none', letterSpacing: '0.04em',
                    boxShadow: '0 2px 12px rgba(37,211,102,0.25)',
                  }}
                >
                  <FaWhatsapp style={{ fontSize: '14px' }} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
