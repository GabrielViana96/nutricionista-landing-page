import React from 'react';
import Header from './src/Components/Header';
import Hero from './src/Components/Hero';
import LocalFocus from './src/Components/LocalFocus';
import Services from './src/Components/Services';
import About from './src/Components/About';
import WhyChoose from './src/Components/WhyChoose';
import CtaSection from './src/Components/CtaSection';
import Location from './src/Components/Location';
import Footer from './src/Components/Footer';
import FloatingWhatsapp from './src/Components/FloatingWhatsapp';

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
        <Location />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
};

export default App;