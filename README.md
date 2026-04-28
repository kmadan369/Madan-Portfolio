# Madan Kumar - Portfolio Website

A modern, dark-themed portfolio website built with React, TypeScript, Vite, and Tailwind CSS, featuring smooth animations with Framer Motion.

## 🚀 Features

- ✨ Dark cosmos UI with premium design aesthetic
- 🎨 Smooth scroll animations and transitions
- 📱 Fully responsive design
- ⚡ Lightning-fast with Vite
- 🎯 SEO optimized
- 🧩 Component-based architecture
- 📦 Type-safe with TypeScript

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Deployment:** Vercel / Netlify (recommended)

## 📁 Project Structure

```
madan-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Page sections
│   │   └── ui/            # Reusable UI components
│   ├── data/              # Content data files
│   ├── hooks/             # Custom React hooks
│   ├── styles/            # Global styles
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Build for Production

```bash
npm run build
npm run preview
```

## 📤 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository on [Vercel](https://vercel.com).

### Deploy to Netlify

```bash
npm run build
```

Then drag and drop the `dist` folder to [Netlify](https://netlify.com).

## 📝 Customization

### Update Content
Edit data files in `src/data/`:
- `profile.ts` - Personal information
- `stats.ts` - Impact metrics
- `capabilities.ts` - Skills
- `experience.ts` - Work history
- `caseStudies.ts` - Projects
- `achievements.ts` - Awards and education

### Modify Components
Components are organized in `src/components/`:
- `layout/` - Navbar and Footer
- `sections/` - Page sections (Hero, About, etc.)
- `ui/` - Reusable components (Badge, Button, etc.)

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  background: '#080808',
  surface: '#141414',
  'accent-gold': '#F5C000',
  // ... more colors
}
```

## 📧 Contact

- **Email:** Kmadan369@gmail.com
- **LinkedIn:** [Madan Kumar](https://www.linkedin.com/in/madan-kumar-b24250a8)
- **Portfolio:** [Behance](https://www.behance.net/MadanJkumar)

## 📄 License

© 2026 Madan Kumar J. All rights reserved.