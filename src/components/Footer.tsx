import React from 'react';
import { motion } from 'framer-motion';
import { GripHorizontal, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gremlin-lime-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <motion.div 
              className="flex items-center gap-2 mb-6 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GripHorizontal className="h-8 w-8 text-white" />
              <h2 className="text-2xl font-gremlin font-bold">
                <span className="text-gremlin-tan-light">$</span>GREMLIN
              </h2>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-x-8 gap-y-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="#about" className="text-gremlin-tan-light hover:text-white transition-colors">About</a>
              <a href="#tokenomics" className="text-gremlin-tan-light hover:text-white transition-colors">Tokenomics</a>
              <a href="#socials" className="text-gremlin-tan-light hover:text-white transition-colors">Community</a>
              <a 
                href="https://solscan.io/token/gremlinXYZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gremlin-tan-light hover:text-white transition-colors"
              >
                Contract <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="border-t border-gremlin-lime pt-6 text-center text-gremlin-tan-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm">
              © {new Date().getFullYear()} $GREMLIN. All rights reserved. $GREMLIN is a meme coin with no intrinsic value or financial promise.
            </p>
            <p className="text-xs mt-2 opacity-75">
              Don't feed the Gremlins after midnight!
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
