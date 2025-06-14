'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Image from 'next/image'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const photoVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: -90,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    }
  }

  const quickFacts = [
    { label: 'University', value: 'Arizona State University' },
    { label: 'Major', value: 'Bachelors of Science in Computer Science and Economics' },
    { label: 'Year', value: 'Senior (Class of 2026)' },
    { label: 'Location', value: 'Tempe, AZ' },
    { label: 'Interests', value: 'Coffee, Comic books, Adam Sandler movies, Sci-fi films, Indie music' },
    { label: 'Languages', value: 'English, German, Hindi, Gujarati' }
  ]

  // Determine if we're in production to use the correct image path
  const isProd = process.env.NODE_ENV === 'production'
  const imagePath = isProd ? '/kathan/profile.jpeg' : '/profile.jpeg'

  return (
    <section id="about" className="py-20" style={{backgroundColor: 'var(--color-bg-primary)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Photo */}
          <motion.div 
            variants={photoVariants}
            className="relative flex justify-center lg:justify-start"
            style={{ perspective: '1000px' }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ 
                  rotateY: 15,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary-400/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src={imagePath}
                  alt="Kathan Parag Shah"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400/20 to-accent-cyan/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent-cyan rounded-full opacity-60"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan">Me</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Computer Science and Economics double major at Arizona State University, 
                fascinated by the intersection of technology and financial markets. My journey 
                combines rigorous analytical thinking with creative problem-solving to build 
                innovative solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me buried in comic books (Marvel fan for life!), 
                binge-watching Adam Sandler comedies, or exploring the latest sci-fi films. I practically 
                run on espresso and can often be spotted in my favorite hoodie, defying CS stereotypes 
                one comfy outfit at a time. My ideal weekend? A fresh cup of coffee, a new comic, and 
                some indie music playing in the background.
              </p>
            </motion.div>

            {/* Quick Facts Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-100 mb-6">Quick Facts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.1
                        }
                      }
                    }}
                    className="mb-4"
                  >
                    <dt className="text-sm font-medium text-primary-400 mb-1">
                      {fact.label}
                    </dt>
                    <dd className="text-gray-200 font-medium">
                      {fact.value}
                    </dd>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Preview - Removed as requested */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About