import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Gremlin 3 placeholder - middle right */}
      <motion.div 
        className="absolute top-1/4 right-8 md:right-20 w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center transform rotate-6 overflow-hidden"
        animate={{ rotate: [6, 0, 6] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(135deg, rgba(230, 217, 187, 0.7) 0%, rgba(245, 237, 217, 0.6) 100%)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)"
        }}
      >
        <img 
          src="/images/gremlin3.png" 
          alt="Gremlin character" 
          className="w-full h-full object-contain p-2"
        />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="gremlin-bubble"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-gremlin font-bold mb-6 text-gremlin-lime">Who Are The Gremlins?</h2>
            <div className="prose prose-lg">
              <p>
                Gremlins are tiny, mischievous creatures with big personalities and even bigger dreams. They've found their home on the Solana blockchain, bringing chaos and fun to the memecoin space!
              </p>
              <p>
                Our community of $GREMLIN holders are just as passionate and playful as the creatures themselves. We're building more than just a token - we're creating a vibrant town where gremlins (and holders) can thrive.
              </p>
              <p>
                But be careful - feed a $GREMLIN after midnight, and who knows what might happen to your portfolio! 🌙
              </p>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <motion.div 
              className="gremlin-bubble"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-gremlin font-bold mb-4 text-gremlin-lime">Community First</h3>
              <p className="text-gremlin-dark">
                $GREMLIN is powered by our passionate community. We believe in transparency, fun, and creating lasting value for all our holders.
              </p>
              
              {/* Gremlin 4 placeholder - inside box */}
              <motion.div 
                className="mt-4 w-20 h-20 ml-auto"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <img 
                  src="/images/gremlin4.png" 
                  alt="Gremlin character" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="gremlin-bubble"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-gremlin font-bold mb-4 text-gremlin-lime">Solana Powerhouse</h3>
              <p className="text-gremlin-dark">
                Built on Solana for lightning-fast transactions and low fees. The perfect blockchain for our mischievous little friends to run wild!
              </p>
              
              {/* Gremlin 5 placeholder - inside box */}
              <motion.div 
                className="mt-4 w-20 h-20"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <img 
                  src="/images/gremlin5.png" 
                  alt="Gremlin character" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
