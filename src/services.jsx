// services.jsx
// The areas I work in, plus the tools I use (and what I'm still learning).

const areas = [
  {
    title: 'Full-Stack Development',
    text: 'Building end-to-end web applications: React front ends with C#/ASP.NET Core or Python/FastAPI back ends, backed by SQL databases.',
  },
  {
    title: 'Data Analysis & Engineering',
    text: 'Working with structured datasets, SQL and data pipelines using Python (pandas, NumPy).',
  },
  {
    title: 'Linux Systems & Automation',
    text: 'Writing Bash automation scripts for system monitoring, account provisioning and POSIX permission management.',
  },
  {
    title: 'AI/ML (in progress)',
    text: 'Currently studying search algorithms, intelligent agents and classification models through coursework, building toward applied ML projects.',
  },
];

const stack = [
  ['Languages', ['Python', 'Java', 'C#', 'JavaScript', 'SQL']],
  ['Web', ['React', 'FastAPI', 'ASP.NET Core', 'HTML/CSS']],
  ['Data & AI', ['pandas', 'NumPy', 'scikit-learn']],
  ['Tools', ['Git & GitHub', 'GitHub Actions', 'pytest', 'Linux/Bash', 'Netlify']],
  ['Currently learning', ['Node.js', 'Express', 'MongoDB']],
];

export default function Services() {
  return (
    <>
      <h2 className="page-title">Services</h2>
      <p className="page-lead">The areas I work in, and the tools I use.</p>

      <div className="grid grid-2">
        {areas.map((a) => (
          <article key={a.title} className="card">
            <h4>{a.title}</h4>
            <p>{a.text}</p>
          </article>
        ))}
      </div>

      <h3 className="section-title">Tech stack</h3>
      <div className="stack">
        {stack.map(([group, items]) => (
          <div key={group} className="stack-row">
            <span className="stack-label">{group}</span>
            <ul className="chips">
              {items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
