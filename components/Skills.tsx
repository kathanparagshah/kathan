import { skills, Skill } from '@/data/portfolio';
import { Code, Layers, Settings, Database, Globe, Palette, Terminal, Server, Cloud, FileCode, Smartphone, Cpu, Monitor } from 'lucide-react';

const Skills = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code className="w-5 h-5" />;
      case 'Frameworks':
        return <Layers className="w-5 h-5" />;
      case 'Tools':
        return <Settings className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Languages':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Frameworks':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Tools':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getTechnologyIcon = (skillName: string) => {
    const baseClass = "w-4 h-4";
    switch (skillName.toLowerCase()) {
      // Languages
      case 'python':
        return <Code className={`${baseClass} text-green-600`} />;
      case 'r':
        return <Code className={`${baseClass} text-blue-500`} />;
      case 'sql':
        return <Database className={`${baseClass} text-orange-600`} />;
      case 'julia':
        return <Code className={`${baseClass} text-purple-600`} />;
      case 'scala':
        return <Code className={`${baseClass} text-red-600`} />;
      
      // Python Libraries
      case 'numpy':
        return <Cpu className={`${baseClass} text-blue-600`} />;
      case 'pandas':
        return <Database className={`${baseClass} text-green-500`} />;
      case 'scikit-learn':
        return <Settings className={`${baseClass} text-orange-500`} />;
      case 'tensorflow':
        return <Cpu className={`${baseClass} text-orange-600`} />;
      case 'pytorch':
        return <Cpu className={`${baseClass} text-red-500`} />;
      case 'plotly':
        return <Palette className={`${baseClass} text-blue-500`} />;
      case 'matplotlib':
        return <Palette className={`${baseClass} text-green-600`} />;
      case 'seaborn':
        return <Palette className={`${baseClass} text-teal-500`} />;
      case 'streamlit':
        return <Globe className={`${baseClass} text-red-500`} />;
      
      // R Libraries
      case 'ggplot2':
        return <Palette className={`${baseClass} text-blue-600`} />;
      case 'tidyr':
        return <Settings className={`${baseClass} text-purple-500`} />;
      case 'dplyr':
        return <Settings className={`${baseClass} text-blue-500`} />;
      case 'shiny':
        return <Globe className={`${baseClass} text-blue-700`} />;
      
      // Web Frameworks
      case 'flask':
        return <Server className={`${baseClass} text-gray-700`} />;
      case 'fastapi':
        return <Server className={`${baseClass} text-green-500`} />;
      
      // Development Tools
      case 'git':
        return <Code className={`${baseClass} text-orange-500`} />;
      case 'github':
        return <Code className={`${baseClass} text-gray-800`} />;
      case 'jupyter notebooks':
        return <FileCode className={`${baseClass} text-orange-500`} />;
      
      // Visualization Tools
      case 'power bi':
        return <Palette className={`${baseClass} text-yellow-500`} />;
      case 'tableau':
        return <Palette className={`${baseClass} text-blue-600`} />;
      case 'excel':
        return <FileCode className={`${baseClass} text-green-600`} />;
      
      // Statistical Tools
      case 'stata':
        return <Settings className={`${baseClass} text-blue-700`} />;
      case 'qgis':
        return <Globe className={`${baseClass} text-green-700`} />;
      
      // Databases
      case 'mongodb':
        return <Database className={`${baseClass} text-green-600`} />;
      case 'postgresql':
        return <Database className={`${baseClass} text-blue-700`} />;
      
      // Cloud Services
      case 'aws':
        return <Cloud className={`${baseClass} text-orange-400`} />;
      case 'azure':
        return <Cloud className={`${baseClass} text-blue-500`} />;
      case 'gcp':
        return <Cloud className={`${baseClass} text-red-500`} />;
      
      // DevOps & Big Data
      case 'docker':
        return <Cloud className={`${baseClass} text-blue-500`} />;
      case 'kubernetes':
        return <Cloud className={`${baseClass} text-blue-600`} />;
      case 'apache spark':
        return <Server className={`${baseClass} text-orange-600`} />;
      case 'hadoop':
        return <Server className={`${baseClass} text-yellow-600`} />;
      
      default:
        return <Code className={`${baseClass} text-gray-600`} />;
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Get only top 5 skills per category for main display
  const topSkills = Object.entries(groupedSkills).reduce((acc, [category, categorySkills]) => {
    acc[category] = categorySkills.slice(0, 5);
    return acc;
  }, {} as Record<string, Skill[]>);

  const SkillBar = ({ skill }: { skill: Skill }) => {
    const percentage = skill.level;
    
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div>
              {getTechnologyIcon(skill.name)}
            </div>
            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
          </div>
          <span className="text-xs text-gray-500">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Top Skills Grid - Only Top 5 per Category */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(topSkills).map(([category, categorySkills]) => (
              <div key={category} className="card">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-2 rounded-lg ${getCategoryColor(category)}`}>
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Top {category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Tags Alternative View */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`skill-tag ${getCategoryColor(skill.category)} flex items-center space-x-2`}
              >
                <div>
                  {getTechnologyIcon(skill.name)}
                </div>
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;