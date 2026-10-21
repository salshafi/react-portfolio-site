# Salman Shafi – Portfolio Website

A multi-page personal portfolio built with React, for the Web Application Development course (COMP229) at Centennial College. It has a contact form handled by Netlify Forms and an AI chat assistant that answers questions about my projects through a Netlify serverless function calling Gemini.

**Live site:** [https://salmanshafi-portfolio.netlify.app](https://salmanshafi-portfolio.netlify.app)

## Pages

- **Home**: introduction
- **About**: background and resume download
- **Education**: program and courses
- **Projects**: my featured work, with links to public GitHub repos
- **Services**: what I can build
- **Contact**: validated contact form, submitted through Netlify Forms

## Tech Stack

React 19 · Vite · React Router · JavaScript · CSS · deployed on Netlify

## Run Locally

```bash
git clone https://github.com/salshafi/react-portfolio-site.git
cd react-portfolio-site
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:5173`).

Other scripts: `npm run build` (production build), `npm run lint`.

## Project Structure

```
components/   Layout and Home components
public/       Images and resume PDF
src/          Page components (about, education, project, services, contact)
MainRouter.jsx  Route definitions
```

## Roadmap

- Learn Node/Express and MongoDB to build a back end with user login
- Resume page with versions by field

## Contact

salshafi44@gmail.com · [LinkedIn](https://www.linkedin.com/in/salmanshafi44) · [GitHub](https://github.com/salshafi)