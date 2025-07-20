'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

interface ExperienceItem {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  achievements: string[]
  type: 'work' | 'education' | 'project'
  color: string
}

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedTech, setExpandedTech] = useState<{[key: number]: boolean}>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'ULC Grader Finance & Economics Teaching Fellow',
      company: 'Global Launch, Arizona State University',
      location: 'Tempe, AZ',
      period: 'July 2025 – Present',
      description: [
        'Provided detailed feedback on 100+ finance and economics assignments per semester',
        'Managed Canvas workflow, grading rubrics, and maintained real-time progress tracking',
        'Analyzed grade data to identify at-risk students, reducing withdrawal rates by 20%'
      ],
      technologies: ['Canvas LMS', 'Data Analysis', 'Educational Technology', 'Statistical Analysis', 'Academic Assessment'],
      achievements: [
        'Graded 100+ assignments per semester',
        'Reduced course withdrawal rates by 20%',
        'Improved overall class retention through targeted interventions'
      ],
      type: 'work',
      color: '#10b981'
    },
    {
      id: 2,
      title: 'Business Operation Specialist',
      company: 'Global Launch, Arizona State University',
      location: 'Tempe, AZ',
      period: 'June 2025 – Present',
      description: [
        'Built automated reporting pipelines with Excel macros and SQL, cutting generation time by 30%',
        'Led cross-functional teams to launch 3 service enhancements within quarterly deadlines',
        'Negotiated vendor contracts, securing 10% reduction in annual expenditures'
      ],
      technologies: ['Excel Macros', 'SQL', 'Process Automation', 'Vendor Management', 'Cross-functional Coordination'],
      achievements: [
        'Cut report generation time by 30%',
        'Launched 3 service enhancements within quarterly deadlines',
        'Secured 10% reduction in annual expenditures'
      ],
      type: 'work',
      color: '#06b6d4'
    },
    {
      id: 3,
      title: 'Memberships Services Supervisor',
      company: 'Sun Devil Fitness Complex',
      location: 'Tempe, AZ',
      period: 'June 2025 – Present',
      description: [
        'Supervised membership operations for 2,000+ active members, implementing data-driven retention strategies that increased renewal rates by 35%',
        'Analyzed member usage patterns and facility metrics to optimize staffing schedules and resource allocation across peak hours',
        'Developed automated reporting systems for membership analytics, reducing manual processing time by 50% and improving decision-making accuracy'
      ],
      technologies: ['Python', 'SQL', 'Excel', 'Data Analytics', 'Reporting Systems'],
      achievements: [
        'Increased membership renewal rates by 35%',
        'Reduced manual processing time by 50%',
        'Optimized staffing for 2,000+ members'
      ],
      type: 'work',
      color: '#8b5cf6'
    },
    {
      id: 4,
      title: 'Security Aide',
      company: 'ASU Gammage',
      location: 'Tempe, AZ',
      period: 'February 2025 – March 2025',
      description: [
        'Analyzed security incident patterns across 15+ campus locations to identify high-risk areas and optimize patrol routes',
        'Implemented data-driven surveillance monitoring protocols, reducing response time to incidents by 40%',
        'Collected and processed safety metrics from 300+ daily interactions to improve campus security protocols'
      ],
      technologies: ['Data Analysis', 'Pattern Recognition', 'Security Systems', 'Statistical Analysis'],
      achievements: [
        'Reduced incident response time by 40%',
        'Analyzed 15+ campus locations',
        'Processed 300+ daily safety interactions'
      ],
      type: 'work',
      color: '#f59e0b'
    },
    {
      id: 5,
      title: 'Information Technology Support Specialist',
      company: 'W.P. Carey School of Business',
      location: 'Tempe, AZ',
      period: 'November 2024 – January 2025',
      description: [
        'Developed automated data pipelines using Python and Django to process 500+ daily IT support tickets',
        'Performed statistical analysis on system performance metrics, identifying bottlenecks that improved efficiency by 25%',
        'Created predictive models to forecast hardware failures, reducing unplanned downtime by 30%'
      ],
      technologies: ['Python', 'Django', 'SQL', 'Machine Learning', 'Statistical Analysis'],
      achievements: [
        'Processed 500+ daily support tickets',
        'Improved system efficiency by 25%',
        'Reduced unplanned downtime by 30%'
      ],
      type: 'work',
      color: '#ef4444'
    },
    {
      id: 6,
      title: 'Technology Assistant',
      company: 'Sun Devil Athletics',
      location: 'Tempe, AZ',
      period: 'October 2023 – November 2024',
      description: [
        'Analyzed performance data from 150+ systems using SQL queries to identify optimization opportunities',
        'Built automated monitoring dashboards that tracked 95% issue resolution rate within 24-hour SLA',
        'Applied machine learning techniques to predict system failures, improving operational efficiency by 30%'
      ],
      technologies: ['SQL', 'Machine Learning', 'Dashboard Development', 'Performance Analytics'],
      achievements: [
        '95% issue resolution within 24-hour SLA',
        'Analyzed 150+ systems performance',
        'Improved operational efficiency by 30%'
      ],
      type: 'work',
      color: '#84cc16'
    },
    {
      id: 7,
      title: 'Desk Assistant',
      company: 'University Housing',
      location: 'Tempe, AZ',
      period: 'October 2023 – November 2023',
      description: [
        'Collected and analyzed residential safety data from 300+ student interactions to identify risk patterns',
        'Developed statistical models to predict security incidents, reducing unauthorized access by 20%',
        'Created data visualization reports on safety metrics that informed policy decisions for housing staff'
      ],
      technologies: ['Statistical Modeling', 'Data Visualization', 'Risk Analysis', 'Python'],
      achievements: [
        'Reduced unauthorized access by 20%',
        'Analyzed 300+ student interactions',
        'Informed policy decisions with data reports'
      ],
      type: 'work',
      color: '#a855f7'
    },
    {
      id: 8,
      title: 'Program Activator',
      company: 'Changemaker Central',
      location: 'Tempe, AZ',
      period: 'September 2023 – November 2023',
      description: [
        'Analyzed participant engagement data from 7 events with 100+ attendees to optimize future programming',
        'Applied A/B testing methodologies to workshop formats, increasing participant retention by 25%',
        'Built predictive models using attendance patterns to forecast event success and resource allocation'
      ],
      technologies: ['A/B Testing', 'Predictive Modeling', 'Event Analytics', 'Statistical Analysis'],
      achievements: [
        'Increased participant retention by 25%',
        'Analyzed 7 events with 100+ attendees',
        'Optimized resource allocation with predictive models'
      ],
      type: 'work',
      color: '#ec4899'
    },
    {
      id: 9,
      title: 'Bachelor of Science in Computer Science and Economics',
      company: 'Arizona State University',
      location: 'Tempe, AZ',
      period: '2022 - 2026 (Expected)',
      description: [
        'GPA: 3.8/4.0, Dean\'s List for 4 consecutive semesters with focus on data science and machine learning',
        'Relevant Coursework: Data Structures, Machine Learning, Statistical Analysis, Database Systems, Econometrics',
        'Completed 5+ data science projects using Python, R, and SQL with real-world datasets and predictive modeling'
      ],
      technologies: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistical Analysis', 'Econometrics'],
      achievements: [
        'Dean\'s List for 4 consecutive semesters',
        'GPA: 3.8/4.0',
        'Completed 5+ data science projects'
      ],
      type: 'education',
      color: '#6366f1'
    }
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  const toggleTechExpansion = (expId: number, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click when clicking on +more
    setExpandedTech(prev => ({
      ...prev,
      [expId]: !prev[expId]
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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



  return (
    <section id="experience" className="py-20" style={{backgroundColor: 'var(--color-bg-primary)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ opacity }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A timeline of my academic and professional experiences, 
              showcasing growth in both computer science and economics.
            </p>
          </motion.div>

          {/* 3D Carousel */}
          <motion.div 
            ref={ref}
            variants={itemVariants} 
            className="relative"
            style={{ rotateX }}
          >
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-dark-surface/80 backdrop-blur-sm border border-gray-600/50 rounded-full p-3 text-gray-300 hover:text-white hover:border-primary-400/50 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-dark-surface/80 backdrop-blur-sm border border-gray-600/50 rounded-full p-3 text-gray-300 hover:text-white hover:border-primary-400/50 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Experience Cards */}
              <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                {experiences.map((exp, index) => {
                  const offset = index - activeIndex
                  const absOffset = Math.abs(offset)
                  const isActive = index === activeIndex
                  
                  return (
                    <motion.div
                      key={exp.id}
                      className="absolute w-96 md:w-[28rem] h-96 md:h-[28rem] bg-dark-surface rounded-xl border border-gray-700/50 p-6 cursor-pointer"
                      style={{
                        transform: `
                          translateX(${offset * 100}px) 
                          translateZ(${isActive ? 0 : -100 * absOffset}px)
                          rotateY(${offset * 15}deg)
                          scale(${isActive ? 1 : 0.8 - absOffset * 0.1})
                        `,
                        opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                        zIndex: isActive ? 10 : 10 - absOffset
                      }}
                      animate={{
                        transform: `
                          translateX(${offset * 100}px) 
                          translateZ(${isActive ? 0 : -100 * absOffset}px)
                          rotateY(${offset * 15}deg)
                          scale(${isActive ? 1 : 0.8 - absOffset * 0.1})
                        `
                      }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      onClick={() => setActiveIndex(index)}
                    >
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: exp.color }}
                            />
                            <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-100 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Location and Period */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        <ul className="text-sm text-gray-300 space-y-1">
                          {exp.description.slice(0, 2).map((desc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary-400 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {(expandedTech[exp.id] ? exp.technologies : exp.technologies.slice(0, 4)).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded border border-gray-600/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 4 && (
                            <button
                              onClick={(e) => toggleTechExpansion(exp.id, e)}
                              className="px-2 py-1 text-xs text-gray-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                            >
                              {expandedTech[exp.id] 
                                ? 'Show less' 
                                : `+${exp.technologies.length - 4} more`
                              }
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Achievements Preview */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-gray-700/50 pt-3"
                        >
                          <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h4>
                          <ul className="text-xs text-gray-400 space-y-1">
                            {exp.achievements.slice(0, 2).map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-accent-cyan mt-1 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-primary-400 w-6'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {experiences.filter(exp => exp.type === 'work').length}
                </div>
                <div className="text-gray-300">Work Experiences</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {new Set(experiences.flatMap(exp => exp.technologies)).size}
                </div>
                <div className="text-gray-300">Technologies Used</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience