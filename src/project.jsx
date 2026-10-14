// project.jsx
// Projects page: real, verifiable work. Projects with a public GitHub
// repo link to it so visitors can check the code directly.

export default function Project() {
  return (
    <div>
      <h2>My Projects</h2>

      <div>
        <img src="/project-jobtracker.png" alt="job-tracker-api" width="300" />
        <h3>Job Application Tracker API</h3>
        <p>
          A FastAPI backend that tracks job applications in a relational
          SQL database. Built with SQLAlchemy and Pydantic validation,
          covered by 8 automated pytest tests, and set up with continuous
          integration through GitHub Actions.
        </p>
        <p><strong>Tech:</strong> Python, FastAPI, SQLAlchemy, SQLite, pytest</p>
        <a href="https://github.com/salshafi/job-tracker-api" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>

      <div>
        <h3>Java Transaction Engine</h3>
        <p>
          A transaction-processing engine in Java that stores transactions
          in SQLite through JDBC and processes them concurrently with an
          ExecutorService thread pool.
        </p>
        <p><strong>Tech:</strong> Java, JDBC, SQLite</p>
        <a href="https://github.com/salshafi/java-transaction-engine" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>

      <div>
        <h3>AI Analytics Sandbox</h3>
        <p>
          Python experiments with AI search algorithms and a predictive
          analytics pipeline built with pandas, NumPy and scikit-learn.
        </p>
        <p><strong>Tech:</strong> Python, pandas, NumPy, scikit-learn</p>
        <a href="https://github.com/salshafi/ai-analytics-sandbox" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>

      <div>
        <img src="/project-gradetracker.png" alt="GradeTrackerApi" width="300" />
        <h3>GradeTrackerApi</h3>
        <p>
          An academic tracking system built with ASP.NET Core and Entity
          Framework Core, with a normalized three-table relational schema
          and a JavaScript front end. Code is in a private repository and
          available on request.
        </p>
        <p><strong>Tech:</strong> C#, ASP.NET Core, Entity Framework Core</p>
      </div>

      <div>
        <img src="/project-portfolio.png" alt="This Portfolio Site" width="300" />
        <h3>This Portfolio Site</h3>
        <p>
          The site you're viewing, built with React and React Router for my
          Web Application Development course and deployed on Netlify. Next:
          a Node/Express back end and an AI chat feature.
        </p>
        <p><strong>Tech:</strong> React, Vite, React Router</p>
        <a href="https://github.com/salshafi/react-portfolio-site" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
}