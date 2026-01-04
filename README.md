# 🚀 Shivam S. Ramoliya - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, and experience as a Full Stack Developer and AI-ML Enthusiast.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38BDF8?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, gradient-based design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🌓 **Dark Mode** - Automatic dark/light theme support
- 📧 **Contact Form** - Integrated with EmailJS for instant notifications
- ✅ **Auto-Reply** - Automatic acknowledgment emails to visitors
- 🔄 **PWA Support** - Installable as a standalone app
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 📊 **Project Showcase** - Interactive portfolio gallery
- 💼 **Resume Download** - Downloadable PDF resume

## 🛠️ Tech Stack

### Frontend

- **React 18.3** - UI library
- **Vite 6.0** - Build tool and dev server
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **React Router** - Client-side routing

### Services & Tools

- **EmailJS** - Email service for contact form
- **PWA** - Progressive Web App capabilities
- **Service Workers** - Offline support and caching
- **ESLint** - Code linting

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### Install Dependencies

```bash
npm install
```

### Environment Variables Setup

Create a `.env` file in the root directory:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> 📝 See [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md) for detailed EmailJS setup instructions

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📧 Email Configuration

The contact form uses **EmailJS** to send emails. You'll need to:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up two email templates:
   - **Notification Template** - Sends form submissions to you
   - **Auto-Reply Template** - Sends acknowledgment to visitor
3. Copy template IDs to your `.env` file

### Email Templates

- `EMAIL_TEMPLATE.html` - Template for notifications to you
- `AUTO_REPLY_TEMPLATE.html` - Template for auto-replies to visitors

For step-by-step setup, see [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md)

## 📱 PWA Features

This portfolio is a **Progressive Web App** with:

- ✅ Installable on mobile and desktop
- 🔌 Offline support
- ⚡ Fast loading with service worker caching
- 🎯 Add to home screen functionality
- 📱 Standalone app mode

### Testing PWA

1. Build the production version: `npm run build`
2. Preview: `npm run preview`
3. Open in browser and click the "Install" button

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── sw.js                  # Service worker
│   ├── Shivam-1.png          # App icons
│   └── ...                    # Project images
├── src/
│   ├── assets/               # Static assets
│   ├── component/            # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Resume.jsx
│   │   ├── Skills.jsx
│   │   └── ...
│   ├── pages/                # Page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── ...
│   ├── services/             # API services
│   │   └── emailService.js
│   ├── hooks/                # Custom hooks
│   │   └── useDocumentTitle.js
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .env                      # Environment variables (not committed)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `src/portfolioData.jsx` to update:

- Personal details (name, email, phone, location)
- Social media links
- Skills and technologies
- Project showcase
- Work experience
- Education

### Modify Theme Colors

Update colors in `tailwind.config.js` or inline Tailwind classes:

- Primary: `sky-500` (Light Blue)
- Secondary: `emerald-500` (Green)
- Dark: `slate-800/900`

### Add New Sections

Create components in `src/component/` and import them in your pages.

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag & drop the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

> ⚠️ Remember to add your environment variables in the hosting platform's settings!

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🚀 First Contentful Paint: < 1.5s
- 📦 Bundle Size: Optimized with code splitting
- 🎯 SEO Score: 100

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### ⭐ If you like this project, please give it a star!

Made with ❤️ by Shivam S. Ramoliya

</div>

Serve the `dist/` folder on any static host (Netlify, Vercel, GitHub Pages, etc.). Ensure HTTPS for full PWA functionality.
