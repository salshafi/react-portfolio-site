// about.jsx
// This component renders the "About Me" page of the portfolio site.
// It introduces who I am, my background, and links to my resume —
// required content for Assignment 1 (COMP229).

export default function About() {
  return (
    <div>
      {/* Page heading */}
      <h2>About Me</h2>

      {/* Profile photo — replace src with your actual headshot file
          once it's added to the public/ or src/assets/ folder */}
      <img
        src="/profile-photo.jpg"
        alt="Salman Shafi"
        width="200"
      />

      {/* Short personal bio */}
      <p>
        Hi, I'm Salman Shafi. I'm a Software Engineering Technology (AI)
        student at Centennial College, working toward a career in
        ML/AI engineering. I enjoy building full-stack applications and
        exploring how data and machine learning can solve real problems.
      </p>

      {/* Resume link — required by the assignment.
          Place the actual PDF in the public/ folder so this path works. */}
      <p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          View My Resume (PDF)
        </a>
      </p>
    </div>
  );
}