# Madan Kumar Portfolio - Quick Start Guide

## 🎯 Getting Started

Follow these steps to run your portfolio locally:

### Step 1: Install Node.js
If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/) (version 18 or higher recommended)

### Step 2: Open Terminal in Project Folder
1. Open this folder in VS Code
2. Open Terminal (Ctrl + ` or View > Terminal)

### Step 3: Install Dependencies
```bash
npm install
```

This will install all required packages (React, Vite, Tailwind CSS, Framer Motion, etc.)

### Step 4: Run Development Server
```bash
npm run dev
```

### Step 5: View Your Portfolio
Open your browser and go to: **http://localhost:5173**

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  background: '#080808',     // Main background
  surface: '#141414',        // Card backgrounds
  'accent-gold': '#F5C000',  // Highlight color
}
```

### Update Content
Edit data files in `src/data/`:
- `profile.ts` - Your personal information and bio
- `stats.ts` - Impact metrics (40%, 25%, etc.)
- `capabilities.ts` - Your skills organized by category
- `experience.ts` - Work history with achievements
- `caseStudies.ts` - Your project portfolio
- `achievements.ts` - Awards and education

### Modify Components
Components are in `src/components/`:
- `layout/` - Navbar and Footer
- `sections/` - Hero, About, Experience, etc.
- `ui/` - Reusable components (buttons, cards, etc.)

### Add Images
1. Place images in `public/` folder
2. Reference them: `/image-name.png`
3. Or put in `src/assets/` and import them

## 🚀 Deploy Your Portfolio

### Option 1: Vercel (Free & Easiest)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy" - Done! 🎉

### Option 2: Netlify
1. Run: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder

## 📞 Need Help?

If you encounter any issues:
1. Make sure Node.js is installed: `node --version`
2. Delete `node_modules` and `dist` folders
3. Run `npm install` again
4. Run `npm run dev`

## 📁 Project Structure

```
madan-portfolio/
├── public/              # Static files
├── src/
│   ├── assets/         # Images, icons
│   ├── components/
│   │   ├── layout/     # Navbar, Footer
│   │   ├── sections/   # Hero, About, etc.
│   │   └── ui/         # Reusable components
│   ├── data/           # Content files (EDIT THESE!)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── styles/         # CSS files
│   ├── App.tsx         # Main component
│   └── main.tsx        # Entry point
├── index.html
└── vite.config.ts
```

## 🎉 You're All Set!

Your portfolio is ready to impress recruiters and clients. Good luck with your job search!

---

**Built with:** React + TypeScript + Vite + Tailwind CSS + Framer Motion
