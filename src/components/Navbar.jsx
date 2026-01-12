import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  setScrolled(window.scrollY > 50);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const navLinks = [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Courses', href: '/courses' },
            { name: 'Contact', href: '/contact' },
      ];

      return (
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
                  <div className="container mx-auto px-6 flex justify-between items-center">
                        <Link to="/" className="flex items-center">
                              <img src={logo} alt="Speakify English Academy" className="h-14 md:h-16 w-auto object-contain transition-all duration-300" />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                              {navLinks.map((link) => (
                                    <Link
                                          key={link.name}
                                          to={link.href}
                                          className={`font-medium hover:text-blue-600 transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}
                                    >
                                          {link.name}
                                    </Link>
                              ))}
                              <Link to="/enquiry">
                                    <Button variant="primary" className="px-5 py-2 text-sm">Get Started</Button>
                              </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                              className="md:hidden text-gray-700"
                              onClick={() => setIsOpen(!isOpen)}
                        >
                              {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                  </div>

                  {/* Mobile Menu */}
                  <AnimatePresence>
                        {isOpen && (
                              <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="md:hidden bg-white border-t"
                              >
                                    <div className="flex flex-col p-6 space-y-4">
                                          {navLinks.map((link) => (
                                                <a
                                                      key={link.name}
                                                      href={link.href}
                                                      className="text-gray-700 font-medium hover:text-blue-600"
                                                      onClick={() => setIsOpen(false)}
                                                >
                                                      {link.name}
                                                </a>
                                          ))}
                                          <Link to="/enquiry"><Button variant="primary" className="w-full">Get Started</Button></Link>
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </nav>
      );
};

export default Navbar;
