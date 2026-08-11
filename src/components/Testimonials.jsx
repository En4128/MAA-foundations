import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
import { testimonialsData } from '../data/resortData';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => (
  <section style={{ padding:'96px 0', background:'#FAF8F3', position:'relative', overflow:'hidden' }}>

    {/* Ambient blobs */}
    <div style={{ position:'absolute', top:'10%', right:'5%', width:'320px', height:'320px', borderRadius:'50%', background:'rgba(94,123,82,0.10)', filter:'blur(60px)', pointerEvents:'none' }} />
    <div style={{ position:'absolute', bottom:'10%', left:'5%', width:'280px', height:'280px', borderRadius:'50%', background:'rgba(221,185,138,0.12)', filter:'blur(60px)', pointerEvents:'none' }} />

    <div style={{ maxWidth:'88rem', margin:'0 auto', padding:'0 24px', position:'relative', zIndex:1 }}>

      {/* Header */}
      <div style={{ textAlign:'center', maxWidth:'700px', margin:'0 auto 64px' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', marginBottom:'12px' }}>
          <div style={{ width:'32px', height:'2px', background:'#5E7B52' }} />
          <span style={{ fontSize:'11px', letterSpacing:'0.25em', textTransform:'uppercase', color:'#5E7B52', fontWeight:700 }}>
            Guest Stories & Experiences
          </span>
          <div style={{ width:'32px', height:'2px', background:'#5E7B52' }} />
        </div>
        <h2 style={{ fontFamily:'"Playfair Display",Georgia,serif', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:700, color:'#2C2416', lineHeight:1.2, marginBottom:'16px' }}>
          Words From Our Honored Guests
        </h2>
        <p style={{ fontSize:'15px', color:'#6B5A45', fontWeight:300, lineHeight:1.75 }}>
          Read authentic reviews from couples, families, and executive travelers who have experienced the timeless magic of MAA Foundations.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div style={{ paddingBottom:'48px' }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          pagination={{ clickable:true }}
          autoplay={{ delay:4500, disableOnInteraction:false }}
          breakpoints={{ 768:{ slidesPerView:2 }, 1280:{ slidesPerView:3 } }}
          className="rounded-3xl"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div style={{
                background:'#FEFCF8',
                border:'1px solid rgba(94,123,82,0.18)',
                borderRadius:'24px',
                padding:'36px 32px',
                boxShadow:'0 16px 40px rgba(94,123,82,0.10)',
                minHeight:'320px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                position:'relative',
                transition:'box-shadow 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow='0 24px 56px rgba(94,123,82,0.20)'; e.currentTarget.style.transform='translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow='0 16px 40px rgba(94,123,82,0.10)'; e.currentTarget.style.transform='translateY(0)'; }}
              >
                {/* Quote watermark */}
                <FaQuoteLeft style={{ position:'absolute', top:'24px', right:'24px', fontSize:'2.5rem', color:'rgba(94,123,82,0.12)' }} />

                <div>
                  {/* Stars */}
                  <div style={{ display:'flex', gap:'3px', marginBottom:'18px' }}>
                    {[...Array(item.rating)].map((_,i) => (
                      <FaStar key={i} style={{ fontSize:'14px', color:'#5E7B52' }} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{ fontSize:'14px', color:'#4A3F35', fontStyle:'italic', lineHeight:1.8, marginBottom:'24px' }}>
                    "{item.quote}"
                  </p>
                </div>

                {/* Profile */}
                <div style={{ display:'flex', alignItems:'center', gap:'14px', paddingTop:'20px', borderTop:'1px solid #E2D0BA' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    style={{ width:'48px', height:'48px', borderRadius:'50%', objectFit:'cover', border:'2px solid #5E7B52', boxShadow:'0 4px 12px rgba(94,123,82,0.25)' }}
                  />
                  <div>
                    <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
                      <span style={{ fontFamily:'"Playfair Display",serif', fontSize:'15px', fontWeight:700, color:'#2C2416' }}>
                        {item.name}
                      </span>
                      <FaCheckCircle style={{ fontSize:'12px', color:'#5E7B52' }} title="Verified Stay" />
                    </div>
                    <p style={{ fontSize:'11px', color:'#9B8878', fontWeight:500, marginTop:'2px' }}>
                      {item.role} · {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  </section>
);

export default Testimonials;
