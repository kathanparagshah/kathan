import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import Image from 'next/image';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max section-padding text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/profile.jpeg"
              alt={personalInfo.name}
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {personalInfo.name}
          </h1>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl text-primary-600 font-medium mb-6">
            {personalInfo.title}
          </h2>
          
          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.valueProposition}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 group"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 group"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3 text-lg"
            >
              Download Resume
            </a>
            <button
              onClick={scrollToAbout}
              className="btn-secondary px-8 py-3 text-lg"
            >
              Learn More
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;