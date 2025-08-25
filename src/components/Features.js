import React from 'react';
import { motion } from 'framer-motion';
import { Database, Search, MessageSquare, Users, Zap, Shield, Globe, BarChart3, Sparkles, ArrowRight, Lock, Brain, Award, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Our Mission",
      description: "The PAG Seal is an independent trust mark, grounded in U.S. privacy law and AI governance best practices, recognizing AI applications that demonstrate essential privacy protections and governance assurance.",
      items: [
        "Independent trust mark for AI applications",
        "Grounded in U.S. privacy law",
        "AI governance best practices",
        "Essential privacy protections",
        "Governance assurance validation",
        "Streamlined review process"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Our Expertise",
      description: "At PAG Seal, we specialize in privacy and AI governance. Our framework supports organizations in demonstrating that their AI applications are built with trust, accountability, and transparency.",
      items: [
        "Privacy and AI governance specialization",
        "Trust, accountability, and transparency",
        "Clear and structured certification path",
        "Leading laws and regulations compliance",
        "Best-practice frameworks alignment",
        "Organizational AI readiness assessment"
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Pilot Certification",
      description: "Pilot Certification gives organizations an early opportunity to demonstrate that their AI applications meet privacy and governance readiness standards.",
      items: [
        "Early opportunity for recognition",
        "Privacy readiness validation",
        "Governance standards compliance",
        "Seamless transition to PAG Seal",
        "Visible edge with regulators",
        "Investor and customer confidence"
      ],
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Lock,
      title: "Proprietary Framework",
      description: "Using our proprietary privacy and AI governance model, we review how organizations design, manage, and deploy their AI applications.",
      items: [
        "Proprietary review model",
        "AI application design assessment",
        "Management process evaluation",
        "Deployment strategy validation",
        "Instead of lengthy audits",
        "Streamlined validation process"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: CheckCircle,
      title: "Seal of Readiness",
      description: "The outcome is a seal of readiness that signals to investors, regulators, and customers that your AI is trustworthy, responsible, and prepared for rollout.",
      items: [
        "Seal of readiness certification",
        "Investor confidence signaling",
        "Regulator trust building",
        "Customer assurance",
        "Trustworthy AI validation",
        "Responsible AI recognition"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Our Team",
      description: "PAG Seal is led by its founder, a GRC and Privacy Engineer with expertise spanning cybersecurity, privacy law, and artificial intelligence.",
      items: [
        "GRC and Privacy Engineer leadership",
        "Cybersecurity expertise",
        "Privacy law knowledge",
        "Artificial intelligence specialization",
        "Legal and compliance background",
        "Technical expertise foundation"
      ],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
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
            Privacy & AI Governance Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive framework for demonstrating AI trustworthiness and compliance with privacy standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})` }}
                />
                
                <div className="flex items-start space-x-4 relative z-10">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: itemIndex * 0.2 }}
                          />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 relative"
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
            
            <div className="text-center relative z-10">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.4)",
                    "0 0 0 20px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Setting benchmarks for trustworthy AI
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Drawing on legal, compliance, and technical expertise, PAG Seal is dedicated to setting benchmarks for trustworthy AI 
                and helping organizations gain the recognition they need to earn confidence from investors, regulators, and customers.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                {[
                  "Legal expertise",
                  "Compliance knowledge", 
                  "Technical proficiency",
                  "Trust benchmarks"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    {item}
                  </motion.div>
                ))}
              </div>
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
          className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full"
          animate={{ 
            scale: [1, 2.5, 1],
            opacity: [0.3, 1, 0.3],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: 2 
          }}
        />
      </div>
    </section>
  );
};

export default Features;
