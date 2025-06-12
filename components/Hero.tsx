import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max section-padding text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <Image
              src="/profile.jpeg"
              alt="Kathan Parag Shah"
              width={200}
              height={200}
              className="rounded-full mx-auto shadow-lg"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Kathan Parag Shah</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            Computer Science & Economics Double Major
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions with clean code and modern technologies. 
            Passionate about creating user-centric applications that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={scrollToAbout}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Learn More About Me
              <ArrowDown size={20} />
            </button>
            
            <a 
              href="#contact" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium border border-blue-600 hover:bg-blue-50 transition-colors flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Get In Touch
              <Mail size={20} />
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/kathanparagshah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/kathan-shah-90ba43263/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            
            <a 
              href="mailto:kathanshah04@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero