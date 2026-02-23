# yuma-yamamoto-website-ui

Personal portfolio website for Yuma Yamamoto — Software Developer & AI Engineer.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — styling with dark mode support
- **Lucide React** — icons

## Features

- Hero section with bio, skills grid, and interactive experience timeline
- Projects showcase
- Light/dark mode toggle (defaults to dark, persists to `localStorage`)
- Responsive layout with mobile navigation menu

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
  app/
    components/       # Page sections and UI components
    constants/        # Shared constants, data, and type definitions
    hooks/            # Custom React hooks (useTheme)
    utils.ts
  images/
  styles/
    theme.css         # CSS variables for light/dark theming
    tailwind.css      # Tailwind entry point
```
