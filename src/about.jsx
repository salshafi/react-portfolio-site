// about.jsx
// "About Me" page: who I am, quick facts, and my resume.

const facts = [
  ['Program', 'Software Engineering Technology (AI), Centennial College'],
  ['Location', 'Ottawa, ON'],
  ['Looking for', 'Winter 2027 co-op (January 2027 start)'],
  ['Focus', 'Full-stack development, data and ML/AI'],
];

export default function About() {
  return (
    <>
      <h2 className="page-title">About Me</h2>

      <section className="about">
        <div className="about-side">
          <img className="profile-photo" src="/profile-photo.jpg" alt="Salman Shafi" />
          <h3>Salman Shafi</h3>
          <div className="btn-row center">
            <a href="/Salman_Shafi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View Resume (PDF)
            </a>
            <a href="/Salman_Shafi_Resume.pdf" download className="btn btn-ghost">
              Download
            </a>
          </div>
        </div>

        <div className="about-main">
          <p>
            Hi, I'm Salman Shafi. I'm a Software Engineering Technology (AI) student at Centennial College (online), based in Ottawa. I enjoy building backend and full-stack applications: REST APIs in Python and C#, a multithreaded Java app with JDBC, and React front ends, all with automated tests where I can. I'm also learning more about AI and machine learning through my coursework. 
            I'm looking for a 4-month co-op from January to April 2027, remote or in Ottawa.
          </p>
          <p>
            I like projects I can test and verify: APIs with automated tests, databases with a
            clear schema, and code that other people can read and run. I'm looking for a
            co-op placement where I can contribute to a real team and keep learning.
          </p>

          <dl className="facts">
            {facts.map(([k, v]) => (
              <div key={k} className="fact">
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
