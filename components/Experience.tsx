import { experiences } from '@/data/portfolio';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const workExperience = experiences.filter(exp => exp.type === 'work');
  const education = experiences.filter(exp => exp.type === 'education');

  const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
    const isWork = experience.type === 'work';
    
    return (
      <div className="relative">
        {/* Timeline Line */}
        {index !== (isWork ? workExperience.length - 1 : education.length - 1) && (
          <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200"></div>
        )}
        
        {/* Timeline Dot */}
        <div className="absolute left-4 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-sm"></div>
        
        {/* Content */}
        <div className="ml-16 pb-8">
          <div className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  isWork ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                }`}>
                  {isWork ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {experience.organization}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {experience.role}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-1">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.startDate} - {experience.endDate}</span>
                </div>
                {experience.location && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              {experience.achievements.map((achievement: string, achIndex: number) => (
                <p key={achIndex} className="text-gray-600">
                  {achievement}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Relevant Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* Work Experience */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
              </div>
              
              <div className="relative">
                {workExperience.map((exp, index) => (
                  <ExperienceCard key={index} experience={exp} index={index} />
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;