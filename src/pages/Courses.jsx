import React from 'react';
import { Helmet } from 'react-helmet-async';
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
                  <Helmet>
                        <title>Our Courses | Spoken English, Public Speaking, IELTS - Speakify Bhopal</title>
                        <meta name="description" content="Explore our wide range of courses: Spoken English (Basic to Advanced), Personality Grooming, Interview Skills, Public Speaking, and more at Speakify Academy." />
                  </Helmet>
                  <div className="bg-teal-600 text-white py-20 text-center">
                        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
                        <p className="text-teal-100">Designed for every level of proficiency.</p>
                  </div>
                  <CoursesSection />
            </motion.div>
      );
};

export default Courses;
