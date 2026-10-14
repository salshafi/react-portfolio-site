// knowledge.mjs
// The ONLY facts the chat assistant may use. Keep this accurate: if it is
// not written here, the assistant must say it does not know.

export const KNOWLEDGE = `
ABOUT SALMAN SHAFI
- Name: Salman Shafi. Based in Toronto, ON.
- Student in the Software Engineering Technology (AI) Ontario College Advanced Diploma at Centennial College, co-op stream. Expected graduation: April 2028.
- Looking for a Winter 2027 co-op placement (start in January 2027).
- Interests: full-stack development, data, and ML/AI engineering.
- Earlier work experience: customer service at a grocery store (2018 to 2021).

PROJECTS
- Job Application Tracker API: a FastAPI backend that tracks job applications in a relational SQL database. Uses SQLAlchemy and Pydantic validation, has 8 automated pytest tests, and runs continuous integration with GitHub Actions. Tech: Python, FastAPI, SQLAlchemy, SQLite, pytest. Code: https://github.com/salshafi/job-tracker-api
- Java Transaction Engine: a transaction-processing engine in Java that stores transactions in SQLite through JDBC and processes them concurrently with an ExecutorService thread pool. Code: https://github.com/salshafi/java-transaction-engine
- AI Course Labs (COMP 237): coursework in Python with AI search algorithms (BFS, DFS, UCS and A*) and a scikit-learn logistic regression demo run on simulated data. The code is in a private repository and available on request.
- GradeTrackerApi: an academic tracking system built with ASP.NET Core and Entity Framework Core, with a normalized three-table relational schema and a JavaScript front end. The code is in a private repository and available on request.
- This portfolio site: built with React, Vite and React Router, deployed on Netlify. Code: https://github.com/salshafi/react-portfolio-site

SKILLS
- Languages: Python, Java, C#, JavaScript, SQL.
- Web: React, FastAPI, ASP.NET Core, HTML/CSS.
- Data and AI: pandas, NumPy, scikit-learn.
- Tools: Git and GitHub, GitHub Actions, pytest, Linux/Bash, Netlify.
- Currently learning: Node.js, Express, MongoDB.
- Linux experience: Bash automation scripts for system monitoring, account provisioning and POSIX permission management.

COURSEWORK
- Current: Web Application Development (React, Node.js, Express), Java Programming (OOP), Introduction to AI (search algorithms, intelligent agents), Linear Algebra and Statistics, College Communications 2, Employment Preparation.
- Prior: Programming 2 (C#/OOP), Unix/Linux Operating Systems, Client-Side Web Development (JavaScript, HTML/CSS), Python Programming, Discrete Math and Intro Calculus.

CONTACT
- Email: salshafi44@gmail.com
- LinkedIn: https://www.linkedin.com/in/salmanshafi44
- GitHub: https://github.com/salshafi
- Resume (PDF): on the About page of this site.
- Visitors can also use the Contact page form. No phone number is published; Salman shares it when applying.
`;
