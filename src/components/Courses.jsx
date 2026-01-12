import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { CheckCircle, MessageCircle } from 'lucide-react';

const courses = [
      {
            title: "Basic English",
            level: "Foundation",
            description: "Learn foundational grammar, vocabulary, and simple conversation skills.",
            price: "Join Now",
            features: ["Foundational Grammar", "Daily Vocabulary", "Simple Conversation", "Building Confidence"]
      },
      {
            title: "Intermediate English",
            level: "Intermediate",
            description: "Enhance fluency, comprehension, and conversational ability.",
            price: "Join Now",
            features: ["Enhanced Fluency", "Better Comprehension", "Conversational Practice", "Vocabulary Expansion"],
            popular: true
      },
      {
            title: "Advanced English",
            level: "Advanced",
            description: "Master professional and academic English for career success.",
            price: "Join Now",
            features: ["Professional English", "Academic Writing", "Complex Grammar", "Career-Ready Skills"]
      },
      {
            title: "Personality Grooming",
            level: "All Levels",
            description: "Improve confidence, body language, and overall personality.",
            price: "Join Now",
            features: ["Confidence Building", "Body Language", "Personal Presence", "Grooming Tips"]
      },
      {
            title: "Interview Skills",
            level: "Career",
            description: "Prepare for interviews with confidence and strategy.",
            price: "Join Now",
            features: ["Mock Interviews", "Strategy Planning", "Role Plays", "Feedback Sessions"]
      },
      {
            title: "Public Speaking & Debate",
            level: "Skills",
            description: "Develop persuasive speaking and critical thinking skills.",
            price: "Join Now",
            features: ["Persuasive Speaking", "Critical Thinking", "Debate Practice", "Stage Confidence"]
      },
      {
            title: "Presentation Skills",
            level: "Professional",
            description: "Learn to present ideas clearly and confidently.",
            price: "Join Now",
            features: ["Structure & Flow", "Visual Aids", "Audience Engagement", "Delivery Techniques"]
      },
      {
            title: "Mock Interviews & Role Plays",
            level: "Practical",
            description: "Practice real interview scenarios and simulate real-life situations.",
            price: "Join Now",
            features: ["Real-world Scenarios", "Instant Feedback", "Role Playing", "Situation Handling"]
      },
      {
            title: "Group Discussions (GD)",
            level: "Advanced",
            description: "Excel in Group Discussions for competitive exams and placements.",
            price: "Join Now",
            features: ["Topic Analysis", "Turn Taking", "Active Listening", "Leadership Skills"]
      }
];

const Courses = () => {
      return (
            <section id="courses" className="py-20 bg-gray-50">
                  <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                              <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl font-bold text-gray-900 mb-4"
                              >
                                    Our Popular Courses
                              </motion.h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                    Choose the perfect program to achieve your language goals.
                              </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                              {courses.map((course, index) => (
                                    <motion.div
                                          key={index}
                                          initial={{ opacity: 0, y: 30 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{ delay: index * 0.2 }}
                                          viewport={{ once: true }}
                                          className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${course.popular ? 'border-blue-500 transform scale-105 z-10' : 'border-transparent'}`}
                                    >
                                          {course.popular && (
                                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                                      Most Popular
                                                </div>
                                          )}

                                          <div className="mb-6">
                                                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                                      {course.level}
                                                </span>
                                          </div>

                                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                                          <p className="text-gray-600 mb-6">{course.description}</p>

                                          <div className="mb-8">
                                                <span className="text-4xl font-bold text-gray-900">{course.price}</span>
                                                <span className="text-gray-500 text-sm"> / course</span>
                                          </div>

                                          <div className="space-y-4 mb-8">
                                                {course.features.map((item, i) => (
                                                      <div key={i} className="flex items-center text-gray-700">
                                                            <CheckCircle size={18} className="text-teal-500 mr-3" />
                                                            <span>{item}</span>
                                                      </div>
                                                ))}
                                          </div>

                                          <a
                                                href={`https://wa.me/916203176139?text=Hi, I am interested in ${course.title}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full"
                                          >
                                                <Button
                                                      variant={course.popular ? 'primary' : 'outline'}
                                                      className="w-full flex items-center justify-center gap-2"
                                                >
                                                      Enroll Now <MessageCircle size={18} />
                                                </Button>
                                          </a>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Courses;
