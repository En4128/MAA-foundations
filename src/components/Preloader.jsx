import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Inline styles converted 1-to-1 from maa_foundations_aligned_loader.html ─── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Cormorant+Garamond:ital,wght@1,300&display=swap');

  /* ── pulse rings ── */
  @keyframes ringPulse {
    0%,100% { transform: translate(-50%,-50%) scale(1);    opacity: 0.5; }
    50%      { transform: translate(-50%,-50%) scale(1.03); opacity: 1;   }
  }
  /* ── rotating petal orbit ── */
  @keyframes orbitSpin {
    from { transform: rotate(0deg);   }
    to   { transform: rotate(360deg); }
  }
  /* ── text / divider / bar fade-up ── */
  @keyframes maaFadeUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0);   }
  }
  /* ── shimmer bar ── */
  @keyframes shimmerMove {
    0%   { transform: translateX(-200%); }
    100% { transform: translateX(400%);  }
  }
  /* ── bouncing dots ── */
  @keyframes dotBounce {
    0%,100% { transform: scaleY(1);   opacity: 0.4; background: #e8c08a; }
    50%     { transform: scaleY(1.9); opacity: 1;   background: #b87a2a; }
  }
  /* ── rising leaves ── */
  @keyframes leafRise {
    0%   { transform: translateY(0)     rotate(0deg);   opacity: 0;    }
    10%  { opacity: 0.45; }
    90%  { opacity: 0.15; }
    100% { transform: translateY(-520px) rotate(200deg); opacity: 0;   }
  }

  @media (max-width: 500px) {
    .maa-loader-wrapper {
      transform: scale(0.7);
    }
  }

  .maa-loader-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .maa-loader-ring  { position:absolute; border-radius:50%; border:1px solid; top:50%; left:50%;
                      transform:translate(-50%,-50%); animation:ringPulse ease-in-out infinite; }
  .maa-r1 { width:440px; height:440px; border-color:rgba(212,164,76,0.10); animation-duration:4s; }
  .maa-r2 { width:340px; height:340px; border-color:rgba(212,164,76,0.16); animation-duration:4s; animation-delay:.7s; }
  .maa-r3 { width:240px; height:240px; border-color:rgba(212,164,76,0.22); animation-duration:4s; animation-delay:1.4s; }

  .maa-petal-orbit  { position:absolute; top:50%; left:50%;
                      width:340px; height:340px; margin-left:-170px; margin-top:-170px;
                      animation:orbitSpin 20s linear infinite; pointer-events:none; }

  .maa-brand-name {
    font-family:'Cinzel',serif; font-size:19px; font-weight:500;
    letter-spacing:0.28em; color:#5a3e1b; text-align:center;
    margin-top:10px; white-space:nowrap;
    animation:maaFadeUp 1.2s ease forwards; opacity:0; animation-delay:.5s;
  }
  .maa-brand-tag {
    font-family:'Cormorant Garamond',serif; font-style:italic;
    font-size:13px; letter-spacing:0.16em; color:#b8936a; text-align:center;
    margin-top:6px; animation:maaFadeUp 1.2s ease forwards; opacity:0; animation-delay:.9s;
  }
  .maa-divider {
    display:flex; align-items:center; justify-content:center;
    gap:10px; margin-top:16px; width:160px;
    animation:maaFadeUp 1s ease forwards; opacity:0; animation-delay:1.1s;
  }
  .maa-div-line    { flex:1; height:0.5px; background:#c9a06a; }
  .maa-div-diamond { width:5px; height:5px; background:#c9a06a; transform:rotate(45deg); flex-shrink:0; }

  .maa-shimmer-bar {
    width:160px; height:2px; background:rgba(200,155,80,0.18); border-radius:2px;
    margin-top:14px; overflow:hidden;
    animation:maaFadeUp 1s ease forwards; opacity:0; animation-delay:1.3s;
  }
  .maa-shimmer-fill {
    height:100%; width:40%; background:#d4a44c; border-radius:2px;
    animation:shimmerMove 2.2s ease-in-out infinite; animation-delay:1.5s;
  }

  .maa-dots-row {
    display:flex; align-items:center; justify-content:center; gap:8px; margin-top:14px;
    animation:maaFadeUp 1s ease forwards; opacity:0; animation-delay:1.5s;
  }
  .maa-dot {
    width:5px; height:5px; border-radius:50%;
    background:#e8c08a; animation:dotBounce 1.6s ease-in-out infinite;
  }
  .maa-dot:nth-child(1){animation-delay:0s}
  .maa-dot:nth-child(2){animation-delay:.2s}
  .maa-dot:nth-child(3){animation-delay:.4s}
  .maa-dot:nth-child(4){animation-delay:.6s}
  .maa-dot:nth-child(5){animation-delay:.8s}

  .maa-leaf {
    position:absolute; border-radius:50%; pointer-events:none;
    opacity:0; animation:leafRise linear infinite;
  }
`;

const LEAF_COLORS = ['#e8c06a','#d4a44c','#f0d090','#c8954a','#f5deb0'];

const Preloader = ({ onFinish }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const leavesRef = useRef(null);

  /* auto-dismiss after 2.8 s */
  useEffect(() => {
    const t = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 2800);
    return () => clearTimeout(t);
  }, [onFinish]);

  /* generate floating leaves (mirrors the original JS) */
  useEffect(() => {
    const container = leavesRef.current;
    if (!container) return;
    for (let i = 0; i < 16; i++) {
      const el = document.createElement('div');
      el.className = 'maa-leaf';
      const s = 4 + Math.random() * 5;
      el.style.cssText = `
        width:${s}px;height:${s}px;
        left:${5 + Math.random() * 90}%;
        bottom:${Math.random() * 10}%;
        background:${LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)]};
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        animation-duration:${6 + Math.random() * 8}s;
        animation-delay:${Math.random() * 7}s;
      `;
      container.appendChild(el);
    }
    return () => { container.innerHTML = ''; };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#fdf8f2',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Inject keyframes + utility classes */}
          <style>{css}</style>

          <div className="maa-loader-wrapper">
            {/* ── Pulsing Rings + Petal Orbit ── */}
            <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none' }}>
            <div className="maa-loader-ring maa-r1" />
            <div className="maa-loader-ring maa-r2" />
            <div className="maa-loader-ring maa-r3" />

            {/* Rotating petal orbit SVG */}
            <svg className="maa-petal-orbit" viewBox="0 0 340 340" fill="none">
              <g opacity="0.15">
                {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => (
                  <ellipse key={deg} cx="170" cy="38" rx="9" ry="20"
                    fill="#d4a44c" transform={`rotate(${deg} 170 170)`} />
                ))}
              </g>
            </svg>
          </div>

          {/* ── Floating Leaves container ── */}
          <div ref={leavesRef} style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }} />

          {/* ── Centre Content ── */}
          <div style={{ position:'relative', zIndex:2, display:'flex', flexDirection:'column', alignItems:'center' }}>

            {/* Gold Lotus Emblem SVG — pixel-perfect from the HTML file */}
            <div style={{ width:180, height:180, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                <defs>
                  <linearGradient id="gA" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%"   stopColor="#f5deb0"/>
                    <stop offset="40%"  stopColor="#d4a44c"/>
                    <stop offset="75%"  stopColor="#e8c06a"/>
                    <stop offset="100%" stopColor="#b87a2a"/>
                  </linearGradient>
                  <linearGradient id="gB" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#e8c06a"/>
                    <stop offset="100%" stopColor="#b87a2a"/>
                  </linearGradient>
                </defs>

                {/* Outer & dashed rings */}
                <circle cx="90" cy="90" r="78" stroke="url(#gA)" strokeWidth="0.8" opacity="0.45"/>
                <circle cx="90" cy="90" r="68" stroke="#d4a44c" strokeWidth="0.4" opacity="0.25" strokeDasharray="3 6">
                  <animateTransform attributeName="transform" type="rotate"
                    from="0 90 90" to="360 90 90" dur="24s" repeatCount="indefinite"/>
                </circle>

                {/* Outer petals (9) */}
                {[0,40,80,120,160,200,240,280,320].map((r) => (
                  <ellipse key={r} cx="90" cy="58" rx="7" ry="19"
                    fill="url(#gA)" opacity="0.9" transform={r ? `rotate(${r} 90 90)` : undefined}/>
                ))}

                {/* Inner petals (8) */}
                {[0,45,90,135,180,225,270,315].map((r) => (
                  <ellipse key={r} cx="90" cy="66" rx="5" ry="13"
                    fill="#f5deb0" opacity="0.65" transform={r ? `rotate(${r} 90 90)` : undefined}/>
                ))}

                {/* Centre circles */}
                <circle cx="90" cy="90" r="13" fill="url(#gB)" opacity="0.95"/>
                <circle cx="90" cy="90" r="9"  fill="#fdf4e3"/>
                <circle cx="90" cy="90" r="4"  fill="url(#gA)"/>

                {/* Pulsing halo */}
                <circle cx="90" cy="90" r="13" fill="none" stroke="#d4a44c" strokeWidth="0.6" opacity="0.6">
                  <animate attributeName="r"       values="13;22;13" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2.8s" repeatCount="indefinite"/>
                </circle>

                {/* Base stem lines */}
                <line x1="42"  y1="138" x2="56"  y2="128" stroke="url(#gA)" strokeWidth="1" strokeLinecap="round"/>
                <line x1="138" y1="138" x2="124" y2="128" stroke="url(#gA)" strokeWidth="1" strokeLinecap="round"/>
                <path d="M42 142 L90 156 L138 142" stroke="url(#gA)" strokeWidth="1" fill="none" opacity="0.55"/>
                <rect x="58" y="156" width="64" height="7" rx="1" fill="none" stroke="url(#gA)" strokeWidth="0.6" opacity="0.45"/>
                <rect x="65" y="153" width="50" height="3" rx="1" fill="url(#gA)" opacity="0.28"/>

                {/* Crown top spike */}
                <line x1="78"  y1="34" x2="90" y2="20" stroke="#d4a44c" strokeWidth="0.8" strokeLinecap="round" opacity="0.55"/>
                <line x1="102" y1="34" x2="90" y2="20" stroke="#d4a44c" strokeWidth="0.8" strokeLinecap="round" opacity="0.55"/>
                <circle cx="90" cy="19" r="3" fill="#d4a44c" opacity="0.7"/>
              </svg>
            </div>

            {/* Brand Name */}
            <div className="maa-brand-name">MAA-FOUNDATIONS</div>

            {/* Tagline */}
            <div className="maa-brand-tag">Where Every Moment Blooms</div>

            {/* Divider */}
            <div className="maa-divider">
              <div className="maa-div-line"/>
              <div className="maa-div-diamond"/>
              <div className="maa-div-line"/>
            </div>

            {/* Shimmer Progress Bar */}
            <div className="maa-shimmer-bar">
              <div className="maa-shimmer-fill"/>
            </div>

            {/* Bouncing Dots */}
            <div className="maa-dots-row">
              {[0,1,2,3,4].map((i) => <div key={i} className="maa-dot"/>)}
            </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
