import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles, Brain, Zap, ArrowRight, Shield, Lock, Award } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the PAG Seal?",
      answer: "The PAG Seal is an independent trust mark, grounded in U.S. privacy law and AI governance best practices, recognizing AI applications that demonstrate essential privacy protections and governance assurance.",
      icon: Shield
    },
    {
      question: "How does the certification process work?",
      answer: "Using our proprietary privacy and AI governance model, we review how organizations design, manage, and deploy their AI applications. Instead of lengthy audits, our streamlined process validates alignment with trusted standards. The outcome is a seal of readiness that signals to investors, regulators, and customers that your AI is trustworthy, responsible, and prepared for rollout.",
      icon: Lock
    },
    {
      question: "What is Pilot Certification?",
      answer: "Pilot Certification gives organizations an early opportunity to demonstrate that their AI applications meet privacy and governance readiness standards. It delivers recognition today while positioning them to seamlessly transition into the PAG Seal, giving early adopters a visible edge with regulators, investors, and customers.",
      icon: Award
    },
    {
      question: "What expertise does PAG Seal have?",
      answer: "At PAG Seal, we specialize in privacy and AI governance. Our framework supports organizations in demonstrating that their AI applications are built with trust, accountability, and transparency. By establishing privacy and governance baselines drawn from leading laws, regulations, and best-practice frameworks, we provide a clear and structured path toward earning the PAG Seal.",
      icon: Brain
    },
    {
      question: "Who leads PAG Seal?",
      answer: "PAG Seal is led by its founder, a GRC and Privacy Engineer with expertise spanning cybersecurity, privacy law, and artificial intelligence. Drawing on legal, compliance, and technical expertise, PAG Seal is dedicated to setting benchmarks for trustworthy AI and helping organizations gain the recognition they need to earn confidence from investors, regulators, and customers.",
      icon: Sparkles
    },
    {
      question: "What are the benefits of the PAG Seal?",
      answer: "The PAG Seal provides organizations with a seal of readiness that signals to investors, regulators, and customers that their AI is trustworthy, responsible, and prepared for rollout. It helps organizations gain the recognition they need to earn confidence from key stakeholders and demonstrates alignment with privacy and governance best practices.",
      icon: Zap
    },
    {
      question: "How is PAG Seal different from other certifications?",
      answer: "PAG Seal is unique because it combines U.S. privacy law with AI governance best practices in a streamlined process. Instead of lengthy audits, we use our proprietary framework to efficiently validate alignment with trusted standards, making it easier for organizations to demonstrate their AI readiness.",
      icon: Shield
    },
    {
      question: "What standards does PAG Seal follow?",
      answer: "PAG Seal is grounded in U.S. privacy law and AI governance best practices. We establish privacy and governance baselines drawn from leading laws, regulations, and best-practice frameworks to provide a clear and structured path toward earning the PAG Seal.",
      icon: Lock
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Brain className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about the PAG Seal and AI governance certification.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ y: -2 }}
            >
              <motion.div 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 relative"
                whileHover={{ scale: 1.01 }}
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <faq.icon className="w-4 h-4 text-blue-600" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                    )}
                  </motion.div>
                </motion.button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-blue-200 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-cyan-100/20"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6"
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to demonstrate AI trustworthiness?
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Join organizations worldwide in earning the PAG Seal and demonstrating that your AI applications 
                meet privacy and governance readiness standards. Start your journey toward AI trustworthiness today.
              </p>
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
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20"
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
          className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-200 rounded-full opacity-20"
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
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
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
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400 rounded-full"
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
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full"
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

export default FAQ;
