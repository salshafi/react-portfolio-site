// Layout.jsx
// Shared header and navigation for every page. The logo is a simple
// custom badge (initials in a gradient circle), no third-party logos.

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../src/App.css';

// Nav items kept in an array so adding a page is a one-line change
const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education' },
  { path: '/services', label: 'Services' },
  { path: '/project', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="logo">SS</span>
          <span className="brand-text">
            Salman Shafi <span className="brand-sub">Portfolio</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? 'main-nav open' : 'main-nav'}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'} // stops Home from staying active on every page
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
