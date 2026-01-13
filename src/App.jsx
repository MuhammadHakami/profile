import React from 'react';
import './App.css';
// import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import BackgroundSymbols from './BackgroundSymbols';
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
        <a href="/" className="logo">MH_PORTFOLIO_V2.0</a>
        <div className="nav-links d-none d-md-block">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
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
          <a href={`mailto:${profileData.email}`} className="btn-brutal">GET IN TOUCH</a>
        </div>
      </header>

      {/* Divider */}
      <div className="full-width" style={{ borderBottom: '1px solid var(--ink-color)' }}></div>

      {/* Projects Section */}
      <section id="work" className="main-col" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <h2>01 / Selected Works</h2>
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <div className="row">
              <div className="col-md-8">
                <h3 className="project-title mb-3">{project.title}</h3>
                <p className="mb-4" style={{ opacity: 0.7 }}>{project.description}</p>
                <div>
                  {project.tech.map((t, i) => (
                    <span key={i} className="project-tech">{t}</span>
                  ))}
                </div>
              </div>
              <div className="col-md-4 text-right d-none d-md-block">
                <span style={{ fontFamily: 'Space Mono', fontSize: '3rem', opacity: 0.1 }}>0{index + 1}</span>
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
          <a href={`mailto:${profileData.email}`} style={{ fontSize: '1.5rem', textDecoration: 'underline' }}>{profileData.email}</a>
        </div>
        <div className="mt-5 opacity-50 font-monospace">
          © {new Date().getFullYear()} MUHAMMAD HAKAMI. SAUDI MADE PRODUCTS.
        </div>
      </footer>
    </div>
  );
}

export default App;
