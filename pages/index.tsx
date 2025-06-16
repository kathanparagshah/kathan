import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import InteractiveDemo from '@/components/InteractiveDemo'
import Newsletters from '@/components/Newsletters'
import Contact from '@/components/Contact'
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kathan Parag Shah - CS & Economics Double Major</title>
        <meta 
          name="description" 
          content="CS & Economics Double Major passionate about the intersection of technology and economics. Explore interactive demos, 3D visualizations, and innovative projects." 
        />
        <meta name="keywords" content="computer science, economics, data science, react, next.js, three.js, portfolio, interactive demos, financial modeling" />
        <meta name="author" content="Kathan Parag Shah" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="Kathan Parag Shah - CS & Economics Double Major" />
        <meta property="og:description" content="CS & Economics Double Major passionate about the intersection of technology and economics. Explore interactive demos, 3D visualizations, and innovative projects." />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="Kathan Parag Shah - CS & Economics Double Major" />
        <meta property="twitter:description" content="CS & Economics Double Major passionate about the intersection of technology and economics. Explore interactive demos, 3D visualizations, and innovative projects." />
        <meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kathan Parag Shah",
              "jobTitle": "CS & Economics Student",
              "description": "CS & Economics Double Major passionate about technology and economics",
              "url": "https://yourwebsite.com",
              "sameAs": [
                "https://github.com/kathanshah",
                "https://linkedin.com/in/kathan-shah"
              ],
              "knowsAbout": [
                "Computer Science",
                "Economics",
                "Data Science",
                "Financial Modeling",
                "React",
                "Next.js",
                "Three.js",
                "Python",
                "TypeScript"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-gray-100 overflow-x-hidden">
          <NeuralNetworkBackground />
          <Navigation />
          
          <main>
            {/* Hero Section */}
            <section id="hero" className="relative">
              <Hero />
            </section>
            
            {/* About Section */}
            <section id="about" className="relative py-20">
              <About />
            </section>
            
            {/* Skills Section */}
            <section id="skills" className="relative py-20">
              <Skills />
            </section>
            
            {/* Experience Section */}
            <section id="experience" className="relative py-20">
              <Experience />
            </section>
            
            {/* Projects Section */}
            <section id="projects" className="relative py-20">
              <Projects />
            </section>
            
            {/* Interactive Demos Section */}
            <section id="demos" className="relative py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                    Interactive <span className="text-primary-400">Demos</span>
                  </h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Explore interactive visualizations and tools that demonstrate the intersection of economics and technology.
                  </p>
                </div>
                
                <div className="mb-16">
                  <InteractiveDemo />
                </div>
              </div>
            </section>
            
            {/* Newsletters Section */}
            <section id="newsletters" className="relative py-20">
              <Newsletters />
            </section>
            
            {/* Contact Section */}
            <section id="contact" className="relative py-20">
              <Contact />
            </section>
          </main>
          

        </div>
    </>
  )
}