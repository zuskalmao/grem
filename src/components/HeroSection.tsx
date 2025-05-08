import React from 'react';
import { motion } from 'framer-motion';
import { Coins } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:py-40 relative">
      {/* Gremlin 1 placeholder - top right */}
      <motion.div 
        className="absolute top-20 right-10 md:right-40 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(135deg, rgba(132, 204, 22, 0.3) 0%, rgba(163, 230, 53, 0.2) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 bg-white bg-opacity-80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
          <img 
            src="/images/gremlin1.png" 
            alt="Gremlin character" 
            className="w-full h-full object-contain p-2"
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-gremlin font-bold mb-6 text-gremlin-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to <br /><span className="text-gremlin-lime">$GREMLIN</span> Town
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gremlin-dark mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The most mischievous memecoin on Solana!
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="btn-primary flex items-center justify-center gap-2">
              <Coins size={20} />
              Buy $GREMLIN
            </button>
            <button className="btn-secondary">
              Join Community
            </button>
          </motion.div>
        </div>
      </div>

      {/* Gremlin 2 placeholder - bottom left */}
      <motion.div 
        className="absolute -bottom-10 left-5 md:left-32 w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center z-10"
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(245, 237, 217, 0.8) 100%)",
          backdropFilter: "blur(5px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}
      >
        <img 
          src="/images/gremlin2.png" 
          alt="Gremlin character" 
          className="w-full h-full object-contain p-2"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
