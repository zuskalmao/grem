import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, GripHorizontal } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-gremlin-tan shadow-md' : 'py-4 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GripHorizontal className="h-8 w-8 text-gremlin-lime" />
          <h1 className="text-2xl font-gremlin font-bold text-gremlin-dark">
            <span className="text-gremlin-lime">$</span>GREMLIN
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-gremlin font-medium text-gremlin-dark hover:text-gremlin-lime transition-colors">About</a>
          <a href="#tokenomics" className="font-gremlin font-medium text-gremlin-dark hover:text-gremlin-lime transition-colors">Tokenomics</a>
          <a href="#socials" className="font-gremlin font-medium text-gremlin-dark hover:text-gremlin-lime transition-colors">Community</a>
          <button className="btn-primary">Buy $GREMLIN</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gremlin-dark hover:text-gremlin-lime transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav 
          className="md:hidden bg-gremlin-tan-light py-4 px-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            <a 
              href="#about" 
              className="font-gremlin font-medium text-gremlin-dark hover:text-gremlin-lime transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#tokenomics" 
              className="font-gremlin font-medium text-gremlin-dark hover:text-gremlin-lime transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tokenomics
            </a>
            <a 
              href="#socials" 
              className="font-gremlin font-medium text-gremlin-dark hover:text-gremlin-lime transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <button className="btn-primary w-full">Buy $GREMLIN</button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
