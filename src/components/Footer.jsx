import React, { useState } from 'react';
import { FaCrown, FaPaperPlane, FaInstagram, FaFacebookF, FaTwitter, FaTripadvisor } from 'react-icons/fa';
import { resortInfo } from '../data/resortData';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const linkStyle = {
    display:'flex', alignItems:'center', gap:'5px',
    color:'#6B5A45', textDecoration:'none', fontSize:'13px',
    transition:'color 0.2s ease',
  };

  return (
    <footer style={{ background:'#EDE3D4', paddingTop:'80px', paddingBottom:'40px', borderTop:'1px solid #E2D0BA' }}>
      <div style={{ maxWidth:'88rem', margin:'0 auto', padding:'0 24px' }}>

        {/* ── Main Grid ── */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'48px', paddingBottom:'56px', borderBottom:'1px solid rgba(196,149,106,0.2)' }}>

          {/* Brand Column */}
          <div>
            <a href="#home" style={{ display:'flex', alignItems:'center', gap:'12px', textDecoration:'none', marginBottom:'20px' }}>
              <div style={{ width:'40px', height:'40px', borderRadius:'50%', background:'#C4956A', color:'#FEFCF8', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 12px rgba(196,149,106,0.35)' }}>
                <FaCrown style={{ fontSize:'18px' }} />
              </div>
              <div>
                <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'18px', fontWeight:800, letterSpacing:'0.15em', color:'#2C2416' }}>MAA FOUNDATIONS</div>
                <div style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'10px', letterSpacing:'0.25em', color:'#C4956A', textTransform:'uppercase' }}>Resort & Spa</div>
              </div>
            </a>

            <p style={{ fontSize:'13px', color:'#6B5A45', fontWeight:300, lineHeight:1.75, marginBottom:'24px', maxWidth:'280px' }}>
              {resortInfo.shortDesc}
            </p>

            {/* Social Icons */}
            <div style={{ display:'flex', gap:'10px' }}>
              {[
                { icon: FaInstagram, label:'Instagram' },
                { icon: FaFacebookF, label:'Facebook' },
                { icon: FaTwitter,   label:'Twitter' },
                { icon: FaTripadvisor, label:'Tripadvisor' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width:'38px', height:'38px', borderRadius:'50%',
                    background:'rgba(196,149,106,0.15)',
                    border:'1px solid rgba(196,149,106,0.30)',
                    color:'#C4956A', display:'flex', alignItems:'center',
                    justifyContent:'center', textDecoration:'none',
                    transition:'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background='#C4956A'; e.currentTarget.style.color='#FEFCF8'; e.currentTarget.style.transform='scale(1.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(196,149,106,0.15)'; e.currentTarget.style.color='#C4956A'; e.currentTarget.style.transform='scale(1)'; }}
                >
                  <Icon style={{ fontSize:'14px' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontFamily:'"Playfair Display",serif', fontSize:'15px', fontWeight:700, color:'#2C2416', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:'20px', paddingBottom:'8px', borderBottom:'2px solid rgba(196,149,106,0.30)', display:'inline-block' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'10px' }}>
              {['Home','About','Rooms','Restaurant','Amenities','Events','Gallery','Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color='#C4956A'}
                    onMouseLeave={e => e.currentTarget.style.color='#6B5A45'}
                  >
                    <span style={{ color:'#C4956A', fontSize:'12px' }}>›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Villas & Suites */}
          <div>
            <h4 style={{ fontFamily:'"Playfair Display",serif', fontSize:'15px', fontWeight:700, color:'#2C2416', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:'20px', paddingBottom:'8px', borderBottom:'2px solid rgba(196,149,106,0.30)', display:'inline-block' }}>
              Villas & Suites
            </h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'10px' }}>
              {[
                'Deluxe Ocean Suite',
                'Executive Horizon Villa',
                'Garden Sanctuary Villa',
                'Poolside Royal Sanctuary',
                'Presidential Family Estate',
                'Royal Honeymoon Suite',
              ].map((suite) => (
                <li key={suite}>
                  <a
                    href="#rooms"
                    style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color='#C4956A'}
                    onMouseLeave={e => e.currentTarget.style.color='#6B5A45'}
                  >
                    <span style={{ color:'#C4956A', fontSize:'12px' }}>›</span>
                    {suite}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontFamily:'"Playfair Display",serif', fontSize:'15px', fontWeight:700, color:'#2C2416', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:'20px', paddingBottom:'8px', borderBottom:'2px solid rgba(196,149,106,0.30)', display:'inline-block' }}>
              Privilege Club
            </h4>
            <p style={{ fontSize:'13px', color:'#6B5A45', fontWeight:300, lineHeight:1.7, marginBottom:'18px' }}>
              Subscribe for exclusive seasonal offers, private villa invitations, and wellness tips.
            </p>
            <form onSubmit={handleSubscribe} style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
              <div style={{ position:'relative' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    width:'100%', padding:'12px 48px 12px 16px', borderRadius:'9999px',
                    border:'1.5px solid #E2D0BA', background:'#FEFCF8',
                    color:'#2C2416', fontSize:'13px', outline:'none',
                    fontFamily:'"Plus Jakarta Sans",sans-serif',
                    transition:'border-color 0.2s ease', boxSizing:'border-box',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor='#C4956A'}
                  onBlur={e => e.currentTarget.style.borderColor='#E2D0BA'}
                />
                <button
                  type="submit"
                  style={{
                    position:'absolute', right:'4px', top:'4px', bottom:'4px',
                    padding:'0 14px', borderRadius:'9999px',
                    background:'#C4956A', color:'#FEFCF8', border:'none',
                    cursor:'pointer', display:'flex', alignItems:'center',
                    transition:'background 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background='#A8784E'}
                  onMouseLeave={e => e.currentTarget.style.background='#C4956A'}
                >
                  <FaPaperPlane style={{ fontSize:'12px' }} />
                </button>
              </div>
              {subscribed && (
                <p style={{ fontSize:'12px', color:'#C4956A', fontWeight:600, paddingLeft:'8px' }}>
                  ✓ Welcome to our Privilege Club!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* ── Copyright Row ── */}
        <div style={{ paddingTop:'28px', display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'12px' }}>
          <p style={{ fontSize:'12px', color:'#9B8878' }}>
            © {new Date().getFullYear()} MAA Foundations Luxury Resort & Spa. All Rights Reserved.
          </p>
          <div style={{ display:'flex', gap:'24px' }}>
            {['Privacy Policy','Terms & Conditions','Cookie Preferences'].map(link => (
              <a
                key={link}
                href="#"
                style={{ fontSize:'12px', color:'#9B8878', textDecoration:'none', transition:'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color='#C4956A'}
                onMouseLeave={e => e.currentTarget.style.color='#9B8878'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
