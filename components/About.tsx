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
                When I'm not coding or analyzing data, you'll find me immersed in a good movie, diving into 
                the latest comic book series, or savoring one of my five daily cups of coffee. I have a passion 
                for keeping my space organized and clean, and I love exploring new destinations through travel. 
                These interests keep my mind fresh and often inspire creative solutions to technical challenges.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                A Day in My Life
              </h3>
              
              <div className="flex justify-center">
                <div className="relative w-80 h-60 border border-gray-100 rounded-lg overflow-hidden">
                  <style jsx>{`
                    .slideshow-container {
                      position: relative;
                      width: 100%;
                      height: 100%;
                    }
                    
                    .slide {
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      opacity: 0;
                      transition: opacity 1s ease-in-out;
                      background-size: cover;
                      background-position: center;
                      background-repeat: no-repeat;
                    }
                    
                    .slide.active {
                      opacity: 1;
                    }
                    
                    .slide:nth-child(1) {
                      animation: slideShow1 10s infinite;
                    }
                    
                    .slide:nth-child(2) {
                      animation: slideShow2 10s infinite;
                    }
                    
                    @keyframes slideShow1 {
                      0%, 45% { opacity: 1; }
                      50%, 95% { opacity: 0; }
                      100% { opacity: 1; }
                    }
                    
                    @keyframes slideShow2 {
                      0%, 45% { opacity: 0; }
                      50%, 95% { opacity: 1; }
                      100% { opacity: 0; }
                    }
                    
                    .overlay {
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      right: 0;
                      background: linear-gradient(transparent, rgba(0,0,0,0.7));
                      color: white;
                      padding: 20px;
                      text-align: center;
                    }
                    
                    .activity-label {
                      font-size: 14px;
                      font-weight: 600;
                      text-shadow: 0 1px 3px rgba(0,0,0,0.5);
                      opacity: 0;
                      animation: labelShow 10s infinite;
                    }
                    
                    .activity-label:nth-child(1) {
                      animation-delay: 0s;
                    }
                    
                    .activity-label:nth-child(2) {
                      animation-delay: 5s;
                    }
                    
                    @keyframes labelShow {
                      0%, 45% { opacity: 1; }
                      50%, 95% { opacity: 0; }
                      100% { opacity: 1; }
                    }
                  `}</style>
                  
                  <div className="slideshow-container">
                    <div 
                      className="slide"
                      style={{
                        backgroundImage: 'url(/1.png)'
                      }}
                    />
                    <div 
                      className="slide"
                      style={{
                        backgroundImage: 'url(/2.jpeg)'
                      }}
                    />
                    
                    <div className="overlay">
                      <div className="activity-label">Working & Coding</div>
                      <div className="activity-label">Coffee & Relaxation</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-sm text-gray-600 mt-4">
                My daily routine captured in moments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About