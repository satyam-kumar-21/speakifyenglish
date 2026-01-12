import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
      return (
            <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                  {/* Background Blobs */}
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>

                  <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">

                              <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="lg:w-1/2"
                              >
                                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                                          <Star size={16} className="mr-2 text-yellow-500 fill-current" />
                                          #1 English Academy in Bhopal
                                    </div>
                                    <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                                          Master English like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Native Speaker</span>
                                    </h1>
                                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                          Unlock your potential with personalized coaching, interactive sessions, and a proven curriculum designed to boost your confidence.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                          <Button variant="primary" className="flex items-center justify-center">
                                                Book a Free Demo <ArrowRight size={20} className="ml-2" />
                                          </Button>
                                          <Button variant="outline">View Courses</Button>
                                    </div>

                                    <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-80">
                                          {['5k+ Students', 'Expert Mentors', '100% Results'].map((stat, i) => (
                                                <div key={i} className="text-center lg:text-left">
                                                      <p className="font-bold text-gray-900 text-lg">{stat.split(' ')[0]}</p>
                                                      <p className="text-sm text-gray-500">{stat.split(' ').slice(1).join(' ')}</p>
                                                </div>
                                          ))}
                                    </div>
                              </motion.div>

                              <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="lg:w-1/2 relative"
                              >
                                    {/* Using a placeholder SVG illustrating communication/learning since I can't generate images directly into files yet without tool call */}
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-4">
                                          <img
                                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                                alt="Students learning"
                                                className="rounded-xl w-full h-[500px] object-cover"
                                          />

                                          <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 1 }}
                                                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg max-w-xs"
                                          >
                                                <div className="flex items-center gap-3">
                                                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                                            <Star size={20} fill="currentColor" />
                                                      </div>
                                                      <div>
                                                            <h4 className="font-bold text-gray-900">Top Rated</h4>
                                                            <p className="text-xs text-gray-500">4.9/5 Average Rating</p>
                                                      </div>
                                                </div>
                                          </motion.div>
                                    </div>
                              </motion.div>

                        </div>
                  </div>
            </section>
      );
};

export default Hero;
