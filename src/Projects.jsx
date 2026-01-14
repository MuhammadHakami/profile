import React from 'react';

const Projects = ({ data }) => {
    return (
        <div className="row">
            {data.map((project, index) => (
                <div key={index} className="col-lg-6 mb-4">
                    <div className="enterprise-card h-100 d-flex flex-column">
                        <div className="card-body d-flex flex-column flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <h5 className="card-title text-accent font-weight-bold mb-0">{project.title}</h5>
                                <span className="text-secondary small font-weight-bold" style={{ whiteSpace: 'nowrap', marginLeft: '10px' }}>{project.date}</span>
                            </div>
                            <div className="mb-3">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="card-text text-secondary flex-grow-1">
                                {project.description}
                            </p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-accent btn-sm mt-3 align-self-start"
                                    style={{ border: '2px solid var(--accent)', fontWeight: 'bold' }}
                                >
                                    VIEW PROJECT →
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
