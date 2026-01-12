import React from 'react';
import { BookOpen, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
      return (
            <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
                  <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-4 gap-8 mb-8">

                              <div className="col-span-1 md:col-span-1">
                                    <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-white mb-4">
                                          <div className="p-2 bg-blue-600 rounded-lg text-white">
                                                <BookOpen size={20} />
                                          </div>
                                          <span>Speakify<span className="text-teal-500">.</span></span>
                                    </a>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                          Empowering individuals with the power of communication. Join us to transform your future.
                                    </p>
                              </div>

                              <div>
                                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                                    <ul className="space-y-2 text-sm">
                                          <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
                                          <li><a href="#courses" className="hover:text-blue-500 transition-colors">Courses</a></li>
                                          <li><a href="#success" className="hover:text-blue-500 transition-colors">Success Stories</a></li>
                                          <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
                                    </ul>
                              </div>

                              <div>
                                    <h4 className="text-white font-semibold mb-4">Courses</h4>
                                    <ul className="space-y-2 text-sm">
                                          <li><a href="#" className="hover:text-blue-500 transition-colors">Spoken English</a></li>
                                          <li><a href="#" className="hover:text-blue-500 transition-colors">Business English</a></li>
                                          <li><a href="#" className="hover:text-blue-500 transition-colors">IELTS Preparation</a></li>
                                          <li><a href="#" className="hover:text-blue-500 transition-colors">Personality Development</a></li>
                                    </ul>
                              </div>

                              <div>
                                    <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                                    <div className="flex space-x-4 mb-6">
                                          <a href="https://www.instagram.com/speakifyenglishacademy?igsh=MWw1bW43cDdnYjhsbQ==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500"><Instagram size={20} /></a>
                                          <a href="https://www.youtube.com/@SpeakifyEnglishAcademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500"><Youtube size={20} /></a>
                                    </div>
                                    <div>
                                          <h4 className="text-white font-semibold mb-2">Reach Us</h4>
                                          <p className="text-gray-400 text-xs mb-1">Karond Bypass, Near Bajaj Showroom & Kalyan Hospital, Bhopal</p>
                                          <p className="text-gray-400 text-xs">+91 73805 62243</p>
                                    </div>
                              </div>

                        </div>

                        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                              <p>&copy; {new Date().getFullYear()} Speakify English Academy. All rights reserved.</p>
                              <div className="flex space-x-6 mt-4 md:mt-0">
                                    <a href="#" className="hover:text-white">Privacy Policy</a>
                                    <a href="#" className="hover:text-white">Terms of Service</a>
                              </div>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
