import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Restaurant from './components/Restaurant';
import Amenities from './components/Amenities';
import Events from './components/Events';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#FEFCF8] text-[#2B2B2B] overflow-x-hidden selection:bg-[#DCE5D7] selection:text-[#3E5C35]">
      {/* 0. Preloader Splash Animation */}
      <Preloader onFinish={() => setLoading(false)} />

      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* Main Landing Page Content */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Resort Section */}
        <About />

        {/* 4. Our Rooms & Suites Section */}
        <Rooms />

        {/* 5. Restaurant & Fine Dining Section */}
        <Restaurant />

        {/* 6. Amenities Section */}
        <Amenities />

        {/* 7. Banquet & Events Section */}
        <Events />

        {/* 8. Gallery Section */}
        <Gallery />

        {/* 9. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 10. Testimonials Section */}
        <Testimonials />

        {/* 11. FAQ Accordion Section */}
        <FAQ />

        {/* 12. Contact & Maps Section */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}

export default App;
