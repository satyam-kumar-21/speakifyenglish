import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
      return (
            <section id="contact" className="py-20 bg-gray-50">
                  <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                              <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl font-bold text-gray-900 mb-4"
                              >
                                    Get in Touch
                              </motion.h2>
                              <p className="text-gray-600">Have questions? We are here to help you.</p>
                        </div>

                        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">

                              <div className="p-10 bg-blue-900 text-white">
                                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                    <p className="text-blue-200 mb-8">Fill up the form and our team will get back to you within 24 hours.</p>

                                    <div className="space-y-6">
                                          <div className="flex items-start">
                                                <MapPin className="text-teal-400 mt-1 mr-4" size={24} />
                                                <p className="text-blue-100">Karond Bypass, Near Bajaj Showroom & Kalyan Hospital, Bhopal 462038</p>
                                          </div>
                                          <div className="flex items-center">
                                                <Phone className="text-teal-400 mr-4" size={24} />
                                                <p className="text-blue-100">+91 73805 62243</p>
                                          </div>
                                          <div className="flex items-center">
                                                <Mail className="text-teal-400 mr-4" size={24} />
                                                <p className="text-blue-100">speakifyenglishacademy25@gmail.com</p>
                                          </div>
                                    </div>

                                    {/* Map Placeholder */}
                                    <div className="mt-10 h-48 bg-blue-800 rounded-lg overflow-hidden relative">
                                          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Map" className="w-full h-full object-cover opacity-50" />
                                          <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-sm font-semibold tracking-wider">MAP VIEW</span>
                                          </div>
                                    </div>
                              </div>

                              <div className="p-10">
                                    <form className="space-y-6">
                                          <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                                                </div>
                                                <div>
                                                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                                </div>
                                          </div>

                                          <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                          </div>

                                          <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
                                          </div>

                                          <Button variant="primary" className="w-full flex justify-center items-center">
                                                Send Message <Send size={18} className="ml-2" />
                                          </Button>
                                    </form>
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default Contact;
