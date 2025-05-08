import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Send, Zap } from 'lucide-react';

const Socials: React.FC = () => {
  return (
    <section id="socials" className="py-20 relative">
      {/* Decorative elements */}
      <div className="bush absolute top-10 left-10 scale-75 z-0 opacity-60" />
      <div className="bush absolute bottom-10 right-10 scale-50 z-0 opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-gremlin font-bold mb-8 text-gremlin-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join The <span className="text-gremlin-lime">Gremlin</span> Community
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gremlin-dark mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect with fellow Gremlins and stay updated on the latest mischief, events, and token news!
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a 
              href="https://twitter.com/gremlinsolana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Twitter className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-gremlin font-bold mb-2 text-blue-400">Twitter</h3>
              <p className="text-gray-600">Follow for updates, memes, and Gremlin antics</p>
            </motion.a>
            
            <motion.a 
              href="https://t.me/gremlinsolana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0088cc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-gremlin font-bold mb-2 text-[#0088cc]">Telegram</h3>
              <p className="text-gray-600">Join our active community chat for real-time updates</p>
            </motion.a>
            
            <motion.a 
              href="https://pump.fun/gremlinsolana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-gremlin font-bold mb-2 text-purple-500">Pump</h3>
              <p className="text-gray-600">Find airdrops, rewards, and token events</p>
            </motion.a>
          </div>
        </div>
      </div>
      
      {/* Gremlin 7 placeholder - bottom left */}
      <motion.div 
        className="absolute -bottom-5 left-1/3 w-24 h-24 md:w-32 md:h-32"
        animate={{ 
          rotate: [0, 5, 0, -5, 0],
          y: [0, -5, 0]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 3, ease: "easeInOut" },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }
        }}
      >
        <img 
          src="/images/gremlin7.png" 
          alt="Gremlin character" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Socials;
