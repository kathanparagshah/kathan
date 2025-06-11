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
                <svg width="300" height="200" viewBox="0 0 300 200" className="border border-gray-100 rounded-lg">
                  {/* Background */}
                  <rect width="300" height="200" fill="#f8fafc" />
                  
                  {/* Desk */}
                  <rect x="50" y="120" width="80" height="40" fill="#8b5cf6" rx="4">
                    <animate attributeName="opacity" values="1;1;0.3;0.3;0.3;0.3" dur="12s" repeatCount="indefinite" />
                  </rect>
                  
                  {/* Laptop */}
                  <rect x="60" y="110" width="30" height="20" fill="#374151" rx="2">
                    <animate attributeName="opacity" values="1;1;0.3;0.3;0.3;0.3" dur="12s" repeatCount="indefinite" />
                  </rect>
                  <rect x="62" y="112" width="26" height="16" fill="#60a5fa" rx="1">
                    <animate attributeName="opacity" values="1;1;0.3;0.3;0.3;0.3" dur="12s" repeatCount="indefinite" />
                  </rect>
                  
                  {/* Kid sitting and working */}
                  <g>
                    <animate attributeName="opacity" values="1;1;0;0;0;0" dur="12s" repeatCount="indefinite" />
                    {/* Head */}
                    <circle cx="75" cy="90" r="12" fill="#fbbf24" />
                    {/* Body */}
                    <rect x="70" y="102" width="10" height="20" fill="#3b82f6" rx="2" />
                    {/* Arms typing */}
                    <rect x="65" y="105" width="8" height="3" fill="#fbbf24" rx="1">
                      <animateTransform attributeName="transform" type="rotate" values="0 69 106;-10 69 106;0 69 106" dur="1s" repeatCount="indefinite" />
                    </rect>
                    <rect x="77" y="105" width="8" height="3" fill="#fbbf24" rx="1">
                      <animateTransform attributeName="transform" type="rotate" values="0 81 106;10 81 106;0 81 106" dur="1s" repeatCount="indefinite" />
                    </rect>
                    {/* Legs */}
                    <rect x="72" y="122" width="3" height="15" fill="#1f2937" />
                    <rect x="77" y="122" width="3" height="15" fill="#1f2937" />
                  </g>
                  
                  {/* Kid standing up */}
                  <g>
                    <animate attributeName="opacity" values="0;0;1;0;0;0" dur="12s" repeatCount="indefinite" />
                    {/* Head */}
                    <circle cx="90" cy="70" r="12" fill="#fbbf24" />
                    {/* Body */}
                    <rect x="85" y="82" width="10" height="25" fill="#3b82f6" rx="2" />
                    {/* Arms */}
                    <rect x="80" y="85" width="8" height="3" fill="#fbbf24" rx="1" />
                    <rect x="92" y="85" width="8" height="3" fill="#fbbf24" rx="1" />
                    {/* Legs */}
                    <rect x="87" y="107" width="3" height="20" fill="#1f2937" />
                    <rect x="92" y="107" width="3" height="20" fill="#1f2937" />
                  </g>
                  
                  {/* Coffee cup */}
                  <g>
                    <animate attributeName="opacity" values="0;0;0;1;0;0" dur="12s" repeatCount="indefinite" />
                    <rect x="180" y="120" width="15" height="20" fill="#ffffff" stroke="#374151" stroke-width="2" rx="2" />
                    <rect x="182" y="122" width="11" height="10" fill="#8b4513" />
                    <path d="M195 125 Q200 125 200 130 Q200 135 195 135" fill="none" stroke="#374151" stroke-width="2" />
                    {/* Steam */}
                    <path d="M185 115 Q187 110 185 105" fill="none" stroke="#9ca3af" stroke-width="1" opacity="0.7">
                      <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path d="M190 115 Q192 110 190 105" fill="none" stroke="#9ca3af" stroke-width="1" opacity="0.5">
                      <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.5s" repeatCount="indefinite" />
                    </path>
                  </g>
                  
                  {/* Kid drinking coffee */}
                  <g>
                    <animate attributeName="opacity" values="0;0;0;1;0;0" dur="12s" repeatCount="indefinite" />
                    {/* Head */}
                    <circle cx="160" cy="70" r="12" fill="#fbbf24" />
                    {/* Body */}
                    <rect x="155" y="82" width="10" height="25" fill="#3b82f6" rx="2" />
                    {/* Arm holding coffee */}
                    <rect x="165" y="85" width="12" height="3" fill="#fbbf24" rx="1" />
                    <rect x="150" y="85" width="8" height="3" fill="#fbbf24" rx="1" />
                    {/* Legs */}
                    <rect x="157" y="107" width="3" height="20" fill="#1f2937" />
                    <rect x="162" y="107" width="3" height="20" fill="#1f2937" />
                  </g>
                  
                  {/* Movie screen */}
                  <g>
                    <animate attributeName="opacity" values="0;0;0;0;1;0" dur="12s" repeatCount="indefinite" />
                    <rect x="200" y="60" width="60" height="40" fill="#1f2937" rx="4" />
                    <rect x="205" y="65" width="50" height="30" fill="#60a5fa" rx="2" />
                    {/* Play button */}
                    <polygon points="225,75 235,80 225,85" fill="#ffffff" opacity="0.8" />
                  </g>
                  
                  {/* Kid watching movie */}
                  <g>
                    <animate attributeName="opacity" values="0;0;0;0;1;0" dur="12s" repeatCount="indefinite" />
                    {/* Head */}
                    <circle cx="180" cy="90" r="12" fill="#fbbf24" />
                    {/* Body */}
                    <rect x="175" y="102" width="10" height="25" fill="#3b82f6" rx="2" />
                    {/* Arms relaxed */}
                    <rect x="170" y="105" width="8" height="3" fill="#fbbf24" rx="1" />
                    <rect x="182" y="105" width="8" height="3" fill="#fbbf24" rx="1" />
                    {/* Legs */}
                    <rect x="177" y="127" width="3" height="15" fill="#1f2937" />
                    <rect x="182" y="127" width="3" height="15" fill="#1f2937" />
                  </g>
                  
                  {/* Cleaning supplies */}
                  <g>
                    <animate attributeName="opacity" values="0;0;0;0;0;1" dur="12s" repeatCount="indefinite" />
                    {/* Broom */}
                    <rect x="250" y="100" width="3" height="40" fill="#8b4513" />
                    <rect x="245" y="95" width="13" height="8" fill="#fbbf24" rx="2" />
                    {/* Bucket */}
                    <rect x="260" y="125" width="20" height="15" fill="#6b7280" rx="2" />
                    <rect x="262" y="127" width="16" height="8" fill="#3b82f6" />
                  </g>
                  
                  {/* Kid cleaning */}
                  <g>
                    <animate attributeName="opacity" values="0;0;0;0;0;1" dur="12s" repeatCount="indefinite" />
                    {/* Head */}
                    <circle cx="230" cy="70" r="12" fill="#fbbf24" />
                    {/* Body */}
                    <rect x="225" y="82" width="10" height="25" fill="#3b82f6" rx="2" />
                    {/* Arm with broom */}
                    <rect x="235" y="85" width="15" height="3" fill="#fbbf24" rx="1">
                      <animateTransform attributeName="transform" type="rotate" values="0 242 86;-20 242 86;0 242 86" dur="2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="220" y="85" width="8" height="3" fill="#fbbf24" rx="1" />
                    {/* Legs */}
                    <rect x="227" y="107" width="3" height="20" fill="#1f2937" />
                    <rect x="232" y="107" width="3" height="20" fill="#1f2937" />
                  </g>
                  
                  {/* Activity labels */}
                  <text x="75" y="180" text-anchor="middle" className="text-xs fill-gray-600">
                    <animate attributeName="opacity" values="1;1;0;0;0;0" dur="12s" repeatCount="indefinite" />
                    Coding
                  </text>
                  <text x="90" y="180" text-anchor="middle" className="text-xs fill-gray-600">
                    <animate attributeName="opacity" values="0;0;1;0;0;0" dur="12s" repeatCount="indefinite" />
                    Break
                  </text>
                  <text x="170" y="180" text-anchor="middle" className="text-xs fill-gray-600">
                    <animate attributeName="opacity" values="0;0;0;1;0;0" dur="12s" repeatCount="indefinite" />
                    Coffee
                  </text>
                  <text x="200" y="180" text-anchor="middle" className="text-xs fill-gray-600">
                    <animate attributeName="opacity" values="0;0;0;0;1;0" dur="12s" repeatCount="indefinite" />
                    Movies
                  </text>
                  <text x="240" y="180" text-anchor="middle" className="text-xs fill-gray-600">
                    <animate attributeName="opacity" values="0;0;0;0;0;1" dur="12s" repeatCount="indefinite" />
                    Cleaning
                  </text>
                </svg>
              </div>
              
              <p className="text-center text-sm text-gray-600 mt-4">
                My daily routine: Code → Coffee → Movies → Clean → Repeat!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About