// Home.jsx
// Landing page: who I am, what I'm looking for, featured work, and
// clear next steps for a recruiter (projects, resume, contact).

import { Link } from 'react-router-dom';
import { projects } from '../src/projectsData';

const strengths = [
  {
    title: 'Full-Stack Development',
    text: 'React front ends with Python/FastAPI or C#/ASP.NET Core back ends, backed by SQL databases.',
  },
  {
    title: 'Data & Machine Learning',
    text: 'Python, NumPy and scikit-learn for data analysis and simple machine learning models.',
  },
  {
    title: 'Quality & Tooling',
    text: 'Automated tests with pytest, GitHub Actions CI, Git workflow and Linux scripting.',
  },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="hero">
        <img className="hero-photo" src="/profile-photo.jpg" alt="Salman Shafi" />
        <div className="hero-text">
          <span className="pill">
            <span className="dot" /> Seeking a Winter 2027 co-op · Toronto, ON
          </span>
          <h2 className="hero-title">
            Hi, I'm <span className="grad">Salman Shafi</span>
          </h2>
          <p className="hero-role">Software Engineering Technology (AI) student at Centennial College</p>
          <p className="hero-lead">
            I build reliable, well-tested software and I'm growing into an ML/AI engineer who
            solves real problems with data. This site shows my projects, background and how to reach me.
          </p>
          <div className="btn-row">
            <Link to="/project" className="btn btn-primary">View projects</Link>
            <a href="/Salman_Shafi_Resume_FullStack.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Resume (PDF)
            </a>
            <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">What I work on</h3>
        <div className="grid grid-3">
          {strengths.map((s) => (
            <article key={s.title} className="card">
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h3 className="section-title">Featured projects</h3>
          <Link to="/project" className="text-link">All projects →</Link>
        </div>
        <div className="grid grid-3">
          {featured.map((p) => (
            <article key={p.id} className="card">
              <h4>{p.title}</h4>
              <p>{p.summary}</p>
              <ul className="chips">
                {p.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-link">
                  View on GitHub →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
