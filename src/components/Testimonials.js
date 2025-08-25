import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, Heart, Zap, Shield, Lock, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Privacy & AI Governance",
      role: "Independent Trust Mark",
      content: "The PAG Seal is an independent trust mark, grounded in U.S. privacy law and AI governance best practices, recognizing AI applications that demonstrate essential privacy protections and governance assurance.",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
      icon: Shield
    },
    {
      name: "Streamlined Process",
      role: "Instead of Lengthy Audits",
      content: "Using our proprietary privacy and AI governance model, we review how organizations design, manage, and deploy their AI applications. Instead of lengthy audits, our streamlined process validates alignment with trusted standards.",
      rating: 5,
      color: "from-cyan-500 to-blue-600",
      icon: Lock
    },
    {
      name: "Seal of Readiness",
      role: "Trustworthy AI Recognition",
      content: "The outcome is a seal of readiness that signals to investors, regulators, and customers that your AI is trustworthy, responsible, and prepared for rollout.",
      rating: 5,
      color: "from-blue-600 to-indigo-600",
      icon: Award
    },
    {
      name: "Pilot Certification",
      role: "Early Recognition Opportunity",
      content: "Pilot Certification gives organizations an early opportunity to demonstrate that their AI applications meet privacy and governance readiness standards. It delivers recognition today while positioning them to seamlessly transition into the PAG Seal.",
      rating: 5,
      color: "from-indigo-500 to-purple-500",
      icon: Sparkles
    },
    {
      name: "Expert Leadership",
      role: "GRC & Privacy Engineer",
      content: "PAG Seal is led by its founder, a GRC and Privacy Engineer with expertise spanning cybersecurity, privacy law, and artificial intelligence. Drawing on legal, compliance, and technical expertise.",
      rating: 5,
      color: "from-purple-500 to-pink-500",
      icon: Heart
    },
    {
      name: "Trust Benchmarks",
      role: "Setting Industry Standards",
      content: "PAG Seal is dedicated to setting benchmarks for trustworthy AI and helping organizations gain the recognition they need to earn confidence from investors, regulators, and customers.",
      rating: 5,
      color: "from-pink-500 to-rose-500",
      icon: Zap
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6"
          >
            <Award className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Organizations Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how PAG Seal is helping organizations demonstrate AI trustworthiness and compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* First Column */}
          <div className="space-y-8">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ background: `linear-gradient(to right, ${testimonial.color.split(' ')[1]}, ${testimonial.color.split(' ')[3]})` }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      className="mb-4"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Quote className="w-8 h-8 text-blue-200 group-hover:text-blue-300 transition-colors" />
                    </motion.div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mr-4 border-2 border-blue-200 group-hover:border-blue-400 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 rgba(59, 130, 246, 0.4)",
                            "0 0 0 8px rgba(59, 130, 246, 0)",
                            "0 0 0 0 rgba(59, 130, 246, 0)"
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.3 
                        }}
                      >
                        <testimonial.icon className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Sparkles className="w-5 h-5 text-blue-400" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Second Column - Slightly Down */}
          <div className="space-y-8 mt-16">
            {testimonials.slice(2, 4).map((testimonial, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-300 hover:border-blue-500 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ background: `linear-gradient(to right, ${testimonial.color.split(' ')[1]}, ${testimonial.color.split(' ')[3]})` }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      className="mb-4"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Quote className="w-8 h-8 text-blue-200 group-hover:text-blue-300 transition-colors" />
                    </motion.div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mr-4 border-2 border-blue-300 group-hover:border-blue-500 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 rgba(59, 130, 246, 0.4)",
                            "0 0 0 8px rgba(59, 130, 246, 0)",
                            "0 0 0 0 rgba(59, 130, 246, 0)"
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: (index + 2) * 0.3 
                        }}
                      >
                        <testimonial.icon className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Sparkles className="w-5 h-5 text-blue-400" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Third Column */}
          <div className="space-y-8">
            {testimonials.slice(4, 6).map((testimonial, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index + 4) * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ background: `linear-gradient(to right, ${testimonial.color.split(' ')[1]}, ${testimonial.color.split(' ')[3]})` }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      className="mb-4"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Quote className="w-8 h-8 text-blue-200 group-hover:text-blue-300 transition-colors" />
                    </motion.div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mr-4 border-2 border-blue-200 group-hover:border-blue-400 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 rgba(59, 130, 246, 0.4)",
                            "0 0 0 8px rgba(59, 130, 246, 0)",
                            "0 0 0 0 rgba(59, 130, 246, 0)"
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: (index + 4) * 0.3 
                        }}
                      >
                        <testimonial.icon className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Sparkles className="w-5 h-5 text-blue-400" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button 
            className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
            />
            <Shield className="mr-2 w-5 h-5 group-hover:animate-pulse" />
            Apply For Pilot Certification
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-200 rounded-full opacity-20"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: 1 
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full"
          animate={{ 
            scale: [1, 3, 1],
            opacity: [0.3, 1, 0.3],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: 2 
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full"
          animate={{ 
            scale: [1, 2.5, 1],
            opacity: [0.4, 1, 0.4],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            delay: 3 
          }}
        />
      </div>
    </section>
  );
};

export default Testimonials;
