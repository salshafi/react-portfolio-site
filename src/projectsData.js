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
      'A FastAPI backend that tracks job applications in a relational SQL database. Built with SQLAlchemy and Pydantic validation, covered by 8 automated pytest tests, and set up with continuous integration through GitHub Actions.',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'pytest', 'GitHub Actions'],
    repo: 'https://github.com/salshafi/job-tracker-api',
    featured: true,
  },
  {
    id: 'java-transaction-engine',
    title: 'Java Transaction Engine',
    thumb: 'Java',
    summary:
      'A transaction-processing engine in Java that stores transactions in SQLite through JDBC and processes them concurrently with an ExecutorService thread pool.',
    tech: ['Java', 'JDBC', 'SQLite'],
    repo: 'https://github.com/salshafi/java-transaction-engine',
    featured: true,
  },
  {
    id: 'ai-course-labs',
    title: 'AI Course Labs (COMP 237)',
    thumb: 'AI',
    summary:
      'Coursework in Python: AI search algorithms (BFS, DFS, UCS and A*) and a scikit-learn logistic regression demo with a train/test split and confusion matrix, run on simulated data.',
    tech: ['Python', 'NumPy', 'scikit-learn'],
    note: 'Course work, kept in a private repository. Code available on request.',
  },
  {
    id: 'gradetracker',
    title: 'GradeTrackerApi',
    image: '/project-gradetracker.png',
    summary:
      'An academic tracking system built with ASP.NET Core and Entity Framework Core, with a normalized three-table relational schema and a JavaScript front end.',
    tech: ['C#', 'ASP.NET Core', 'Entity Framework Core'],
    note: 'Code is in a private repository and available on request.',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio Site',
    image: '/project-portfolio.png',
    summary:
      "The site you're viewing, built with React and React Router and deployed on Netlify. Next: a Node/Express back end and an AI chat feature.",
    tech: ['React', 'Vite', 'React Router', 'Netlify'],
    repo: 'https://github.com/salshafi/react-portfolio-site',
    featured: true,
  },
];
