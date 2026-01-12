import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Send, CheckCircle } from 'lucide-react';

const Enquiry = () => {
      return (
            <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="pt-32 pb-20 bg-gray-50 min-h-screen"
            >
                  <Helmet>
                        <title>Enquiry | Join Speakify English Academy Today</title>
                        <meta name="description" content="Book a free demo class or counseling session at Speakify English Academy. Start your journey towards confident communication today." />
                  </Helmet>
                  <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                              <div className="md:w-1/2 p-10 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
                                    <h2 className="text-3xl font-bold mb-6">Start Your Journey Today!</h2>
                                    <p className="text-blue-100 mb-8">Fill the form to book your free demo class or get a free counseling session.</p>

                                    <div className="space-y-4">
                                          <div className="flex items-center gap-3">
                                                <div className="bg-white/20 p-2 rounded-full"><CheckCircle size={20} /></div>
                                                <span>Free Skill Assessment</span>
                                          </div>
                                          <div className="flex items-center gap-3">
                                                <div className="bg-white/20 p-2 rounded-full"><CheckCircle size={20} /></div>
                                                <span>Demo Class Access</span>
                                          </div>
                                          <div className="flex items-center gap-3">
                                                <div className="bg-white/20 p-2 rounded-full"><CheckCircle size={20} /></div>
                                                <span>Career Guidance</span>
                                          </div>
                                    </div>
                              </div>

                              <div className="md:w-1/2 p-10">
                                    <form className="space-y-6">
                                          <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your name" />
                                          </div>
                                          <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+91 98765 43210" />
                                          </div>
                                          <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Interested Course</label>
                                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                                                      <option>Spoken English</option>
                                                      <option>Business English</option>
                                                      <option>IELTS/TOEFL</option>
                                                      <option>Kids English</option>
                                                </select>
                                          </div>

                                          <Button variant="primary" className="w-full flex justify-center">
                                                Submit Enquiry <Send size={18} className="ml-2" />
                                          </Button>
                                    </form>
                              </div>

                        </div>
                  </div>
            </motion.div>
      );
};

export default Enquiry;
