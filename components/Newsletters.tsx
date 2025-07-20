import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Calendar, TrendingUp, BookOpen, ExternalLink } from 'lucide-react'

const Newsletters = () => {
  const newsletters = [
    {
      title: "Anne Wojcicki Poised to Reclaim 23andMe After 305 Million Bid",
      description: "Analysis of Anne Wojcicki's $305 million bid to reclaim 23andMe through bankruptcy proceedings, exploring the challenges of rebuilding trust in genetics testing and pivoting business models.",
      frequency: "Daily",
      date: "June 17, 2025",
      topics: ["Biotech", "Corporate Finance", "Data Privacy", "Business Strategy"],
      status: "Active",
      link: "https://www.linkedin.com/pulse/anne-wojcicki-poised-reclaim-23andme-after-305-million-kathan-shah-urrjc/?trackingId=RLSYNGdZQna5lPYGEokZoA%3D%3D"
    },
    {
      title: "Antimetal Raises $20M to Automate Cloud Infrastructure",
      description: "Analysis of Antimetal's Series A funding and its implications for cloud infrastructure automation, exploring market trends and career opportunities in DevOps and cloud computing.",
      frequency: "Daily",
      date: "June 16, 2025",
      topics: ["Cloud Computing", "Startups", "Infrastructure", "Career Insights"],
      status: "Active",
      link: "https://www.linkedin.com/pulse/antimetal-raises-20m-automate-cloud-infrastructure-kathan-shah-meidc/?trackingId=pihYIurPRv2RgMKMfhJGQw%3D%3D"
    },
    {
      title: "Breaking Up to Break Through: What WBD's 2025 Split Teaches Us About Media Strategy",
      description: "Deep dive into Warner Bros. Discovery's strategic split into two companies, examining the shift from consolidation to specialization in media and its implications for the industry.",
      frequency: "Daily",
      date: "June 15, 2025",
      topics: ["Media Strategy", "Corporate Finance", "M&A", "Industry Analysis"],
      status: "Active",
      link: "https://www.linkedin.com/pulse/breaking-up-break-through-what-wbds-2025-split-teaches-kathan-shah-unolc/?trackingId=dxSfzw3cRye4Q6qO1tbdqg%3D%3D"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-100 mb-6"
        >
          <span className="text-primary-400">Econ Bites</span>
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Stay updated with my latest insights on Economics and the Stock Market through these curated Newsletters
        </motion.p>
        <motion.div 
          variants={itemVariants}
          className="mt-4 flex items-center justify-center space-x-2 text-primary-400"
        >
          <Mail className="w-5 h-5" />
          <span className="text-lg font-medium">100+ subscribers following daily</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {newsletters.map((newsletter, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="bg-dark-surface border border-gray-700/50 rounded-xl p-6 hover:border-primary-400/50 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 group-hover:text-primary-400 transition-colors duration-300">
                    {newsletter.title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      newsletter.status === 'Active' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      {newsletter.status}
                    </span>
                  </div>
                </div>
              </div>
              <motion.a
                href={newsletter.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {newsletter.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{newsletter.frequency}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>{newsletter.date}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {newsletter.topics.map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <motion.a
                href={newsletter.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-4 py-2 bg-primary-500/10 border border-primary-400/30 text-primary-400 rounded-lg hover:bg-primary-500/20 hover:border-primary-400/50 transition-all duration-300 font-medium text-center block"
              >
                View my Article
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Newsletter Signup CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 border border-primary-400/20 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary-500/20 rounded-full">
              <BookOpen className="w-8 h-8 text-primary-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            Want to stay updated?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join 100+ readers who get my latest insights on Economics and the Stock Market around the world delivered directly to their inbox.
          </p>
          <div className="flex justify-center">
            <motion.a
              href="https://www.linkedin.com/newsletters/econbites-quick-insights-7339736257368887296/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300 font-medium"
            >
              Subscribe
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Newsletters