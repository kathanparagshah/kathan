import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react'

const Experience = () => {
  // Combined timeline data with chronological sorting
  const timelineData = [
    {
      type: 'work',
      title: 'Memberships Services Supervisor',
      organization: 'Sun Devil Fitness Complex',
      location: 'Tempe, AZ',
      period: 'June 2025 – Present',
      sortDate: '2025-06',
      achievements: [
        'Supervised membership operations for 2,000+ active members, implementing data-driven retention strategies that increased renewal rates by 35%',
        'Analyzed member usage patterns and facility metrics to optimize staffing schedules and resource allocation across peak hours',
        'Developed automated reporting systems for membership analytics, reducing manual processing time by 50% and improving decision-making accuracy'
      ]
    },
    {
      type: 'work',
      title: 'Security Aide',
      organization: 'ASU Gammage',
      location: 'Tempe, AZ',
      period: 'February 2025 – March 2025',
      sortDate: '2025-02',
      achievements: [
        'Analyzed security incident patterns across 15+ campus locations to identify high-risk areas and optimize patrol routes',
        'Implemented data-driven surveillance monitoring protocols, reducing response time to incidents by 40%',
        'Collected and processed safety metrics from 300+ daily interactions to improve campus security protocols'
      ]
    },
    {
      type: 'work',
      title: 'Information Technology Support Specialist',
      organization: 'W.P. Carey School of Business',
      location: 'Tempe, AZ',
      period: 'November 2024 – January 2025',
      sortDate: '2024-11',
      achievements: [
        'Developed automated data pipelines using Python and Django to process 500+ daily IT support tickets',
        'Performed statistical analysis on system performance metrics, identifying bottlenecks that improved efficiency by 25%',
        'Created predictive models to forecast hardware failures, reducing unplanned downtime by 30%'
      ]
    },
    {
      type: 'work',
      title: 'Technology Assistant',
      organization: 'Sun Devil Athletics',
      location: 'Tempe, AZ',
      period: 'October 2023 – November 2024',
      sortDate: '2023-10',
      achievements: [
        'Analyzed performance data from 150+ systems using SQL queries to identify optimization opportunities',
        'Built automated monitoring dashboards that tracked 95% issue resolution rate within 24-hour SLA',
        'Applied machine learning techniques to predict system failures, improving operational efficiency by 30%'
      ]
    },
    {
      type: 'work',
      title: 'Desk Assistant',
      organization: 'University Housing',
      location: 'Tempe, AZ',
      period: 'October 2023 – November 2023',
      sortDate: '2023-10-b',
      achievements: [
        'Collected and analyzed residential safety data from 300+ student interactions to identify risk patterns',
        'Developed statistical models to predict security incidents, reducing unauthorized access by 20%',
        'Created data visualization reports on safety metrics that informed policy decisions for housing staff'
      ]
    },
    {
      type: 'work',
      title: 'Program Activator',
      organization: 'Changemaker Central',
      location: 'Tempe, AZ',
      period: 'September 2023 – November 2023',
      sortDate: '2023-09',
      achievements: [
        'Analyzed participant engagement data from 7 events with 100+ attendees to optimize future programming',
        'Applied A/B testing methodologies to workshop formats, increasing participant retention by 25%',
        'Built predictive models using attendance patterns to forecast event success and resource allocation'
      ]
    },
    {
      type: 'education',
      title: 'Arizona State University',
      organization: 'Bachelors of Science in Computer Science and Economics',
      location: 'Tempe, AZ',
      period: '2022 - 2026 (Expected)',
      sortDate: '2022-08',
      achievements: [
        'GPA: 3.8/4.0, Dean\'s List for 4 consecutive semesters with focus on data science and machine learning',
        'Relevant Coursework: Data Structures, Machine Learning, Statistical Analysis, Database Systems, Econometrics',
        'Completed 5+ data science projects using Python, R, and SQL with real-world datasets and predictive modeling'
      ]
    }
  ].sort((a, b) => b.sortDate.localeCompare(a.sortDate)) // Sort by most recent first

  const ExperienceCard = ({ item }: { item: any }) => (
    <div className="bg-surface rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary">
      <div className="flex items-start gap-4">
        <div className="text-primary mt-1">
          {item.type === 'education' ? <GraduationCap size={24} /> : <Briefcase size={24} />}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>
          
          <div className="text-primary font-medium mb-2">
            {item.organization}
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span className="text-sm">{item.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span className="text-sm">{item.location}</span>
            </div>
          </div>
          
          <ul className="space-y-2">
            {item.achievements.map((achievement: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  const TimelineCard = ({ item, index, isLast }: { item: any; index: number; isLast: boolean }) => {
    return (
      <div className="relative flex mb-6 group">
        {/* Timeline line and dot */}
        <div className="flex flex-col items-center mr-6 relative">
          <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white shadow-sm z-10 relative group-hover:bg-gray-400 transition-colors duration-300">
          </div>
          {!isLast && (
            <div className="w-px bg-gray-200 absolute top-3 h-full"></div>
          )}
        </div>
        
        {/* Content card */}
        <div className="flex-1 relative">
          <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300 border border-gray-100">
            {/* Header with icon and badge */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-1.5 bg-blue-50 rounded-lg">
                {item.type === 'education' ? (
                  <GraduationCap size={16} className="text-blue-600" />
                ) : (
                  <Briefcase size={16} className="text-blue-600" />
                )}
              </div>
              <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {item.type === 'education' ? 'EDUCATION' : 'EXPERIENCE'}
              </div>
            </div>
            
            {/* Title and organization */}
            <div className="mb-3">
              <h3 className="text-lg font-bold text-black mb-1 leading-tight">
                {item.title}
              </h3>
              <div className="text-blue-600 font-semibold text-base mb-2">
                {item.organization}
              </div>
            </div>
            
            {/* Meta information */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={14} className="text-primary-light" />
                <span className="text-xs">{item.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} className="text-primary-light" />
                <span className="text-xs">{item.location}</span>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="space-y-2">
              {item.achievements.slice(0, 3).map((achievement: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-gray-700">
                  <div className="w-1 h-1 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs leading-relaxed">{achievement}</span>
                </div>
              ))}
              {item.achievements.length > 3 && (
                <div className="text-xs text-gray-500 italic ml-3">
                  +{item.achievements.length - 3} more achievements
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-max section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Experience & Education Timeline
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Minimalist Vertical Timeline */}
           <div className="relative py-12 max-w-4xl mx-auto">
             <div className="space-y-8">
               {timelineData.map((item, index) => (
                 <TimelineCard key={index} item={item} index={index} isLast={index === timelineData.length - 1} />
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Experience