import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
      {
            name: "Aditi Sharma",
            role: "Software Engineer",
            content: "The confidence I gained from Speakify is unmatched. I nailed my job interview in just 2 months of joining!",
            rating: 5
      },
      {
            name: "Rajesh Kumar",
            role: "MBA Student",
            content: "The environment is very supportive. The mentors focus on your weak areas and help you improve daily.",
            rating: 5
      },
      {
            name: "Priya Singh",
            role: "Freelancer",
            content: "Best institute in Bhopal for English. The practical sessions and group discussions were the highlight for me.",
            rating: 4
      }
];

const Testimonials = () => {
      return (
            <section id="testimonials" className="py-20 bg-blue-900 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-5">
                        <Quote size={300} />
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                              <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl font-bold mb-4"
                              >
                                    Student Success Stories
                              </motion.h2>
                              <p className="text-blue-200">See what our students have to say about their journey.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                              {testimonials.map((testimonial, index) => (
                                    <motion.div
                                          key={index}
                                          initial={{ opacity: 0, scale: 0.9 }}
                                          whileInView={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: index * 0.1 }}
                                          viewport={{ once: true }}
                                          className="bg-blue-800 p-8 rounded-xl shadow-lg border border-blue-700"
                                    >
                                          <div className="flex mb-4 text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                      <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "" : "text-gray-600"} />
                                                ))}
                                          </div>
                                          <p className="text-blue-100 mb-6 italic">"{testimonial.content}"</p>
                                          <div className="flex items-center">
                                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white mr-3">
                                                      {testimonial.name[0]}
                                                </div>
                                                <div>
                                                      <h4 className="font-bold">{testimonial.name}</h4>
                                                      <p className="text-xs text-blue-300">{testimonial.role}</p>
                                                </div>
                                          </div>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Testimonials;
