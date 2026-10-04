// Layout.jsx
// Shared header and navigation for every page, including a simple
// custom logo (initials in a styled badge) per Assignment 1's
// requirement for a custom logo — no third-party logos used.

import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Custom logo: just initials in a styled circle */}
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#5b8def',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          SS
        </div>
        <h1>My Portfolio</h1>
      </div>

      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
        <Link to="/education">Education</Link> | <Link to="/services">Services</Link> |{' '}
        <Link to="/project">Project</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <hr />
    </div>
  );
}