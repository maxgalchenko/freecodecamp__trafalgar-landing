# Trafalgar Landing Page

<div align="center">

![React](https://img.shields.io/badge/React-16.13-blue?logo=react)
![Create React App](https://img.shields.io/badge/Create%20React%20App-3.4.1-informational)
![Emotion](https://img.shields.io/badge/Emotion-10.0-orange)
![React%20Router](https://img.shields.io/badge/React%20Router-5.2-red)
![GitHub%20Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-lightgrey)
![ESLint](https://img.shields.io/badge/Code%20Quality-ESLint-purple)

</div>

## Overview

Responsive healthcare landing page built with CRA, Emotion, and React Router. Demonstrates reusable UI components and a clean layout; useful as a reference for landing page challenges.

## Key Features

- Responsive layout with componentized sections (Hero, Services, Testimonials, Articles)
- CSS-in-JS styling via Emotion with theme and global styles
- GitHub Pages deployment via `gh-pages`

## Tech Stack

React 16, Create React App (react-scripts 3), Emotion 10, React Router 5

## Architecture

CRA app with `src/pages`, `src/components`, and themed Emotion styling. Client-side routing for home and fallback routes; static assets served from `public/`.

## Performance & Accessibility

Static build with lightweight assets. Semantic HTML and navigable structure for baseline accessibility.

## Quality

- Linting: ESLint (react-app) • Formatting: none configured
- Type safety: none
- Tests: Jest/RTL available via react-scripts; no test files present
- CI: none

## Prerequisites

- Node.js: `18.17.0`

## Installation

```bash
git clone https://github.com/maxgalchenko/freecodecamp__trafalgar-landing.git
cd freecodecamp__trafalgar-landing
npm install
```

## Quick Start

```bash
npm start
# Production
npm run build
npm run deploy
```

Open http://localhost:3000

## Available Scripts

- `npm start` – Start the development server (CRA)
- `npm run build` – Create an optimized production build to `build/`
- `npm test` – Run tests in watch mode (no tests included)
- `npm run deploy` – Publish the `build/` folder to GitHub Pages

## Screenshots

![Main](./public/localhost_3000_freecodecamp__trafalgar-landing_.png)

---

<div align="center">

**Built with ❤️ by [Maksym Galchenko](https://github.com/maxgalchenko)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/galchenko-max/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-green?style=for-the-badge&logo=web)](https://portfolio-green-six-29.vercel.app/)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:galchenko.maksym@gmail.com)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</div>
