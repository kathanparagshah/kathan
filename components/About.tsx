const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey into the intersection of technology and economics began with a fascination for how 
                digital systems can solve real world problems and drive economic growth. As a Computer Science 
                and Economics double major at Arizona State University I have seen firsthand that the most 
                impactful solutions emerge when technical innovation meets economic insight.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                What drives me is the potential to build technology that not only functions beautifully but 
                also generates meaningful economic value. Whether I am building full stack applications or 
                analyzing market trends I approach each challenge with the belief that great software should 
                be both technically robust and economically viable.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                When I am not prototyping new features or digging into data you will find me exploring new 
                cities, gliding across the ice at my local rink or curled up with a classic 1990s movie. 
                Travel, ice skating and vintage cinema keep my creativity sharp and remind me that the best 
                ideas often come from life outside the code.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary-100 rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">CS & Economics Double Major</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary-100 rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Arizona State University</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary-100 rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Data Science Enthusiast</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary-100 rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Ice Skating & Travel</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary-100 rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">1990s Movie Buff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About