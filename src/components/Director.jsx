import React from 'react';
import { motion } from 'framer-motion';

const Director = () => {
      return (
            <section className="py-20 bg-blue-50">
                  <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                              <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="md:w-1/3"
                              >
                                    <div className="relative">
                                          <div className="absolute inset-0 bg-blue-200 transform translate-x-4 translate-y-4 rounded-xl"></div>
                                          <img
                                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                                alt="Director"
                                                className="relative rounded-xl shadow-lg w-full object-cover h-[400px]"
                                          />
                                    </div>
                              </motion.div>

                              <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="md:w-2/3"
                              >
                                    <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Director's Desk</h4>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">A Message from Our Founder</h2>
                                    <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                                          <p>
                                                "I am Vikas Singh Parihar, a passionate Public Speaker, Communication & Personality Development Trainer, and Spoken English Coach."
                                          </p>
                                          <p>
                                                "I founded Speakify English Academy with a mission to empower individuals to speak confidently, enhance their personality, and excel in professional and personal life. With years of experience in training students and professionals, I personally ensure that every student achieves their full potential."
                                          </p>
                                    </div>
                                    <div className="mt-8">
                                          <h3 className="text-2xl font-bold text-gray-900">Vikas Singh Parihar</h3>
                                          <p className="text-gray-600 font-semibold">Founder & Director, Speakify English Academy</p>
                                          <p className="text-blue-500 text-sm mt-1">Public Speaker | Communication Trainer | Spoken English Coach</p>
                                    </div>
                              </motion.div>
                        </div>
                  </div>
            </section>
      );
};

export default Director;
