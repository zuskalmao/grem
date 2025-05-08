import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TokenomicsPreview from './components/TokenomicsPreview';
import Socials from './components/Socials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen modern-background overflow-x-hidden">
      {/* Modern background elements */}
      <motion.div 
        className="floating-circle w-72 h-72 top-20 -left-20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="floating-circle w-96 h-96 top-[40%] -right-32"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="floating-circle w-64 h-64 bottom-40 left-1/4"
        animate={{ 
          y: [0, 25, 0],
          x: [0, 15, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Blobs for color accents */}
      <div className="blob w-96 h-96 top-20 left-1/4 bg-gremlin-lime" />
      <div className="blob w-80 h-80 bottom-40 right-20 bg-gremlin-lime" />
      <div className="blob w-60 h-60 top-[60%] left-10 bg-gremlin-lime" />
      
      {/* Clouds for town feeling */}
      <motion.div 
        className="cloud top-32 left-10 z-10 opacity-80" 
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div 
        className="cloud top-64 right-[10%] z-10 opacity-70" 
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="cloud bottom-96 left-1/3 z-10 opacity-60 scale-75" 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Bush elements */}
      <div className="bush top-[30%] left-10 scale-75 z-10" />
      <div className="bush top-[70%] right-16 z-10" />
      <div className="bush bottom-40 left-[30%] scale-90 z-10" />

      <Header />
      
      <main className="container mx-auto px-4 relative z-20">
        <HeroSection />
        <AboutSection />
        <TokenomicsPreview />
        <Socials />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
