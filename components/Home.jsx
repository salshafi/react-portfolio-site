// Home.jsx
// This component renders the "Home" page of the portfolio site —
// a welcome message plus a link into the rest of the site,
// as required by Assignment 1 (COMP229).

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Welcome</h2>
      <p>
        Hi, I'm Salman Shafi — a Software Engineering Technology (AI)
        student building toward a career in full-stack and ML/AI
        engineering. This site showcases my projects, background,
        and how to get in touch.
      </p>
          {/* Mission statement */}
         <p><strong>Mission:</strong> To build reliable, well-tested software and grow into an ML/AI engineer who solves real problems with data.</p>
          <Link to="/about">Learn more about me →</Link>
       
    </div>
  );
}