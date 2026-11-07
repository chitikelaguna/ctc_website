# Career Transformation Center Website

A modern React + Vite website for Career Transformation Center (CTC), a skill-development and career-focused learning institute based in Telangana. The site showcases the institute’s vision, learning approach, available training programs, founder story, and contact/enquiry flow.

## Overview

This project is a multi-page educational landing site designed to help learners discover programs in:

- Data Analytics
- Business Intelligence
- Data Visualization
- Generative AI and Agentic AI
- Career transformation bundles and upskilling paths

The website is built for a professional training brand and includes a polished landing page, program catalog, detailed course pages, and enquiry/contact form experience.

## Features

- Responsive landing page with hero section and call-to-action
- About page describing mission, vision, founder, and differentiators
- Course catalog with program cards and details
- Dynamic route-based course detail pages using React Router
- Learning approach section explaining the training flow
- Contact form for student enquiries
- Reusable UI components and centralized course/institute data
- Clean styling using custom CSS and component-based structure

## Tech Stack

- React 19
- Vite
- React Router DOM
- Lucide React icons
- Custom CSS files

## Project Structure

```text
ctc_website/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/
│       ├── about/
│       ├── courses/
│       ├── founder/
│       └── logo/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── CourseCard.jsx
│   │   ├── CourseGrid.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionTitle.jsx
│   │   └── Testimonials.jsx
│   ├── data/
│   │   ├── courses.js
│   │   ├── faqs.js
│   │   ├── institute.js
│   │   └── testimonials.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CourseDetails.jsx
│   │   ├── GenerativeAiCourseDetails.jsx
│   │   ├── MegaBundleCourseDetails.jsx
│   │   ├── PowerAppsCourseDetails.jsx
│   │   ├── PythonFullStackCourseDetails.jsx
│   │   ├── Courses.jsx
│   │   ├── Home.jsx
│   │   ├── LearningApproach.jsx
│   │   ├── NotFound.jsx
│   │   ├── TableauCourseDetails.jsx
│   │   ├── course-details.css
│   │   ├── courses.css
│   │   └── home-courses.css
└── README.md
```

`App.css` provides the shared site styles. The course catalog, Home course cards,
and premium course detail pages import their page-specific stylesheets.

## Main Pages and Routes

- `/` — Home page with hero, overview, benefits, programs, CTA
- `/about` — Institute information and founder story
- `/courses` — Full course catalog
- `/courses/:slug` — Individual program details
- `/learning-approach` — Training methodology and framework
- `/contact` — Enquiry form and institute contact information
- `*` — Not found page

## Key Data Model

The website uses centralized data files within the `src/data` folder:

- `courses.js` — program details, duration, topics, use cases, and ideal learner groups
- `institute.js` — institute info, founder, tagline, training mode, and learning approach
- `faqs.js` and `testimonials.js` — content displayed by the shared Home page sections

This structure makes the product easy to extend with additional courses or promotional content.

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Available Scripts

```bash
npm run dev
```
Runs the Vite development server.

```bash
npm run build
```
Creates a production build.

```bash
npm run preview
```
Previews the production build locally.

```bash
npm run lint
```
Runs ESLint when the ESLint executable is installed and configured.

## Run Locally

```bash
npm run dev
```
Then open the local Vite URL shown in the terminal.

## Notes

- The contact form submits enquiries through the existing external form integration.
- The SQL & Python for Data Analysts detail page provides a downloadable text syllabus.
- Course and institute content are static and can be updated easily from the data files.
- Course and institute images are stored under the `public/images` directory. The CTC logo
  is also used as the site favicon.

## Project Purpose

This project serves as a digital front door for an institute aiming to help learners transform their careers through practical, industry-relevant training in data, automation, business intelligence, and AI.

## License

This project is provided as a demo or educational website for the Career Transformation Center brand and is not currently configured with a formal open-source license.
