import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kathan - Software Engineer & CS Major</title>
        <meta 
          name="description" 
          content="Software Engineer and Computer Science Major passionate about building innovative solutions with clean code and modern technologies. View my portfolio, projects, and experience." 
        />
        <meta name="keywords" content="software engineer, computer science, web developer, full stack, react, next.js, portfolio" />
        <meta name="author" content="Kathan" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="Kathan - Software Engineer & CS Major" />
        <meta property="og:description" content="Software Engineer and Computer Science Major passionate about building innovative solutions with clean code and modern technologies." />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="Kathan - Software Engineer & CS Major" />
        <meta property="twitter:description" content="Software Engineer and Computer Science Major passionate about building innovative solutions with clean code and modern technologies." />
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
              "name": "Kathan",
              "jobTitle": "Software Engineer",
              "description": "Software Engineer and Computer Science Major",
              "url": "https://yourwebsite.com",
              "sameAs": [
                "https://github.com/username",
                "https://linkedin.com/in/username"
              ],
              "knowsAbout": [
                "Software Engineering",
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}