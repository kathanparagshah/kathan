'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Code, Database, TrendingUp, BarChart } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  featured: boolean
  category: 'frontend' | 'backend' | 'data' | 'finance' | 'fullstack'
}

const Projects = () => {
  const [filter, setFilter] = useState<string>('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects: Project[] = [
    {
      id: 1,
      title: 'Wheel Strategy Options',
      description: 'Advanced options trading platform with covered call screener capabilities and real-time market data analysis.',
      image: '/projects/wheel-strategy.svg',
      tags: ['React', 'JavaScript', 'Node.js', 'Financial APIs', 'Chart.js'],
      github: 'https://github.com/atitkothari/pt-wss',
      demo: 'https://wheelstrategyoptions.com/covered-call-screener',
      featured: true,
      category: 'finance'
    },
    {
      id: 2,
      title: 'MegaShop',
      description: 'Modern e-commerce platform with responsive design, product catalog, shopping cart, and user authentication.',
      image: '/projects/megashop.svg',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'E-commerce'],
      github: 'https://github.com/kathanparagshah/MegaShop',
      demo: 'https://kathanparagshah.github.io/MegaShop/',
      featured: true,
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Mean Variance Standard Deviation Calculator',
      description: 'Statistical analysis tool that calculates mean, variance, and standard deviation for matrix data without manual computation.',
      image: '/projects/stats-calculator.svg',
      tags: ['Python', 'NumPy', 'Statistics', 'Data Analysis'],
      github: 'https://github.com/kathanparagshah/Mean-Variance-Standard-Deviation-Calculator',
      featured: false,
      category: 'data'
    },
    {
      id: 4,
      title: 'Demographic Data Analyzer',
      description: 'Data analysis project that explores demographic patterns using pandas to extract meaningful population insights.',
      image: '/projects/demographic-analyzer.svg',
      tags: ['Python', 'Pandas', 'Data Analysis', 'Statistics'],
      github: 'https://github.com/kathanparagshah/Demographic-Data-Analyzer',
      featured: false,
      category: 'data'
    },
    {
      id: 5,
      title: 'Medical Data Visualizer',
      description: 'Healthcare data visualization tool that creates categorical plots and heat maps to identify patterns in complex health examination data.',
      image: '/projects/medical-visualizer.svg',
      tags: ['Python', 'Matplotlib', 'Seaborn', 'Pandas', 'Data Visualization'],
      github: 'https://github.com/kathanparagshah/Medical-Data-Visualizer',
      featured: true,
      category: 'data'
    },
    {
      id: 6,
      title: 'Page View Time Series Visualizer',
      description: 'Time series analysis tool that visualizes website traffic patterns and identifies yearly and monthly trends.',
      image: '/projects/time-series.svg',
      tags: ['Python', 'Matplotlib', 'Seaborn', 'Pandas', 'Time Series Analysis'],
      github: 'https://github.com/kathanparagshah/Page-View-Time-Series-Visualizer',
      featured: false,
      category: 'data'
    },
    {
      id: 7,
      title: 'Sea Level Predictor',
      description: 'Environmental data analysis project that predicts future sea level changes using predictive modeling and climate data.',
      image: '/projects/sea-level.svg',
      tags: ['Python', 'Matplotlib', 'Pandas', 'Linear Regression', 'Climate Data'],
      github: 'https://github.com/kathanparagshah/Sea-Level-Predictor',
      featured: false,
      category: 'data'
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        filter === 'featured' 
          ? project.featured 
          : project.tags.includes(filter) || project.category === filter
      )

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'frontend':
        return <Code className="w-4 h-4" />
      case 'backend':
        return <Database className="w-4 h-4" />
      case 'data':
        return <BarChart className="w-4 h-4" />
      case 'finance':
        return <TrendingUp className="w-4 h-4" />
      default:
        return <Code className="w-4 h-4" />
    }
  }

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'CSS', label: 'CSS' },
    { id: 'Chart.js', label: 'Chart.js' },
    { id: 'Climate Data', label: 'Climate Data' },
    { id: 'Data Analysis', label: 'Data Analysis' },
    { id: 'Data Visualization', label: 'Data Visualization' },
    { id: 'E-commerce', label: 'E-commerce' },
    { id: 'Financial APIs', label: 'Financial APIs' },
    { id: 'HTML', label: 'HTML' },
    { id: 'JavaScript', label: 'JavaScript' },
    { id: 'Linear Regression', label: 'Linear Regression' },
    { id: 'Matplotlib', label: 'Matplotlib' },
    { id: 'Node.js', label: 'Node.js' },
    { id: 'NumPy', label: 'NumPy' },
    { id: 'Pandas', label: 'Pandas' },
    { id: 'Python', label: 'Python' },
    { id: 'React', label: 'React' },
    { id: 'Responsive Design', label: 'Responsive Design' },
    { id: 'Seaborn', label: 'Seaborn' },
    { id: 'Statistics', label: 'Statistics' },
    { id: 'Time Series Analysis', label: 'Time Series Analysis' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work across computer science and economics, 
            from data visualization to full-stack applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === filterItem.id 
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20 scale-105' 
                : 'bg-dark-surface text-gray-300 hover:bg-dark-surface-hover border border-gray-700/50'}`}
            >
              {filterItem.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-dark-surface rounded-xl overflow-hidden transition-all duration-500"
                whileHover={{
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 5,
                  z: 10,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-dark-bg to-dark-surface-hover overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="text-primary-400 text-6xl">
                        {getCategoryIcon(project.category)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1 rounded bg-dark-bg">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="ml-auto text-xs font-medium text-primary-400 bg-primary-900/30 px-2 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-dark-bg text-gray-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No projects found matching the selected filter.
            </p>
            <button 
              onClick={() => setFilter('all')}
              className="mt-4 px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
            >
              View All Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects