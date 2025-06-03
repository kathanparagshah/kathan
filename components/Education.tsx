import React from 'react';
import { GraduationCap, Calendar, Building2, Building, BookOpen, MapPin } from 'lucide-react';
import { experiences } from '@/data/portfolio';

interface EducationCardProps {
  education: {
    organization: string;
    role: string;
    startDate: string;
    endDate: string;
    achievements?: string[];
    location?: string;
  };
  index: number;
}

const EducationCard = ({ education, index }: EducationCardProps) => {
  // Function to get appropriate icon based on organization
  const getEducationIcon = (organization: string) => {
    if (organization.toLowerCase().includes('university')) {
      return <Building2 className="w-5 h-5" />;
    } else if (organization.toLowerCase().includes('school')) {
      return <Building className="w-5 h-5" />;
    } else {
      return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-4 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
      
      {/* Content */}
      <div className="ml-16 pb-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                {getEducationIcon(education.organization)}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  {education.organization}
                </h4>
                <p className="text-lg text-blue-600 font-medium">
                  {education.role}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-1 mt-2 md:mt-0">
              <div className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  {education.startDate} - {education.endDate}
                </span>
              </div>
              {education.location && (
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    {education.location}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {education.achievements && education.achievements.length > 0 && (
            <div className="space-y-1">
              {education.achievements.map((achievement, achievementIndex) => (
                <p key={achievementIndex} className="text-gray-700 leading-normal">
                  {achievement}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const education = experiences.filter(exp => exp.type === 'education');

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic background and educational journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Academic Background</h3>
              </div>
              
              <div className="relative">
                {education.map((edu, index) => (
                  <EducationCard key={index} education={edu} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;