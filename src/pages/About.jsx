import React from 'react';
import AboutSection from '../components/About';
import Director from '../components/Director';
import { motion } from 'framer-motion';

const About = () => {
      return (
            <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pt-20"
            >
                  <div className="bg-blue-900 text-white py-20 text-center">
                        <h1 className="text-4xl font-bold mb-4">About Us</h1>
                        <p className="text-blue-200">Building Confidence, one student at a time.</p>
                  </div>
                  <AboutSection />
                  <Director />
            </motion.div>
      );
};

export default About;
