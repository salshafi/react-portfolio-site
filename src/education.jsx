// education.jsx
// This component renders the "Education" page of the portfolio site.
// It lists my academic qualifications, required by Assignment 1 (COMP229).

export default function Education() {
  return (
    <div>
      {/* Page heading */}
      <h2>Education</h2>

      {/* Current program — matches the Education section on my resume
          for consistency across all my professional materials */}
      <div>
        <h3>Ontario College Advanced Diploma, Software Engineering Technology (AI)</h3>
        <p>Centennial College, Toronto, ON</p>
        <p>Expected Graduation: April 2028</p>
      </div>

      {/* Relevant coursework — gives visitors a sense of the technical
          depth of the program, not just the diploma title */}
      <p>
        <strong>Relevant Courses:</strong> Programming 2 (C#/OOP), Web
        Application Development, Unix/Linux Operating Systems, JavaScript
        Programming, Python Programming
      </p>
    </div>
  );
}