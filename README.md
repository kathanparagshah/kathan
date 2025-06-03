# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and optimized performance.

## 🚀 Features

- **Modern Design**: Clean, minimal layout with professional typography
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Static site generation for fast loading times
- **SEO Optimized**: Meta tags, structured data, and sitemap included
- **Accessibility**: WCAG compliant with semantic HTML
- **Interactive**: Smooth scrolling, hover effects, and project filtering
- **Contact Form**: Functional contact form with validation
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready
- **Code Quality**: ESLint + Prettier

## 📋 Sections

1. **Hero** - Name, title, and value proposition
2. **About** - Background, strengths, and career goals
3. **Skills** - Technical skills grouped by category with visual indicators
4. **Experience** - Work experience and education timeline
5. **Projects** - Featured projects with filtering by technology
6. **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Configuration

### Personal Information

Update your personal information in `data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  valueProposition: "Your value proposition",
  about: "Your about text",
  email: "your.email@example.com",
  // ... other fields
};
```

### Skills

Add or modify your skills in the same file:

```typescript
export const skills: Skill[] = [
  { name: "JavaScript", category: "Languages", level: 5 },
  // ... more skills
];
```

### Projects

Update your projects:

```typescript
export const projects: Project[] = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js"],
    impact: "Project impact",
    liveUrl: "https://project-demo.com",
    codeUrl: "https://github.com/username/project",
    featured: true
  },
  // ... more projects
];
```

### Experience

Add your work experience and education:

```typescript
export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    organization: "Company Name",
    startDate: "Jan 2023",
    endDate: "Present",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ],
    type: "work"
  },
  // ... more experiences
];
```

## 🎨 Customization

### Colors

Update the primary color in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Update these color values
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  },
}
```

### Fonts

Change the font in `styles/globals.css` and `tailwind.config.js`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your-Font:wght@300;400;500;600;700&display=swap');
```

## 📦 Build and Deploy

### Build for Production

```bash
npm run build
# or
yarn build
```

### Static Export

```bash
npm run export
# or
yarn export
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Deploy to Netlify

1. Build the project: `npm run build && npm run export`
2. Upload the `out` folder to Netlify
3. Configure redirects if needed

## 📱 SEO and Analytics

### SEO

- Update meta tags in `pages/_document.tsx`
- Modify structured data in `pages/index.tsx`
- Update `public/robots.txt` and `public/sitemap.xml`

### Analytics

To add Google Analytics:

1. Install the package:
```bash
npm install @next/third-parties
```

2. Add to `pages/_app.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
    </>
  )
}
```

## 🔧 Development

### Code Quality

- **ESLint**: `npm run lint`
- **Prettier**: Configure your editor to format on save
- **TypeScript**: Full type checking enabled

### Performance

- Images are optimized with Next.js Image component
- Static generation for fast loading
- Minimal JavaScript bundle
- CSS is optimized with Tailwind's purge

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you have any questions or need help customizing the template, feel free to reach out!

---

**Built with ❤️ using Next.js and Tailwind CSS**