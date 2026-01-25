# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bilingual (Catalan/Spanish) wedding website for Sofia and David, built on Gatsby 5 with React 18, using CSS Modules for styling.

## Commands

```bash
npm start              # Dev server on port 5000
npm run develop        # Dev server on default port 8000
npm run build          # Production build to /public
npm run serve          # Serve production build locally
npm run clean          # Clean Gatsby cache and build output
npm run format         # Format code with Prettier
```

## Architecture

### Component Pattern
Each component follows this structure:
```
ComponentName/
├── index.js                  # Export statement
├── ComponentName.js          # Main component logic
├── ComponentName.module.css  # Scoped styles
└── readme.md                 # Component documentation
```

### Key Directories
- `src/components/` - Reusable React components
- `src/pages/` - Gatsby file-based routing (index.js, 404.js)
- `src/helpers/` - Utility functions and translations
- `src/context/` - React Context providers (LanguageProvider)
- `src/config.json` - Wedding configuration (couple, date, venue, schedule)

### State Management
- React Context API for language switching (`LanguageProvider`)
- Local component state with `useState`
- Browser localStorage for language preference

### Styling
- CSS Modules for component-scoped styles
- Global variables defined in `src/components/Layout/Globals.css`:
  - Spacing: `--space1` to `--space8`
  - Wedding colors: `--wedding-sage`, `--wedding-coral`, `--wedding-cream`, `--wedding-peach`
  - Font families: Inria Serif, Inter

### Translations (`src/helpers/translations.js`)
All text content in Catalan (ca) and Spanish (es).

## Deployment

Configured for Netlify deployment with Forms integration for RSVP. Build output goes to `public/` directory.
