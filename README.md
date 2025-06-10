# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and optimized performance.

## 🚀 Features

- **Modern Design**: Clean, minimal layout with professional typography
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Static site generation for fast loading times
- **SEO Optimized**: Meta tags, structured data, and sitemap included
- **Interactive**: Smooth scrolling navigation and project filtering
- **Contact Form**: Functional contact form ready for backend integration
- **Resume Download**: PDF resume download functionality
- **Accessibility**: WCAG compliant with semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify
- **Code Quality**: ESLint + Prettier

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:

- `components/Hero.tsx` - Name, title, and social links
- `components/About.tsx` - Background and career goals
- `components/Skills.tsx` - Technical skills and proficiency levels
- `components/Experience.tsx` - Work experience and education
- `components/Projects.tsx` - Portfolio projects
- `components/Contact.tsx` - Contact information

### Styling
- Colors: Modify `tailwind.config.js` to change the color scheme
- Typography: Update font families in `tailwind.config.js`
- Layout: Adjust spacing and sizing in component files

### Content
- Resume: Replace `public/resume.pdf` with your actual resume
- Images: Add project images to the `public` folder
- SEO: Update meta tags in `pages/_document.tsx` and `pages/index.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the static site: `npm run build && npm run export`
2. Deploy the `out` folder to Netlify

### Manual Static Export
```bash
npm run build
npm run export
```

## 📧 Contact Form Setup

The contact form is ready for backend integration. You can:

1. **Netlify Forms**: Add `netlify` attribute to the form
2. **Formspree**: Update the form action to your Formspree endpoint
3. **Custom API**: Create an API route in `pages/api/contact.ts`

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- Typography by [Google Fonts](https://fonts.google.com/)

---

**Note**: Remember to update all placeholder content with your actual information before deploying!