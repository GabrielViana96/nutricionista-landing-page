import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LocalFocus from './components/LocalFocus';
import Services from './components/Services';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import CtaSection from './components/CtaSection';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Header />
      <main>
        <Hero />
        <LocalFocus />
        <Services />
        <About />
        <WhyChoose />
        <CtaSection />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
};

export default App;