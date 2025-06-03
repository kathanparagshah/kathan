import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { personalInfo } from '@/data/portfolio';

export default function Home() {
  return (
    <>
      <Head>
        <title>{personalInfo.name} - {personalInfo.title}</title>
        <meta name="description" content={personalInfo.valueProposition} />
        <meta name="keywords" content="software engineer, computer science, web development, full stack developer, react, next.js, typescript" />
        <meta name="author" content={personalInfo.name} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content={`${personalInfo.name} - ${personalInfo.title}`} />
        <meta property="og:description" content={personalInfo.valueProposition} />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content={`${personalInfo.name} - ${personalInfo.title}`} />
        <meta property="twitter:description" content={personalInfo.valueProposition} />
        <meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://yourwebsite.com/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": personalInfo.name,
              "jobTitle": personalInfo.title,
              "description": personalInfo.valueProposition,
              "email": personalInfo.email,
              "url": "https://yourwebsite.com",
              "sameAs": [
                personalInfo.linkedin,
                personalInfo.github
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": personalInfo.location
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}