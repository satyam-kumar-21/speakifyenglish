import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '../components/Contact';
import { motion } from 'framer-motion';

const Contact = () => {
      return (
            <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pt-20"
            >
                  <Helmet>
                        <title>Contact Us | Speakify English Academy Bhopal</title>
                        <meta name="description" content="Get in touch with Speakify English Academy. Visit us at Karond Bypass, Bhopal or call +91 7380562243 for course enquiries and demo classes." />
                  </Helmet>
                  <div className="bg-gray-900 text-white py-20 text-center">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="text-gray-400">We'd love to hear from you.</p>
                  </div>
                  <ContactSection />
            </motion.div>
      );
};

export default Contact;
