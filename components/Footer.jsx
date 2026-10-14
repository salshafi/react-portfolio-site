// Footer.jsx
// Small site footer with the main ways to reach me.

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Salman Shafi · Toronto, ON</p>
        <p className="footer-links">
          <a href="https://github.com/salshafi" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/salmanshafi44" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:salshafi44@gmail.com">Email</a>
        </p>
      </div>
    </footer>
  );
}
