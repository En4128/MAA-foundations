import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCrown, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { resortInfo } from '../data/resortData';

const navItems = [
  { label: 'Home',    href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Rooms',   href: '#rooms' },
  { label: 'Events',  href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled,      setIsScrolled]      = useState(false);
  const [mobileMenuOpen,  setMobileMenuOpen]  = useState(false);
  const [activeSection,   setActiveSection]   = useState('home');

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
      const top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  /* ── Dynamic nav colours ── */
  const navBg        = isScrolled ? 'rgba(255,255,255,0.94)' : 'transparent';
  const navBorder    = isScrolled ? '1px solid rgba(232,213,181,0.18)' : 'none';
  const navShadow    = isScrolled ? '0 4px 24px rgba(0,0,0,0.08)' : 'none';
  const linkColor    = isScrolled ? '#2B2B2B' : 'rgba(255,255,255,0.90)';
  const activeLinkC  = isScrolled ? '#C4956A' : '#E8D5B5';
  const logoTitleC   = isScrolled ? '#C4956A' : '#ffffff';

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'background 0.4s ease, box-shadow 0.4s ease, padding 0.4s ease',
      background: navBg,
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: navBorder,
      boxShadow: navShadow,
      padding: isScrolled ? '14px 0' : '22px 0',
    }}>
      <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* ── Brand Logo ── */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: isScrolled ? '#C4956A' : '#E8D5B5',
            color:      isScrolled ? '#E8D5B5' : '#C4956A',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
            transition: 'all 0.4s ease',
          }}>
            <FaCrown style={{ fontSize: '18px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '20px',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: logoTitleC,
              transition: 'color 0.4s ease',
            }}>
              MAA FOUNDATIONS
            </span>
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '10px', letterSpacing: '0.25em', color: '#E8D5B5', textTransform: 'uppercase' }}>
              Resort & Spa
            </span>
          </div>
        </a>

        {/* ── Desktop Nav Links ── */}
        <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="hidden lg:flex">
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
                  padding: '8px 14px',
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? activeLinkC : linkColor,
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
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
                      left: '14px',
                      right: '14px',
                      height: '2px',
                      background: '#E8D5B5',
                      borderRadius: '2px',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── CTA + Hamburger ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href={`tel:${resortInfo.phone}`}
            className="hidden sm:inline-flex"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '9999px',
              background: '#C4956A',
              color: '#E8D5B5',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(196,149,106,0.25)',
              transition: 'all 0.3s ease',
              border: '1.5px solid rgba(232,213,181,0.35)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#E8D5B5'; e.currentTarget.style.color = '#C4956A'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#C4956A'; e.currentTarget.style.color = '#E8D5B5'; }}
          >
            <FaPhoneAlt style={{ fontSize: '11px' }} />
            <span>Call Now</span>
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            style={{
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              background: 'transparent',
              color: isScrolled ? '#C4956A' : '#ffffff',
              cursor: 'pointer',
              fontSize: '22px',
            }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(232,213,181,0.15)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ padding: '16px 24px 24px' }}>
              {navItems.map((item) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      display: 'block',
                      padding: '12px 0',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: '15px',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#C4956A' : '#2B2B2B',
                      textDecoration: 'none',
                      borderLeft: isActive ? '4px solid #E8D5B5' : '4px solid transparent',
                      paddingLeft: isActive ? '12px' : '0',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href={`tel:${resortInfo.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '16px',
                  padding: '14px',
                  borderRadius: '9999px',
                  background: '#C4956A',
                  color: '#E8D5B5',
                  fontWeight: 700,
                  fontSize: '13px',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                <FaPhoneAlt style={{ fontSize: '12px' }} />
                <span>Call Now: {resortInfo.displayPhone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
