// projectsData.js
// One list of projects used by both the Home page (featured) and the
// Projects page (full list). Only real work goes here. A project with a
// public repo gets a `repo` link; private school work is marked as such.

export const projects = [
  {
    id: 'job-tracker-api',
    title: 'Job Application Tracker API',
    image: '/project-jobtracker.png',
    summary:
      'A FastAPI backend that tracks job applications in a relational SQL database. Built with SQLAlchemy and Pydantic validation, with an AI assistant endpoint using Gemini, covered by 27 automated pytest tests that run through GitHub Actions.',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'pytest', 'GitHub Actions'],
    repo: 'https://github.com/salshafi/job-tracker-api',
    featured: true,
  },
  {
    id: 'java-transaction-engine',
    title: 'Java Transaction Engine',
    image: "/project-java-engine.png",
    summary:
      'A transaction-processing engine in Java that stores transactions in SQLite through JDBC and processes them concurrently with an ExecutorService thread pool.',
    tech: ['Java', 'JDBC', 'SQLite'],
    repo: 'https://github.com/salshafi/java-transaction-engine',
    featured: true,
  },
  
  
  {
    id: 'gradetracker',
    title: 'GradeTrackerApi',
    image: '/project-gradetracker.png',
    summary:
      'A C# ASP.NET Core Web API for tracking grades, using Entity Framework Core with SQLite, plus a JavaScript front end that lists and adds grades.',
    tech: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQLite'],
    note: 'Code is in a private repository and available on request.',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio Site',
    image: '/project-portfolio.png',
    summary:
      "The site you're viewing, built with React, Vite and React Router and deployed on Netlify. It has a contact form handled by Netlify Forms and an AI chat assistant that answers questions about my projects through a serverless function.",
    tech: ['React', 'Vite', 'React Router', 'Netlify'],
    repo: 'https://github.com/salshafi/react-portfolio-site',
    featured: true,
  },
];
