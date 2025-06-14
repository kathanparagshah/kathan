'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:kathanshah04@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`
    
    // Open user's default mail client
    window.location.href = mailtoLink
    
    // Clear form after opening mail client
    setFormData({ name: '', email: '', subject: '', message: '' })
    setSubmitStatus('success')
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'kathanshah04@gmail.com',
      href: 'mailto:kathanshah04@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (602) 815-0971',
      href: 'tel:+16028150971'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Tempe, Arizona',
      href: 'https://maps.google.com/?q=Tempe,+Arizona'
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/kathanparagshah',
      color: 'hover:text-gray-300'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kathan-shah-90ba43263/',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:kathanshah04@gmail.com',
      color: 'hover:text-sky-400'
    }
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="py-20" style={{backgroundColor: 'var(--color-bg-primary)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss opportunities, collaborations, or just connect. I'm always interested in 
              innovative projects at the intersection of technology and economics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-2 text-primary-400 transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="text-gray-100 font-medium group-hover:text-primary-400 transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-100 mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Download Resume Button */}
              <div>
                <motion.button
                  onClick={() => window.open(process.env.NODE_ENV === 'production' ? '/kathan/Kathan Parag Shah.pdf' : '/Kathan Parag Shah.pdf', '_blank')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-cyan text-white font-medium hover:from-primary-600 hover:to-accent-cyan/90 focus:outline-none transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
                </motion.button>
              </div>

              {/* Availability Status */}
              <motion.div 
                className="p-6"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for Opportunities</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Currently seeking internships and full-time positions in software engineering, 
                  data science, and fintech. Open to remote and hybrid opportunities.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none transition-colors duration-300 resize-vertical"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-cyan text-white font-medium hover:from-primary-600 hover:to-accent-cyan/90 focus:outline-none transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  </motion.button>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 text-green-400 text-center"
                    >
                      Mail client opened! Please send the email to complete your message.
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 text-red-400 text-center"
                    >
                      Something went wrong. Please try again or contact me directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact