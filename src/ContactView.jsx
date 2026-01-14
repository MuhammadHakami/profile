import React from 'react';

const ContactView = ({ onBack, profileData }) => {
    return (
        <div className="contact-view container-fluid">
            <div className="row justify-content-center pt-5 pb-5">
                <div className="col-12 col-md-10 col-lg-8">
                    {/* Back Button */}
                    <button
                        onClick={onBack}
                        className="btn-brutal-small mb-5"
                        style={{ fontSize: '1rem', padding: '0.8rem 1.5rem' }}
                    >
                        ← GO BACK
                    </button>

                    {/* Header */}
                    <h1 className="mb-2" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', letterSpacing: '-0.02em' }}>
                        MESSAGE ME
                    </h1>
                    <p className="mb-5 lead" style={{ opacity: 0.7, maxWidth: '600px' }}>
                        Have a question or want to collaborate? Send me a message below and I'll get back to you as soon as possible.
                    </p>

                    <div className="row mt-5">
                        {/* Form Section */}
                        <div className="col-md-8">
                            <form
                                action="https://formspree.io/EngMuhammadHakami@gmail.com"
                                method="POST"
                                className="contact-form"
                            >
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label">FULL NAME</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control-brutal"
                                            placeholder="e.g. Abdullah Ahmad"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label">EMAIL ADDRESS</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control-brutal"
                                            placeholder="e.g. abdullah@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">SUBJECT</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control-brutal"
                                        placeholder="Collaboration Inquiry"
                                        required
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="form-label">MESSAGE</label>
                                    <textarea
                                        name="message"
                                        className="form-control-brutal"
                                        rows="6"
                                        placeholder="Tell me about your project..."
                                        required
                                    ></textarea>
                                </div>

                                <input type="hidden" name="_to" value={profileData.email} />

                                <button type="submit" className="btn-brutal-large w-100">
                                    SEND MESSAGE [→]
                                </button>
                            </form>
                        </div>

                        {/* Sidebar / Info */}
                        <div className="col-md-4 mt-5 mt-md-0">
                            <div className="ps-md-4">
                                <h4 className="mb-4" style={{ fontWeight: 900 }}>DIRECT CONTACT</h4>
                                <div className="mb-4">
                                    <p className="mb-0 small opacity-50">EMAIL</p>
                                    <p className="h5">{profileData.email}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="mb-0 small opacity-50">LOCATION</p>
                                    <p className="h5">{profileData.location}</p>
                                </div>

                                <div className="mt-5 p-4" style={{ border: '2px dashed var(--ink-color)', opacity: 0.6 }}>
                                    <p className="mb-0 italic small">
                                        Note: This form is powered by Formspree. You'll be asked to verify your email on the first submission.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactView;
