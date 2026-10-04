// project.jsx
// This component renders the "Projects" page of the portfolio site.
// It showcases real, verifiable work — each project links to its
// public GitHub repo so visitors can check the code directly,
// per Assignment 1's requirement of 3+ projects with descriptions.

export default function Project() {
  return (
    <div>
      {/* Page heading */}
      <h2>My Projects</h2>

      {/* Each project is a self-contained block: image, description,
          and a GitHub link — easy to add more projects later without
          restructuring the page */}

      <div>
        <img src="/project-gradetracker.png" alt="GradeTrackerApi" width="300" />
        <h3>GradeTrackerApi</h3>
        <p>
          A full-stack academic tracking system built with ASP.NET Core
          and SQL Server. I engineered the RESTful API using Entity
          Framework Core, designed a normalized three-table database
          schema, and am currently working on deploying it to Azure.
        </p>
        <a href="https://github.com/salshafi/GradeTrackerApi" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>

      <div>
        <img src="/project-jobtracker.png" alt="job-tracker-api" width="300" />
        <h3>job-tracker-api</h3>
        <p>
          A FastAPI backend that tracks job applications through a
          relational SQL database. Built with SQLAlchemy, covered by
          automated pytest tests, and set up with continuous
          integration through GitHub Actions.
        </p>
        <a href="https://github.com/salshafi/job-tracker-api" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>

      <div>
        <img src="/project-portfolio.png" alt="This Portfolio Site" width="300" />
        <h3>This Portfolio Site</h3>
        <p>
          The site you're viewing right now — built with React and
          React Router as part of my Web Application Development
          coursework, deployed live through Netlify.
        </p>
        <a href="https://github.com/salshafi/react-portfolio-site" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
}