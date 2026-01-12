import React from 'react';

import CoursesSection from '../components/Courses';
import { motion } from 'framer-motion';

const Courses = () => {
      return (
            <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pt-20"
            >

                  <div className="bg-teal-600 text-white py-20 text-center">
                        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
                        <p className="text-teal-100">Designed for every level of proficiency.</p>
                  </div>
                  <CoursesSection />
            </motion.div>
      );
};

export default Courses;
