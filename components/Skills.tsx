import { BarChart3, Database, Brain, TrendingUp, Code, Globe } from 'lucide-react'

const Skills = () => {
  const additionalSkills = [
    'Statistical Analysis', 'A/B Testing', 'Time Series Analysis', 
    'Predictive Modeling', 'Regression Analysis', 'Web Scraping',
    'Data Cleaning', 'ETL Processes', 'Business Intelligence', 
    'Data Storytelling', 'Hypothesis Testing', 'API Integration',
    'Machine Learning', 'Deep Learning', 'Cloud Architecture',
    'AWS', 'Data Engineering', 'DevOps', 'TypeScript',
    'Redux', 'Node.js', 'Spring Boot', 'Golang',
    'Data Structures & Algorithms', 'Microservices', 'Docker',
    'Kubernetes', 'CI/CD', 'Agile Methodology', 'Matplotlib',
    'Seaborn', 'Pandas', 'NumPy', 'HTML 5', 'Vanilla JavaScript',
    'JavaScript', 'Information Technology Infrastructure', 'Technical Support',
    'Raspberry Pi', 'Digital Marketing', 'Java', 'Communication',
    'Public Speaking', 'FTP', 'PhpMyAdmin', 'PHP', 'MySQL',
    'HTML', 'CSS', 'Cybersecurity', 'Artificial Intelligence',
    'Computer Ethics', 'Generative AI'
  ]

  const skillCategories = [
    {
      title: 'Programming & Data Science',
      icon: '',
      skills: [
        { 
          name: 'Python', 
          level: 85, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a">
                  <stop stopColor="#387EB8" offset="0%"/>
                  <stop stopColor="#366994" offset="100%"/>
                </linearGradient>
                <linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b">
                  <stop stopColor="#FFE052" offset="0%"/>
                  <stop stopColor="#FFC331" offset="100%"/>
                </linearGradient>
              </defs>
              <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#a)"/>
              <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#b)"/>
            </svg>
          )
        },
        { 
          name: 'SQL', 
          level: 80, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#336791" rx="10"/>
              <text x="50" y="60" fontSize="24" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">SQL</text>
            </svg>
          )
        },
        { 
          name: 'Pandas', 
          level: 82, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#150458" rx="10"/>
              <circle cx="30" cy="30" r="8" fill="white"/>
              <circle cx="70" cy="30" r="8" fill="white"/>
              <circle cx="30" cy="70" r="8" fill="white"/>
              <circle cx="70" cy="70" r="8" fill="white"/>
              <rect x="25" y="45" width="10" height="20" fill="white"/>
              <rect x="65" y="45" width="10" height="20" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'NumPy', 
          level: 78, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#013243" rx="10"/>
              <polygon points="20,20 50,35 80,20 80,80 50,65 20,80" fill="#4DABCF"/>
              <polygon points="20,20 50,35 50,65 20,80" fill="#4D77CF"/>
            </svg>
          )
        },
        { 
          name: 'Scikit-learn', 
          level: 75, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#F7931E" rx="10"/>
              <circle cx="30" cy="30" r="6" fill="white"/>
              <circle cx="70" cy="30" r="6" fill="white"/>
              <circle cx="50" cy="50" r="6" fill="white"/>
              <circle cx="30" cy="70" r="6" fill="white"/>
              <circle cx="70" cy="70" r="6" fill="white"/>
              <line x1="30" y1="30" x2="50" y2="50" stroke="white" strokeWidth="2"/>
              <line x1="70" y1="30" x2="50" y2="50" stroke="white" strokeWidth="2"/>
              <line x1="50" y1="50" x2="30" y2="70" stroke="white" strokeWidth="2"/>
              <line x1="50" y1="50" x2="70" y2="70" stroke="white" strokeWidth="2"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Analytics & Visualization',
      icon: '',
      skills: [
        { 
          name: 'Tableau', 
          level: 70, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#E97627" rx="10"/>
              <rect x="20" y="40" width="60" height="8" fill="white"/>
              <rect x="46" y="20" width="8" height="60" fill="white"/>
              <rect x="30" y="30" width="40" height="4" fill="white"/>
              <rect x="30" y="66" width="40" height="4" fill="white"/>
              <rect x="35" y="25" width="4" height="50" fill="white"/>
              <rect x="61" y="25" width="4" height="50" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'Excel (Advanced)', 
          level: 85, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#217346" rx="10"/>
              <text x="50" y="60" fontSize="24" fill="white" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">X</text>
            </svg>
          )
        },
        { 
          name: 'Matplotlib/Seaborn', 
          level: 75, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#11557c" rx="10"/>
              <path d="M20 80 Q30 60 40 70 Q50 50 60 65 Q70 45 80 60" stroke="white" strokeWidth="3" fill="none"/>
              <circle cx="25" cy="75" r="3" fill="#ff7f0e"/>
              <circle cx="40" cy="70" r="3" fill="#2ca02c"/>
              <circle cx="60" cy="65" r="3" fill="#d62728"/>
              <circle cx="75" cy="60" r="3" fill="#9467bd"/>
            </svg>
          )
        },
        { 
          name: 'Power BI', 
          level: 65, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#F2C811" rx="10"/>
              <rect x="20" y="60" width="15" height="25" fill="#333"/>
              <rect x="40" y="45" width="15" height="40" fill="#333"/>
              <rect x="60" y="30" width="15" height="55" fill="#333"/>
            </svg>
          )
        },
        { 
          name: 'Jupyter Notebooks', 
          level: 80, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#F37626" rx="10"/>
              <circle cx="30" cy="30" r="8" fill="#9E9E9E"/>
              <circle cx="70" cy="30" r="8" fill="#F37626"/>
              <circle cx="50" cy="70" r="8" fill="#9E9E9E"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Databases & Cloud',
      icon: '',
      skills: [
        { 
          name: 'SQL', 
          level: 80, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#336791" rx="10"/>
              <text x="50" y="60" fontSize="24" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">SQL</text>
            </svg>
          )
        },
        { 
          name: 'PostgreSQL', 
          level: 70, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#336791" rx="10"/>
              <path d="M30 25 Q50 15 70 25 Q75 35 70 45 Q50 55 30 45 Q25 35 30 25" fill="white"/>
              <ellipse cx="50" cy="60" rx="20" ry="8" fill="white"/>
              <ellipse cx="50" cy="75" rx="15" ry="6" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'AWS', 
          level: 60, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#232F3E" rx="10"/>
              <path d="M20 60 Q30 50 40 60 Q50 50 60 60 Q70 50 80 60" stroke="#FF9900" strokeWidth="3" fill="none"/>
              <text x="50" y="40" fontSize="12" fill="#FF9900" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">AWS</text>
            </svg>
          )
        },
        { 
          name: 'MongoDB', 
          level: 65, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#4DB33D" rx="10"/>
              <path d="M50 20 Q60 30 55 50 Q50 70 45 50 Q40 30 50 20" fill="white"/>
              <rect x="48" y="65" width="4" height="15" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'BigQuery', 
          level: 55, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#4285F4" rx="10"/>
              <polygon points="30,30 70,30 60,50 40,50" fill="white"/>
              <polygon points="40,50 60,50 70,70 30,70" fill="white"/>
              <text x="50" y="45" fontSize="8" fill="#4285F4" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">BQ</text>
            </svg>
          )
        }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="bg-white p-1 rounded shadow-sm">
                          {skill.logo}
                        </div>
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills