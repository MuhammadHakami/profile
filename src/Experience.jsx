import React from 'react';

const Experience = ({ data }) => {
    return (
        <div className="section-content">
            {data.map((job, index) => (
                <div key={index} className="enterprise-card">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start flex-wrap">
                            <div>
                                <h4 className="card-role mb-1">{job.role}</h4>
                                <h5 className="card-company mb-2">{job.company}</h5>
                            </div>
                            <span className="card-date">{job.duration}</span>
                        </div>
                        <ul className="mt-3 text-secondary">
                            {job.points.map((point, i) => (
                                <li key={i} className="mb-2">{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
