import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const TokenomicsPreview: React.FC = () => {
  return (
    <section id="tokenomics" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-gremlin font-bold mb-8 text-gremlin-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The <span className="text-gremlin-lime">$GREMLIN</span> Economy
          </motion.h2>
          
          <motion.div 
            className="gremlin-bubble mb-12 text-left"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <TrendingUp className="text-gremlin-lime mt-1 w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-gremlin font-bold mb-2 text-gremlin-lime">Growing Stronger</h3>
                <p className="text-gremlin-dark">
                  Just like gremlins multiply when they get wet, $GREMLIN is designed to grow and flourish in the Solana ecosystem.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="btn-primary">
              View Full Tokenomics
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Gremlin 6 placeholder - bottom right */}
      <motion.div 
        className="absolute bottom-0 right-10 w-28 h-28 md:w-40 md:h-40"
        animate={{ 
          y: [0, -8, 0],
          x: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          x: { repeat: Infinity, duration: 4, ease: "easeInOut" }
        }}
      >
        <img 
          src="/images/gremlin6.png" 
          alt="Gremlin character" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </section>
  );
};

export default TokenomicsPreview;
