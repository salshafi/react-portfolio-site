// education.jsx
// Education page: program, expected graduation, and relevant courses.

const current = [
  'Web Application Development (React, Node.js, Express)',
  'Java Programming (OOP)',
  'Introduction to AI (search algorithms, intelligent agents)',
  'Linear Algebra & Statistics',
  'College Communications 2',
  'Employment Preparation',
];

const prior = [
  'Programming 2 (C#/OOP)',
  'Unix/Linux Operating Systems',
  'Client-Side Web Development (JavaScript, HTML/CSS)',
  'Python Programming',
  'Discrete Math & Intro Calculus',
];

export default function Education() {
  return (
    <>
      <h2 className="page-title">Education</h2>

      <section className="card edu-card">
        <div>
          <h3>Ontario College Advanced Diploma, Software Engineering Technology (AI)</h3>
          <p className="muted">Centennial College, Toronto, ON · Co-op stream</p>
        </div>
        <span className="pill">Expected graduation: April 2028</span>
      </section>

      <div className="grid grid-2">
        <section className="card">
          <h4>Current semester</h4>
          <ul className="check-list">
            {current.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </section>
        <section className="card">
          <h4>Prior relevant courses</h4>
          <ul className="check-list">
            {prior.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </section>
      </div>
    </>
  );
}
