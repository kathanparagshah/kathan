'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Hero3D from './Hero3D'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg overflow-hidden">
      {/* 3D Background */}
      <Hero3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-dark-bg/60" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto w-full">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-gray-100 mb-6 leading-tight px-4"
          >
            <span className="block">Kathan</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan">
              Parag Shah
            </span>
          </motion.h1>
          
          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
          >
            CS & Economics Double Major
            <span className="block mt-2 text-lg text-gray-400">
              Building the intersection of technology and economics
            </span>
          </motion.p>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-6 mb-12"
          >
            <motion.a
              href="https://github.com/kathanparagshah"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-primary-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-400/20"
            >
              <svg className="w-6 h-6 text-gray-300 hover:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/kathan-shah-90ba43263/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/20"
            >
              <svg className="w-6 h-6 text-gray-300 hover:text-accent-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
          </motion.div>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/Kathan Parag Shah.pdf', '_blank')}
              className="px-6 py-3 bg-transparent text-primary-500 font-medium rounded-lg transition-all duration-300 border-2 border-primary-500 text-sm hover:bg-primary-500/10"
            >
              Download Resume
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('demos')}
              className="px-6 py-3 bg-transparent text-accent-cyan font-medium rounded-lg transition-all duration-300 border-2 border-accent-cyan text-sm hover:bg-accent-cyan/10"
            >
              Try Econ Demo
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-transparent text-purple-400 font-medium rounded-lg transition-all duration-300 border-2 border-purple-400 text-sm hover:bg-purple-400/10"
            >
              Contact Me
            </motion.button>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero