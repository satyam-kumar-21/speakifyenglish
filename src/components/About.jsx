import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const About = () => {
      const WhyChooseUsContent = () => (
            <>
                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Speakify English Academy?</h3>
                        <ul className="space-y-4">
                              {[
                                    "Personalized guidance to maximize your potential",
                                    "Interactive, practical, and result-oriented classes",
                                    "Proven strategies to improve English, communication, and leadership skills"
                              ].map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                          {item}
                                    </li>
                              ))}
                        </ul>
                        <p className="mt-6 text-blue-600 font-semibold italic">
                              "Join us and turn your fear of speaking into a skill that inspires!"
                        </p>
                  </div>

                  <div className="mt-8">
                        <Button variant="outline">Learn More About Us</Button>
                  </div>
            </>
      );

      return (
            <section id="about" className="py-12 lg:py-20 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                  <div className="container mx-auto px-4 lg:px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                              <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="lg:w-1/2 sticky top-24"
                              >
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                                          <img
                                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                                alt="About Speakify"
                                                className="w-full h-full object-cover"
                                          />
                                          <div className="absolute inset-0 bg-blue-900/10"></div>
                                    </div>

                                    {/* Desktop View: Content moved here to balance height */}
                                    <div className="hidden lg:block">
                                          <WhyChooseUsContent />
                                    </div>
                              </motion.div>

                              <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="lg:w-1/2"
                              >
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                                    <div className="w-20 h-1 bg-blue-600 mb-8"></div>

                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Not Just English—We Train You to Speak, Lead, and Inspire.</h3>

                                    <p className="text-lg text-gray-600 mb-6">
                                          At Speakify English Academy, we are dedicated to building confident communicators and inspiring leaders. Our coaching goes beyond traditional English classes—we focus on practical communication, personality development, and real-world skills that help you succeed in every aspect of life.
                                    </p>

                                    <div className="mb-8">
                                          <h4 className="font-bold text-gray-900 mb-3">We offer a wide range of services to cater to every learner’s needs:</h4>
                                          <ul className="grid gap-3 text-gray-700">
                                                {[
                                                      "Basic English – Build strong foundations for everyday communication",
                                                      "Intermediate English – Enhance fluency, vocabulary, and comprehension",
                                                      "Advanced English – Master professional and academic English",
                                                      "Personality Grooming – Improve confidence, body language, and personal presence",
                                                      "Interview Skills – Crack interviews with confidence and preparation",
                                                      "Debate & Presentation – Develop persuasive speaking and public speaking skills",
                                                      "Mock Interviews & Role Play – Practice real-life scenarios for professional readiness"
                                                ].map((service, i) => (
                                                      <li key={i} className="flex items-start">
                                                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                                            <span>{service}</span>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>

                                    <div className="mb-8 space-y-6">
                                          <div className="border-l-4 border-teal-500 pl-4 bg-teal-50 p-4 rounded-r-lg">
                                                <h4 className="font-bold text-gray-900 text-xl mb-2">Our Mission</h4>
                                                <p className="text-gray-700 italic mb-4">
                                                      “To empower individuals to communicate confidently, develop a strong personality, and become inspiring leaders in every sphere of life.”
                                                </p>
                                                <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                                                      <li>Practical English speaking training from basic to advanced</li>
                                                      <li>Personality grooming for confidence, body language, and professional presence</li>
                                                      <li>Communication, public speaking, and presentation skills</li>
                                                      <li>Interview preparation, debates, mock interviews, and role-plays</li>
                                                </ul>
                                          </div>

                                          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
                                                <h4 className="font-bold text-gray-900 text-xl mb-2">Our Vision</h4>
                                                <p className="text-gray-700">
                                                      My vision is simple: not just to teach English, but to train individuals to speak, lead, and inspire. I believe that effective communication and strong personality are keys to success, and at Speakify English Academy, I personally ensure that every student achieves their full potential.
                                                </p>
                                          </div>
                                    </div>

                                    {/* Mobile View: Content stays here for better flow */}
                                    <div className="block lg:hidden">
                                          <WhyChooseUsContent />
                                    </div>
                              </motion.div>
                        </div>
                  </div>
            </section>
      );
};

export default About;
