# Dr. Michelle A. Epstein - Professional Website

A professional website for Dr. Michelle A. Epstein, PhD - Licensed Clinical Psychologist and Board Certified Executive & Leadership Coach.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Project Structure

```
epstein-website/
├── public/                  # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   ├── pages/              # Page components
│   │   ├── CoachingPage.jsx
│   │   ├── HomePage.jsx
│   │   └── TherapyPage.jsx
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles & Tailwind imports
│   └── main.jsx            # App entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── vite.config.js          # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd epstein-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

The build output will be in the `dist/` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Smooth Scroll Effects** - Quote sections fade in/out based on scroll position
- **Professional Aesthetics** - Clean, minimalist design with professional typography
- **Contact Forms** - Integrated email contact forms
- **Three Main Sections**:
  - Home page with philosophy and narrative
  - Clinical Therapy page
  - Executive Coaching page

## Customization

### Adding Images

Replace the image placeholder divs in the HomePage component with actual images:

```jsx
// In src/pages/HomePage.jsx, replace:
<div className="w-full max-w-3xl mx-auto aspect-[16/10] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
  <p className="text-gray-500">Image: Language constructs reality</p>
</div>

// With:
<img 
  src="/path/to/your/image.jpg" 
  alt="Description" 
  className="w-full max-w-3xl mx-auto aspect-[16/10] rounded-lg shadow-lg object-cover"
/>
```

### Updating Content

- **Navigation**: Edit `src/components/Navigation.jsx`
- **Footer**: Edit `src/components/Footer.jsx`
- **Home Page**: Edit `src/pages/HomePage.jsx`
- **Clinical Therapy**: Edit `src/pages/TherapyPage.jsx`
- **Executive Coaching**: Edit `src/pages/CoachingPage.jsx`

### Styling

Global styles are in `src/index.css`. Tailwind utility classes are used throughout components for styling.

## Contact Information

The website includes contact information for:
- **Email**: drmepstein@hotmail.com
- **Phone**: 847-702-8777

Update these in all page components as needed.

## License

Private - All rights reserved
