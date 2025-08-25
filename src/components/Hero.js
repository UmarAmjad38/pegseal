import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Sparkles, Zap, Shield, Brain, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-sm font-medium mb-6 border border-blue-200"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Lock className="w-4 h-4 mr-2 animate-pulse" />
              <Sparkles className="w-4 h-4 mr-2 text-cyan-500 animate-bounce" />
              Independent Trust Mark
              <Zap className="w-4 h-4 ml-2 text-yellow-500 animate-pulse" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            The Privacy & AI Governance{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              (PAG) Seal
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            An independent trust mark recognizing AI applications that demonstrate{' '}
            <motion.span 
              className="text-blue-600 font-semibold"
              animate={{ color: ['#2563eb', '#0891b2', '#2563eb'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              privacy protections and governance assurance
            </motion.span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center relative overflow-hidden group"
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
            <motion.button 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Learn More</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { title: "U.S. Privacy Law Based", desc: "Grounded in U.S. privacy law and AI governance best practices", icon: Lock },
              { title: "AI Governance Best Practices", desc: "Recognizing AI applications that demonstrate essential protections", icon: Shield },
              { title: "Independent Review Process", desc: "Streamlined process validates alignment with trusted standards", icon: Brain }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-200 group-hover:border-blue-400 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                >
                  <item.icon className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4 
          }}
        />
        
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full"
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
          className="absolute top-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full"
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
          className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-300 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            delay: 3 
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full"
          animate={{ 
            scale: [1, 2.5, 1],
            opacity: [0.2, 1, 0.2],
            y: [0, 8, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            delay: 1.5 
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
