// Services.jsx
// This component renders the "Services" page of the portfolio site.
// It lists the kinds of work I offer, matching the Services requirement
// from Assignment 1 (COMP229).

export default function Services() {
  return (
    <div>
      {/* Page heading */}
      <h2>Services</h2>

      {/* Short intro line before listing individual services */}
      <p>Here are the areas I can help with:</p>

      {/* Each service as its own block — easy to extend later
          without restructuring the whole page */}
      <ul>
        <li>
          <strong>Web Development</strong> — building responsive, full-stack
          web applications using React, Node.js, and modern tooling.
        </li>
        <li>
          <strong>Software Engineering</strong> — designing and building
          backend systems and APIs in C# and Python.
        </li>
        <li>
          <strong>Data & AI/ML</strong> — working with data pipelines, SQL,
          and machine learning models using Python (Pandas, Scikit-Learn).
        </li>
      </ul>
    </div>
  );
}