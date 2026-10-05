// Layout.jsx
// Shared header and navigation for every page, including a simple
// custom logo (initials in a styled badge) per Assignment 1's
// requirement for a custom logo. No third-party logos used.

import { NavLink } from 'react-router-dom';

// Nav items kept in an array so adding a page is a one-line change
const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education' },
  { path: '/services', label: 'Services' },
  { path: '/project', label: 'Project' },
  { path: '/contact', label: 'Contact' },
];

export default function Layout() {
  return (
    <header className="site-header">
      <div className="brand">
        {/* Custom logo: initials in a styled circle */}
        <div className="logo">SS</div>
        <h1>My Portfolio</h1>
      </div>

      <nav className="main-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'} // stops Home from staying active on every page
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}