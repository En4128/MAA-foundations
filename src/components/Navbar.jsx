import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCrown, FaPhoneAlt, FaWhatsapp, FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';
import { resortInfo } from '../data/resortData';

const navItems = [
  { num: '01', label: 'Home',    href: '#home' },
  { num: '02', label: 'About',   href: '#about' },
  { num: '03', label: 'Rooms',   href: '#rooms' },
  { num: '04', label: 'Events',  href: '#events' },
  { num: '05', label: 'Gallery', href: '#gallery' },
  { num: '06', label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
      const top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  /* ── Dynamic nav colours ── */
  const navBg       = isScrolled ? 'rgba(254, 252, 248, 0.95)' : 'rgba(44, 36, 22, 0.25)';
  const navBorder   = isScrolled ? '1px solid rgba(226, 208, 186, 0.60)' : '1px solid rgba(255, 255, 255, 0.12)';
  const navShadow   = isScrolled ? '0 10px 30px rgba(196, 149, 106, 0.12)' : 'none';
  const logoTitleC  = isScrolled ? '#2C2416' : '#FEFCF8';
  const logoSubC    = isScrolled ? '#C4956A' : '#E8D5B5';
  const linkColor   = isScrolled ? '#2C2416' : '#FEFCF8';
  const activeLinkC = '#C4956A';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s ease',
          background: navBg,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: navBorder,
          boxShadow: navShadow,
          padding: isScrolled ? '12px 0' : '18px 0',
        }}
      >
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 clamp(16px, 4vw, 32px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* ── Brand Logo ── */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#C4956A',
                color: '#FEFCF8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(196, 149, 106, 0.30)',
                flexShrink: 0,
              }}
            >
              <FaCrown style={{ fontSize: '18px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(15px, 4.5vw, 19px)',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: logoTitleC,
                  transition: 'color 0.4s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                MAA FOUNDATIONS
              </span>
              <span
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 'clamp(9px, 2.5vw, 11px)',
                  letterSpacing: '0.25em',
                  color: logoSubC,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  marginTop: '3px',
                }}
              >
                Luxury Resort & Spa
              </span>
            </div>
          </a>

          {/* ── Desktop Nav Links (Hidden on mobile/tablet via className, NO inline display override) ── */}
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
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? activeLinkC : linkColor,
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    transition: 'color 0.3s ease',
                    borderRadius: '6px',
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveBar"
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '16px',
                        right: '16px',
                        height: '2px',
                        background: '#C4956A',
                        borderRadius: '2px',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Desktop Call CTA & Mobile Toggle ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Call Button (Desktop/Tablet only) */}
            <a
              href={`tel:${resortInfo.phone}`}
              className="hidden sm:inline-flex items-center gap-2"
              style={{
                padding: '10px 20px',
                borderRadius: '9999px',
                background: '#C4956A',
                color: '#FEFCF8',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(196, 149, 106, 0.30)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#A8784E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C4956A';
              }}
            >
              <FaPhoneAlt style={{ fontSize: '10px' }} />
              <span> Book Stay</span>
            </a>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              className="lg:hidden flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(196, 149, 106, 0.30)',
                background: isScrolled ? '#F7F1E8' : 'rgba(254, 252, 248, 0.15)',
                color: isScrolled ? '#2C2416' : '#FEFCF8',
                cursor: 'pointer',
                fontSize: '18px',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
              }}
            >
              {mobileMenuOpen ? <FaTimes style={{ color: '#C4956A' }} /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Modern Full-Screen / Floating Glass Mobile Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 45,
              background: 'rgba(254, 252, 248, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '100px 28px 40px',
              overflowY: 'auto',
            }}
          >
            {/* Ambient Background Glows */}
            <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(196, 149, 106, 0.15)', filter: 'blur(50px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(221, 185, 138, 0.20)', filter: 'blur(50px)', pointerEvents: 'none' }} />

            {/* Nav Items List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C4956A', fontWeight: 700, marginBottom: '12px', paddingLeft: '8px' }}>
                Navigation Menu
              </div>

              {navItems.map((item, idx) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      borderRadius: '16px',
                      background: isActive ? '#F7F1E8' : 'transparent',
                      border: isActive ? '1px solid #E2D0BA' : '1px solid transparent',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '13px', fontWeight: 700, color: '#C4956A', letterSpacing: '0.05em' }}>
                        {item.num}
                      </span>
                      <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', fontWeight: isActive ? 700 : 600, color: '#2C2416' }}>
                        {item.label}
                      </span>
                    </div>

                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: isActive ? '#C4956A' : 'rgba(196,149,106,0.1)', color: isActive ? '#FEFCF8' : '#C4956A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>
                      <FaChevronRight />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Actions Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              style={{
                position: 'relative',
                zIndex: 2,
                marginTop: '32px',
                padding: '24px',
                borderRadius: '24px',
                background: '#FEFCF8',
                border: '1px solid #E2D0BA',
                boxShadow: '0 12px 36px rgba(196, 149, 106, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ fontSize: '11px', color: '#9B8878', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, textAlign: 'center' }}>
                Instant Reservation & Concierge
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <a
                  href={`tel:${resortInfo.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 14px',
                    borderRadius: '9999px',
                    background: '#C4956A',
                    color: '#FEFCF8',
                    fontWeight: 700,
                    fontSize: '12px',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                  }}
                >
                  <FaPhoneAlt style={{ fontSize: '11px' }} />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${resortInfo.whatsappNumber}?text=Hello%20MAA%20Foundations%20Concierge`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 14px',
                    borderRadius: '9999px',
                    background: '#25D366',
                    color: '#FEFCF8',
                    fontWeight: 700,
                    fontSize: '12px',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
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
