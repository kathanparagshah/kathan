import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ExternalLink, Calendar, BookOpen } from 'lucide-react'

const Newsletters = () => {
  const newsletters = [
    {
      title: "The SPAC Resurgence of 2025: A More Experienced Boom",
      date: "07/19/2025",
      link: "https://www.linkedin.com/pulse/spac-resurgence-2025-more-experienced-boom-kathan-shah-nwnoc/"
    },
    {
      title: "WeWork India's IPO: A Milestone for Flexible Workspaces and Student Entrepreneurs",
      date: "07/18/2025",
      link: "https://www.linkedin.com/pulse/wework-indias-ipo-milestone-flexible-workspaces-student-kathan-shah-bwunc/"
    },
    {
      title: "Why Blackstone's $25 B Bet on Data Centers and Power in Pennsylvania Matters",
      date: "07/17/2025",
      link: "https://www.linkedin.com/pulse/why-blackstones-25b-bet-data-centers-power-matters-kathan-shah-5x0jc/"
    },
    {
      title: "Why Biotech IPOs Are Slowing and What It Means for Future Innovators",
      date: "07/16/2025",
      link: "https://www.linkedin.com/pulse/why-biotech-ipos-slowing-what-means-future-innovators-kathan-shah-bphac/"
    },
    {
      title: "How Bonus Homes is Changing Home Equity",
      date: "07/15/2025",
      link: "https://www.linkedin.com/pulse/how-bonus-homes-changing-home-equity-kathan-shah-bolpc/"
    },
    {
      title: "Unlocking Mathematical Superintelligence: Harmonic AI's $100 M Boost",
      date: "07/14/2025",
      link: "https://www.linkedin.com/pulse/unlocking-mathematical-superintelligence-harmonic-ais-kathan-shah-sda6c/"
    },
    {
      title: "Building Credit While Paying Rent Bilt's $250M Raise at a $10.75B Valuation",
      date: "07/13/2025",
      link: "https://www.linkedin.com/pulse/building-credit-while-paying-rent-bilts-250m-raise-1075b-kathan-shah-gcqrc/"
    },
    {
      title: "Bricks Meet Bots Private Credit Soars and VC Gets a Makeover",
      date: "07/12/2025",
      link: "https://www.linkedin.com/pulse/bricks-meet-bots-private-credit-soars-vc-gets-makeover-kathan-shah-og8yc/"
    },
    {
      title: "Climate Cancel Culture: Rainmaker's Quest and the Perils of Misinformation",
      date: "07/11/2025",
      link: "https://www.linkedin.com/pulse/climate-cancel-culture-rainmakers-quest-perils-kathan-shah-kgxfc/"
    },
    {
      title: "Defying the Odds: How Centivax is Pioneering a Universal Flu Vaccine Amidst Skepticism",
      date: "07/10/2025",
      link: "https://www.linkedin.com/pulse/defying-odds-how-centivax-pioneering-universal-flu-vaccine-shah-v8sjc/"
    },
    {
      title: "No Country for Old Funds: Why LPs Must Act Now",
      date: "07/09/2025",
      link: "https://www.linkedin.com/pulse/country-old-funds-why-lps-must-act-now-kathan-shah-rfn2c/"
    },
    {
      title: "Deep Sea Mining Breakthrough: Impossible Metals",
      date: "07/07/2025",
      link: "https://www.linkedin.com/pulse/deep-sea-mining-breakthrough-impossible-metals-kathan-shah-9zauc/"
    },
    {
      title: "Bilt's Rent Rewards Rocket to a $10B Valuation",
      date: "07/06/2025",
      link: "https://www.linkedin.com/pulse/bilts-rent-rewards-rocket-10b-valuation-kathan-shah-807mc/"
    },
    {
      title: "The Last Stand of G/O Media: What Students Can Learn from a Private Equity Exit",
      date: "07/05/2025",
      link: "https://www.linkedin.com/pulse/last-stand-go-media-what-students-can-learn-from-private-kathan-shah-pjbcc/"
    },
    {
      title: "AI Eats Venture Capital: A Deep Dive into Funding Trends",
      date: "07/04/2025",
      link: "https://www.linkedin.com/pulse/ai-eats-venture-capital-deep-dive-funding-trends-kathan-shah-2jcsc/"
    },
    {
      title: "iPhone Showdown: OpenAI vs Anthropic in Siri's Next Era",
      date: "07/03/2025",
      link: "https://www.linkedin.com/pulse/iphone-showdown-openai-vs-anthropic-siris-next-era-kathan-shah-ghjyc/"
    },
    {
      title: "5 Percent or Bust – Why Defense Tech Is Poised for Lift-Off",
      date: "07/02/2025",
      link: "https://www.linkedin.com/pulse/5-percent-bust-why-defense-tech-poised-lift-off-kathan-shah-3nfpc/"
    },
    {
      title: "Sunset on Solar? Why Students Should Watch the Energy Debate",
      date: "07/01/2025",
      link: "https://www.linkedin.com/pulse/sunset-solar-why-students-should-watch-energy-debate-kathan-shah-cwkec/"
    },
    {
      title: "Reunion, Rivalry and the Road Ahead",
      date: "06/30/2025",
      link: "https://www.linkedin.com/pulse/reunion-rivalry-road-ahead-kathan-shah-xetuc/"
    },
    {
      title: "When Billions Hang in the Balance A Biotech Crisis at Apple Tree Partners",
      date: "06/28/2025",
      link: "https://www.linkedin.com/pulse/when-billions-hang-balance-biotech-crisis-apple-tree-partners-shah-ddvoc/"
    },
    {
      title: "Reversing Convention: The 2025 M&A Comeback",
      date: "06/27/2025",
      link: "https://www.linkedin.com/pulse/reversing-convention-2025-ma-comeback-kathan-shah-qtiyc/"
    },
    {
      title: "The Power and Paradox of Modern Venture Capital",
      date: "06/26/2025",
      link: "https://www.linkedin.com/pulse/power-paradox-modern-venture-capital-kathan-shah-nrdhf/"
    },
    {
      title: "The Journey of a Crooked VC and Oak Investment Partners at Circle IPO",
      date: "06/25/2025",
      link: "https://www.linkedin.com/pulse/journey-crooked-vc-oak-investment-partners-circle-ipo-kathan-shah-dlmcc/"
    },
    {
      title: "Bubble Blast Circle's 675 Percent Rise and the IPO Debate",
      date: "06/24/2025",
      link: "https://www.linkedin.com/pulse/bubble-blast-circles-675-percent-rise-ipo-debate-kathan-shah-xr3qc/"
    },
    {
      title: "Charting the Future of AI Driven Procurement",
      date: "06/23/2025",
      link: "https://www.linkedin.com/pulse/charting-future-ai-driven-procurement-kathan-shah-ea6tc/"
    },
    {
      title: "Meta's Bold AI Talent Gambit",
      date: "06/22/2025",
      link: "https://www.linkedin.com/pulse/metas-bold-ai-talent-gambit-kathan-shah-l5ywc/"
    },
    {
      title: "Reviving Section 174 for Startup Innovation",
      date: "06/21/2025",
      link: "https://www.linkedin.com/pulse/reviving-section-174-startup-innovation-kathan-shah-tmubc/"
    },
    {
      title: "Pano AI Secures 44 Million to Boost Early Wildfire Detection",
      date: "06/20/2025",
      link: "https://www.linkedin.com/pulse/pano-ai-secures-44-million-boost-early-wildfire-detection-kathan-shah-penzf/"
    },
    {
      title: "IPO Momentum Extends to Biotech and Insurtech",
      date: "06/19/2025",
      link: "https://www.linkedin.com/pulse/ipo-momentum-extends-biotech-insurtech-kathan-shah-ucngc/"
    },
    {
      title: "Emerging Private Market Funds in Tough Times",
      date: "06/18/2025",
      link: "https://www.linkedin.com/pulse/emerging-private-market-funds-tough-times-kathan-shah-y4pnc/"
    },
    {
      title: "Anne Wojcicki Poised to Reclaim 23andMe After 305 Million Bid",
      date: "06/17/2025",
      link: "https://www.linkedin.com/pulse/anne-wojcicki-poised-reclaim-23andme-after-305-million-kathan-shah-urrjc/"
    },
    {
      title: "A New Era of Customer Trust as Conveyor Raises 20 Million in Series B Funding",
      date: "06/16/2025",
      link: "https://www.linkedin.com/pulse/new-era-customer-trust-conveyor-raises-20-million-series-kathan-shah-pvrbc/"
    },
    {
      title: "Antimetal Raises $20M to Automate Cloud Infrastructure",
      date: "06/15/2025",
      link: "https://www.linkedin.com/pulse/antimetal-raises-20m-automate-cloud-infrastructure-kathan-shah-meidc/"
    },
    {
      title: "Breaking Up to Break Through: What WBD's 2025 Split Teaches Us About Media Strategy",
      date: "06/14/2025",
      link: "https://www.linkedin.com/pulse/breaking-up-break-through-what-wbds-2025-split-teaches-kathan-shah-unolc/"
    }
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
        duration: 0.4,
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
          Stay updated with my latest insights on Economics and the Stock Market through these curated articles
        </motion.p>
        <motion.div 
          variants={itemVariants}
          className="mt-4 flex items-center justify-center space-x-2 text-primary-400"
        >
          <Mail className="w-5 h-5" />
          <span className="text-lg font-medium">{newsletters.length} articles published</span>
        </motion.div>
      </motion.div>

      {/* Articles List */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="bg-dark-surface border border-gray-700/50 rounded-xl overflow-hidden"
      >
        <div className="p-6 border-b border-gray-700/50">
          <h3 className="text-2xl font-semibold text-gray-100 flex items-center space-x-3">
            <div className="p-2 bg-primary-500/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary-400" />
            </div>
            <span>Published Articles</span>
          </h3>
        </div>
        
        <div className="divide-y divide-gray-700/50">
          {newsletters.map((newsletter, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group hover:bg-gray-800/30 transition-all duration-300"
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <motion.a
                    href={newsletter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-medium text-gray-100 group-hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                      {newsletter.title}
                    </h4>
                  </motion.a>
                </div>
                
                <div className="flex items-center space-x-4 ml-6">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{newsletter.date}</span>
                  </div>
                  
                  <motion.a
                    href={newsletter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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