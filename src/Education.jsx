import React from 'react';

const Education = ({ data }) => {
    return (
        <div className="row">
            {data.map((edu, index) => (
                <div key={index} className="col-md-6 mb-4">
                    <div className="enterprise-card h-100">
                        <div className="card-body">
                            <h5 className="text-secondary">{edu.institution}</h5>
                            <h6 className="text-accent mb-2">{edu.degree}</h6>
                            <span className="card-date d-block mb-3">{edu.date}</span>
                            <ul className="pl-3 text-secondary small">
                                {edu.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;
