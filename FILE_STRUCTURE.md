# Dr. Epstein Website - File Structure

## Visual Directory Tree

```
epstein-website/
│
├── 📄 index.html                    # Main HTML file
├── 📄 package.json                  # Project dependencies and scripts
├── 📄 vite.config.js                # Vite configuration
├── 📄 tailwind.config.js            # Tailwind CSS configuration
├── 📄 postcss.config.js             # PostCSS configuration
├── 📄 .gitignore                    # Git ignore rules
├── 📄 README.md                     # Project documentation
│
├── 📁 public/                       # Static assets (images, fonts, etc.)
│   └── (Place your images here)
│
└── 📁 src/                          # Source code
    │
    ├── 📄 main.jsx                  # Application entry point
    ├── 📄 App.jsx                   # Main app component with routing
    ├── 📄 index.css                 # Global styles + Tailwind imports
    │
    ├── 📁 components/               # Reusable UI components
    │   ├── 📄 Navigation.jsx        # Top navigation bar
    │   ├── 📄 Footer.jsx            # Footer component
    │   └── 📄 ContactForm.jsx       # Contact form component
    │
    └── 📁 pages/                    # Page components
        ├── 📄 HomePage.jsx          # Home page with quotes
        ├── 📄 TherapyPage.jsx       # Clinical therapy page
        └── 📄 CoachingPage.jsx      # Executive coaching page
```

## File Descriptions

### Root Level Files

- **index.html** - The main HTML template that loads your React app
- **package.json** - Contains all npm dependencies and scripts
- **vite.config.js** - Configuration for Vite build tool
- **tailwind.config.js** - Tailwind CSS configuration
- **postcss.config.js** - PostCSS configuration for Tailwind
- **.gitignore** - Specifies which files Git should ignore
- **README.md** - Project documentation and setup instructions

### Source Files (`src/`)

**Main Files:**
- **main.jsx** - Entry point that renders the app into the DOM
- **App.jsx** - Main component that handles page routing and state
- **index.css** - Global CSS styles and Tailwind directives

**Components Folder (`src/components/`):**
- **Navigation.jsx** - Sticky header navigation with mobile menu
- **Footer.jsx** - Footer with contact info and links
- **ContactForm.jsx** - Reusable contact form component

**Pages Folder (`src/pages/`):**
- **HomePage.jsx** - Landing page with scrolling quote sections
- **TherapyPage.jsx** - Clinical therapy services and info
- **CoachingPage.jsx** - Executive coaching services and testimonials

## How Components Connect

```
App.jsx (Root)
    │
    ├── Navigation.jsx (Always visible)
    │
    ├── [Current Page Component]
    │   ├── HomePage.jsx
    │   │   └── ContactForm.jsx
    │   │
    │   ├── TherapyPage.jsx
    │   │   └── ContactForm.jsx
    │   │
    │   └── CoachingPage.jsx
    │       └── ContactForm.jsx
    │
    └── Footer.jsx (Always visible)
```

## VS Code Recommended Extensions

When you open this project in VS Code, consider installing:

1. **ES7+ React/Redux/React-Native snippets** - Code snippets
2. **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
3. **ESLint** - Code linting
4. **Prettier** - Code formatting

## Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Workflow

1. Run `npm run dev` to start the development server
2. Open browser to `http://localhost:5173`
3. Edit files in `src/` folder
4. Changes will hot-reload automatically
5. When ready to deploy, run `npm run build`
