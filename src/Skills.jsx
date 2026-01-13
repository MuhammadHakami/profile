import React from 'react';

const Skills = ({ data }) => {
    return (
        <div className="section-content">
            {data.categories.map((cat, index) => (
                <div key={index} className="mb-4">
                    <h5 className="text-secondary mb-3">{cat.category}</h5>
                    <div className="d-flex flex-wrap">
                        {cat.items.map((skill, i) => (
                            <span key={i} className="tech-badge mb-2" style={{ fontSize: '0.95rem', padding: '0.4rem 0.8rem' }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                    {index < data.categories.length - 1 && <hr className="mt-3 opacity-25" />}
                </div>
            ))}
        </div>
    );
};

export default Skills;
