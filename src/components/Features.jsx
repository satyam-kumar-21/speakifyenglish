import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, Clock } from 'lucide-react';

const features = [
      {
            icon: <Users size={32} />,
            title: "Expert Mentors",
            description: "Learn from certified trainers with years of experience in language coaching."
      },
      {
            icon: <BookOpen size={32} />,
            title: "Structured Curriculum",
            description: "A step-by-step learning path tailored to your current proficiency level."
      },
      {
            icon: <Trophy size={32} />,
            title: "Proven Results",
            description: "Join thousands of successful students who have transformed their careers."
      },
      {
            icon: <Clock size={32} />,
            title: "Flexible Timing",
            description: "Morning, evening, and weekend batches available to suit your schedule."
      }
];

const Features = () => {
      return (
            <section id="features" className="py-20 bg-white">
                  <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                              <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl font-bold text-gray-900 mb-4"
                              >
                                    Why Choose Speakify?
                              </motion.h2>
                              <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-gray-600 max-w-2xl mx-auto"
                              >
                                    We don't just teach English; we build confidence and communication skills that last a lifetime.
                              </motion.p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {features.map((feature, index) => (
                                    <motion.div
                                          key={index}
                                          initial={{ opacity: 0, y: 30 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{ delay: index * 0.1 }}
                                          viewport={{ once: true }}
                                          className="p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                                    >
                                          <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                {feature.icon}
                                          </div>
                                          <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                          <p className="text-gray-600">{feature.description}</p>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Features;
