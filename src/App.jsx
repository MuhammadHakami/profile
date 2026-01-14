import React, { useState } from 'react';
import './App.css';
// import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import BackgroundSymbols from './BackgroundSymbols';
import ContactView from './ContactView';
import { profileData, skillsData, experienceData, projectsData, educationData } from './data';

const Marquee = () => (
  <div style={{
    gridColumn: '1 / -1',
    borderBottom: '1px solid var(--ink-color)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '0.8rem 0',
    background: 'var(--accent-color)',
    fontFamily: 'Space Mono, monospace',
    textTransform: 'uppercase',
    fontSize: '0.9rem'
  }}>
    <div style={{ display: 'inline-block', animation: 'marquee 20s linear infinite' }}>
      SAUDI ARCHITECTURE • VISION 2030 • GENERATIVE AI • MULTI-AGENT SYSTEMS • DIGITAL TWINS • SMART CITIES •  SAUDI ARCHITECTURE • VISION 2030 • GENERATIVE AI • MULTI-AGENT SYSTEMS • DIGITAL TWINS • SMART CITIES •
    </div>
    <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style>
  </div>
);

function App() {
  const [isContactView, setIsContactView] = useState(false);

  const toggleContact = (e) => {
    if (e) e.preventDefault();
    setIsContactView(!isContactView);
    window.scrollTo(0, 0);
  };

  if (isContactView) {
    return (
      <div className="app-grid">
        <BackgroundSymbols />
        <nav className="nav-bar">
          <button onClick={() => setIsContactView(false)} className="logo" style={{ background: 'none', border: 'none', padding: 0 }}>MH_PORTFOLIO</button>
        </nav>
        <div className="main-col">
          <ContactView onBack={() => setIsContactView(false)} profileData={profileData} />
        </div>
        <footer className="footer-section text-center">
          <div className="opacity-50 font-monospace">
            © {new Date().getFullYear()} MUHAMMAD HAKAMI. SAUDI MADE PRODUCTS.
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="app-grid">
      {/* Background Layer */}
      <BackgroundSymbols />

      {/* Grid Guides (Visual Design Element) */}
      <div className="grid-guide" style={{ gridColumn: '1' }}></div>
      <div className="grid-guide" style={{ gridColumn: '2' }}></div>
      <div className="grid-guide" style={{ gridColumn: '3' }}></div>
      <div className="grid-guide" style={{ gridColumn: '4' }}></div>

      {/* Navbar */}
      <nav className="nav-bar">
        <a href="/" className="logo">MH_PORTFOLIO</a>
        <div className="nav-links d-none d-md-block">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact" onClick={toggleContact}>Contact</a>
        </div>
      </nav>

      <Marquee />

      {/* Hero Section */}
      <header className="hero-container">
        <span className="hero-meta">EST. 2019 — RIYADH, KSA</span>
        <h1>Muhammad<br />Hakami</h1>
        <div style={{ marginTop: '2rem', maxWidth: '600px' }}>
          <p className="lead">
            {profileData.title}. Specialist in <strong>Generative AI</strong>, <strong>Multi-Agent Systems</strong>, and <strong>Digital Twins</strong>.
            Architecting the future of Saudi Smart Cities.
          </p>
        </div>
        <div className="mt-5">
          <button onClick={toggleContact} className="btn-brutal">GET IN TOUCH</button>
        </div>
      </header>

      {/* Divider */}
      <div className="full-width" style={{ borderBottom: '1px solid var(--ink-color)' }}></div>

      <section id="work" className="main-col" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="d-flex justify-content-between align-items-baseline mb-5">
          <h2>01 / Selected Works</h2>
          <span className="text-secondary font-monospace" style={{ fontSize: '0.8rem' }}>TOTAL_PROJECTS: {projectsData.length}</span>
        </div>

        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <div className="row align-items-center">
              <div className="col-md-5">
                {project.image && (
                  <div className="project-image-container">
                    <img
                      src={`./assets/${project.image}`}
                      alt={project.title}
                      className="project-img"
                      onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.display = 'none'; }}
                    />
                  </div>
                )}
                <div className="d-md-none mb-3">
                  <span className="project-tech" style={{ margin: 0, background: 'var(--ink-color)', color: 'var(--accent-color)' }}>{project.date}</span>
                </div>
              </div>
              <div className="col-md-7">
                <div className="d-none d-md-flex align-items-center mb-2">
                  <span className="project-tech" style={{ margin: 0, marginRight: '1rem', background: 'var(--ink-color)', color: 'var(--accent-color)' }}>{project.date}</span>
                  <h3 className="project-title my-0" style={{ fontSize: '1.8rem' }}>{project.title}</h3>
                </div>
                <h3 className="project-title d-md-none mb-3" style={{ fontSize: '1.5rem' }}>{project.title}</h3>

                <p className="mb-4" style={{ opacity: 0.7, fontSize: '1.1rem', lineHeight: '1.6' }}>{project.description}</p>

                <div className="mb-4 d-flex flex-wrap" style={{ gap: '0.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} className="project-tech" style={{ margin: 0 }}>{t}</span>
                  ))}
                </div>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brutal-small"
                    >
                      VIEW PROJECT →
                    </a>
                  )}
                  <span className="d-none d-md-block" style={{ fontFamily: 'Space Mono', fontSize: '2rem', opacity: 0.1 }}>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="full-width" style={{ borderBottom: '1px solid var(--ink-color)' }}></div>

      {/* Experience Section */}
      <section id="about" className="main-col" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="row">
          <div className="col-lg-6">
            <h2>02 / Experience</h2>
            <div className="pr-lg-5">
              <Experience data={experienceData} />
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <h2>03 / Education</h2>
            <Education data={educationData} />
          </div>
        </div>
      </section>

      <div className="full-width" style={{ borderBottom: '1px solid var(--ink-color)' }}></div>

      {/* Skills Section */}
      <section className="main-col" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <h2>04 / Technical Stack</h2>
        <Skills data={skillsData} />
      </section>

      {/* Footer */}
      <footer id="contact" className="footer-section text-center">
        <h2 style={{ borderBottom: 'none', justifyContent: 'center', fontSize: '3rem' }}>LET'S BUILD THE FUTURE</h2>
        <div className="mt-4">
          <button
            onClick={toggleContact}
            style={{ fontSize: '1.5rem', textDecoration: 'underline', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            {profileData.email}
          </button>
        </div>
        <div className="mt-5 opacity-50 font-monospace">
          © {new Date().getFullYear()} MUHAMMAD HAKAMI. SAUDI MADE PRODUCTS.
        </div>
      </footer>
    </div>
  );
}

export default App;
