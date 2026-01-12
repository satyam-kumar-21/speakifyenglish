import React from 'react';

import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Home = () => {
      return (
            <>

                  <Hero />
                  <Features />

                  {/* Mini About Section */}
                  <section className="py-20 bg-white">
                        <div className="container mx-auto px-6 text-center">
                              <h2 className="text-3xl font-bold mb-6">Transform Your Communication Skills</h2>
                              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                                    Join the highest-rated English Academy in Bhopal. Whether you are a student, professional, or homemaker, we have a course for you.
                              </p>
                              <Link to="/about">
                                    <Button variant="outline">Read Our Story</Button>
                              </Link>
                        </div>
                  </section>

                  {/* Methodology Section */}
                  <section className="py-20 bg-blue-50">
                        <div className="container mx-auto px-6">
                              <div className="flex flex-col md:flex-row items-center gap-12">
                                    <div className="md:w-1/2">
                                          <img
                                                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                                alt="Teaching Methodology"
                                                className="rounded-xl shadow-lg w-full"
                                          />
                                    </div>
                                    <div className="md:w-1/2">
                                          <h2 className="text-3xl font-bold mb-6">Our Methodology</h2>
                                          <h3 className="text-xl font-semibold text-blue-600 mb-4">LSRW Technique</h3>
                                          <p className="text-gray-600 mb-6">
                                                We follow the globally accepted **LSRW (Listening, Speaking, Reading, Writing)** framework to ensure holistic language development.
                                          </p>
                                          <ul className="space-y-4">
                                                {[
                                                      { title: "Active Listening", desc: "Audio-visual sessions to understand accents and pronunciation." },
                                                      { title: "Public Speaking", desc: "Debates, Jam sessions, and presentations to remove stage fear." },
                                                      { title: "Reading Comprehension", desc: "Analyzing texts to improve vocabulary and context understanding." },
                                                      { title: "Creative Writing", desc: "Structuring thoughts effectively on paper and emails." }
                                                ].map((item, i) => (
                                                      <li key={i} className="flex items-start">
                                                            <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs mt-1 mr-3 flex-shrink-0">
                                                                  {i + 1}
                                                            </div>
                                                            <div>
                                                                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                                                                  <p className="text-sm text-gray-500">{item.desc}</p>
                                                            </div>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <Testimonials />

                  {/* GTA Section */}
                  <section className="py-20 bg-blue-600 text-white text-center">
                        <div className="container mx-auto px-6">
                              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
                              <p className="mb-8 text-blue-100 max-w-xl mx-auto">Book a free demo class today and experience our unique teaching methodology.</p>
                              <Link to="/enquiry">
                                    <Button variant="white" className="px-8 py-4 text-lg">Book Free Demo</Button>
                              </Link>
                        </div>
                  </section>
            </>
      );
};

export default Home;
