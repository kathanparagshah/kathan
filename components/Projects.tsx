import { useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const projects = [
    {
      title: 'Wheel Strategy Options',
      description: 'Advanced options trading platform with covered call screening capabilities and real-time market data analysis.',
      impact: 'Provides sophisticated options analysis tools for active traders',
      technologies: ['React', 'JavaScript', 'Node.js', 'Financial APIs', 'Chart.js'],
      category: 'Full-Stack',
      liveUrl: 'https://wheelstrategyoptions.com/covered-call-screener',
      githubUrl: 'https://github.com/atitkothari/pt-wss.git',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'MegaShop',
      description: 'Modern e-commerce platform with responsive design, product catalog, shopping cart, and user authentication.',
      impact: 'Complete e-commerce solution with modern UI/UX design',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'E-commerce'],
      category: 'Frontend',
      liveUrl: 'https://kathanparagshah.github.io/MegaShop/',
      githubUrl: 'https://github.com/kathanparagshah/MegaShop',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Mean Variance Standard Deviation Calculator',
      description: 'Statistical analysis tool that calculates mean, variance, and standard deviation for 3x3 matrices using NumPy.',
      impact: 'Efficient statistical computation tool for data analysis workflows',
      technologies: ['Python', 'NumPy', 'Statistics', 'Data Analysis'],
      category: 'Data Science',
      liveUrl: '',
      githubUrl: 'https://github.com/kathanparagshah/Mean-Variance-Standard-Deviation-Calculator.git',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Demographic Data Analyzer',
      description: 'Data analysis project that explores demographic patterns using pandas to answer statistical questions about population data.',
      impact: 'Provides insights into demographic trends and population statistics',
      technologies: ['Python', 'Pandas', 'Data Analysis', 'Statistics'],
      category: 'Data Science',
      liveUrl: '',
      githubUrl: 'https://github.com/kathanparagshah/Demographic-Data-Analyzer.git',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Medical Data Visualizer',
      description: 'Healthcare data visualization tool that creates categorical plots and heat maps to analyze medical examination data and cardiovascular disease patterns.',
      impact: 'Enables medical professionals to visualize health data correlations',
      technologies: ['Python', 'Matplotlib', 'Seaborn', 'Pandas', 'Data Visualization'],
      category: 'Data Science',
      liveUrl: '',
      githubUrl: 'https://github.com/kathanparagshah/Medical-Data-Visualizer.git',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Page View Time Series Visualizer',
      description: 'Time series analysis tool that visualizes website page view data using line charts, bar charts, and box plots to identify patterns and trends.',
      impact: 'Helps understand website traffic patterns and seasonal trends',
      technologies: ['Python', 'Matplotlib', 'Seaborn', 'Pandas', 'Time Series Analysis'],
      category: 'Data Science',
      liveUrl: '',
      githubUrl: 'https://github.com/kathanparagshah/Page-View-Time-Series-Visualizer.git',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Sea Level Predictor',
      description: 'Environmental data analysis project that predicts future sea level changes using linear regression and historical data visualization.',
      impact: 'Provides climate change insights through predictive modeling',
      technologies: ['Python', 'Matplotlib', 'Pandas', 'Linear Regression', 'Climate Data'],
      category: 'Data Science',
      liveUrl: '',
      githubUrl: 'https://github.com/kathanparagshah/Sea-Level-Predictor.git',
      image: '/api/placeholder/400/250'
    }
  ]

  // Extract all unique skills from projects
  const allSkills = Array.from(new Set(projects.flatMap(project => project.technologies))).sort()
  const skillFilters = ['All', ...allSkills]

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(selectedFilter))

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="project-card group">
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {project.title}
      </h3>
      
      <p className="text-gray-600 mb-3 line-clamp-2">
        {project.description}
      </p>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
        <p className="text-green-800 text-sm font-medium">
          Impact: {project.impact}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string, index: number) => (
          <span key={index} className="skill-tag text-xs">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm w-fit"
          >
            Live Demo
            <ExternalLink size={14} />
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="View Source Code"
        >
          <Github size={24} />
        </a>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillFilters.map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedFilter(skill)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedFilter === skill
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No projects found with the selected skill.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects