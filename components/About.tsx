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
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Quick Facts About Me
              </h3>
              
               <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                    <p className="text-gray-700 font-medium">I'm a total comic junkie—gotta read every single panel!</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                    <p className="text-gray-700 font-medium">Basically living in the MCU—where's my Iron Man suit?</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                    <p className="text-gray-700 font-medium">Sci-fi film buff on a warp-speed quest for the next big-screen adventure</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                    <p className="text-gray-700 font-medium">Flouting CS norms daily in PJs and my favorite hoodie</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200">
                     <p className="text-gray-700 font-medium">Fueled by coffee—seriously, I drink more espresso than water</p>
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