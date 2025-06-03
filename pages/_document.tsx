import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Software Engineer & CS Major - Building innovative solutions with modern technologies" />
        <meta name="keywords" content="software engineer, computer science, web development, full stack developer" />
        <meta name="author" content="Your Name" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Your Name - Software Engineer & CS Major" />
        <meta property="og:description" content="Building innovative solutions with modern technologies" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Your Name - Software Engineer & CS Major" />
        <meta property="twitter:description" content="Building innovative solutions with modern technologies" />
        <meta property="twitter:image" content="/og-image.jpg" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}