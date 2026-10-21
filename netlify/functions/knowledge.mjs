// knowledge.mjs
// The ONLY facts the chat assistant may use. Keep this accurate: if it is
// not written here, the assistant must say it does not know.

export const KNOWLEDGE = `
ABOUT SALMAN SHAFI
- Name: Salman Shafi. Based in Ottawa, ON.
- Student in the Software Engineering Technology (AI) Ontario College Advanced Diploma at Centennial College (online), co-op stream.
- Looking for a 4-month Winter 2027 co-op placement, January to April 2027 (flexible start date). Remote or in-person in Ottawa.
- Interests: backend and full-stack development, with a growing interest in AI.
- Earlier work experience: customer service at a grocery store (2018 to 2021).

PROJECTS
- Job Application Tracker API: a FastAPI backend that tracks job applications in a relational SQL database. Uses SQLAlchemy and Pydantic validation, has an automated pytest suite, and runs continuous integration with GitHub Actions. Tech: Python, FastAPI, SQLAlchemy, SQLite, pytest. Code: https://github.com/salshafi/job-tracker-api
- Java Transaction Engine: a transaction-processing engine in Java that stores transactions in SQLite through JDBC and processes them concurrently with an ExecutorService thread pool. Code: https://github.com/salshafi/java-transaction-engine
- GradeTrackerApi: an academic tracking system built with ASP.NET Core and Entity Framework Core, with a normalized three-table relational schema and a JavaScript front end. Code: https://github.com/salshafi/GradeTrackerApi
- This portfolio site: built with React, Vite and React Router, deployed on Netlify, with a Netlify Forms contact form and this chat assistant. Code: https://github.com/salshafi/react-portfolio-site

SKILLS
- Languages: Python, Java, C#, JavaScript, SQL.
- Backend: FastAPI, SQLAlchemy, Pydantic, ASP.NET Core, Entity Framework Core, JDBC, REST APIs, SQLite.
- Web: React, HTML/CSS.
- Tools: Git and GitHub, GitHub Actions, pytest, Linux/Bash, Netlify.
- Currently learning: Node.js, Express, MongoDB, Docker.
- Linux experience: Bash automation scripts, cron scheduling, and text processing with grep, sed and awk.

COURSEWORK
- Current: Web Application Development (React, Node.js, Express), Java Programming (OOP), Introduction to AI, Linear Algebra and Statistics, College Communications 2, Employment Preparation.
- Prior: Programming 2 (C#/OOP), Unix/Linux Operating Systems, Client-Side Web Development (JavaScript, HTML/CSS), Python Programming.

CONTACT
- Email: salshafi44@gmail.com
- LinkedIn: https://www.linkedin.com/in/salmanshafi44
- GitHub: https://github.com/salshafi
- Resume (PDF): on the About page of this site.
- Visitors can also use the Contact page form. No phone number is published; Salman shares it when applying.
`;