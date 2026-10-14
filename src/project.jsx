// project.jsx
// Projects page: real, verifiable work. Projects with a public GitHub
// repo link to it so visitors can check the code directly.

import { projects } from './projectsData';

export default function Project() {
  return (
    <>
      <h2 className="page-title">Projects</h2>
      <p className="page-lead">Real work you can check: public repos link straight to the code.</p>

      <div className="grid grid-2">
        {projects.map((p) => (
          <article key={p.id} className="card project-card">
            {p.image ? (
              <img className="project-img" src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
            ) : (
              <div className="project-thumb" aria-hidden="true">{p.thumb}</div>
            )}
            <h4>{p.title}</h4>
            <p>{p.summary}</p>
            {p.note && <p className="muted small">{p.note}</p>}
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
    </>
  );
}
