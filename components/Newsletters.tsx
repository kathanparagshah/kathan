'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { readArticlesFromExcel, Article } from '../utils/readArticles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function Newsletters() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Load articles from Excel file
    const loadedArticles = readArticlesFromExcel();
    setArticles(loadedArticles);
    setDisplayedArticles(loadedArticles.slice(0, 10)); // Show top 10 initially
  }, []);

  const handleShowMore = () => {
    if (showAll) {
      setDisplayedArticles(articles.slice(0, 10));
      setShowAll(false);
    } else {
      setDisplayedArticles(articles);
      setShowAll(true);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateString;
    }
  };

  return (
    <section id="newsletters" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Latest Newsletters
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Stay updated with my latest insights on technology, business strategy, and market analysis
          </motion.p>
        </motion.div>

        {/* Compact Article List */}
        <motion.div
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                Recent Articles ({articles.length} total)
              </h3>
            </div>

            {/* Article List */}
            <div className="max-h-96 overflow-y-auto">
              {displayedArticles.length > 0 ? (
                displayedArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
                  >
                    <div className="flex-1 min-w-0">
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h4 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 truncate pr-4">
                          {article.title}
                        </h4>
                        <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                      </a>
                    </div>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </motion.div>
                ))
              ) : (
                <div className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                  <Mail className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No articles found. Please check the Articles.xlsx file.</p>
                </div>
              )}
            </div>

            {/* Show More/Less Button */}
            {articles.length > 10 && (
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleShowMore}
                  className="w-full px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  {showAll ? `Show Less (Top 10)` : `Show All ${articles.length} Articles`}
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Newsletter Subscription CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to stay updated?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to my newsletter for weekly insights on technology trends, business strategy, and career development in the digital age.
          </p>
          <motion.a
            href="https://www.linkedin.com/in/kathanparagshah/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 mr-2" />
            Follow on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}