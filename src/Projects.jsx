import React from 'react';

const Projects = ({ data }) => {
    return (
        <div className="row">
            {data.map((project, index) => (
                <div key={index} className="col-lg-6 mb-4">
                    <div className="enterprise-card h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-accent font-weight-bold">{project.title}</h5>
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
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
