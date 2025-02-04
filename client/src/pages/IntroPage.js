// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/IntroPage.css';

// // Feature card component
// const FeatureCard = ({ icon, name }) => (
//     <div className="feature-card">
//         <div className="feature-icon">{icon}</div>
//         <p>{name}</p>
//     </div>
// );

// const IntroPage = () => {
//     const navigate = useNavigate();

//     const features = [
//         { name: 'Student Registration', icon: '🎓' },
//         { name: 'Event Listing', icon: '📅' },
//         { name: 'Custom Forms', icon: '📝' },
//         { name: 'Sponsor Connections', icon: '🤝' },
//         { name: 'Live Chat', icon: '💬' },
//         { name: 'Data Analytics', icon: '📊' },
//         { name: 'Mobile Friendly', icon: '📱' },
//         { name: 'Easy Enrollment', icon: '✅' },
//     ];

//     return (
//         <div className="homepage">
//             {/* Header Section */}
//             <header className="homepage-header">
//                 <div className="header-top">
//                     <div className="logo">Eventify</div>
//                     <div className="auth-buttons">
//                         <button className="btn-secondary" onClick={() => navigate("/login")}>Log In</button>
//                         <button className="btn-primary" onClick={() => navigate("/register")}>Sign Up</button>
//                     </div>
//                 </div>
//                 <p >The ultimate platform to manage and discover events.</p>
//             </header>

//             {/* Features Section */}
//             <section className="features-section">
//                 <div className="features-grid">
//                     {/* Add the first feature card and center it */}
//                     <div className="feature-card intro-card center-card">
//                         <div className="feature-icon">✨</div>
//                         <p><strong>The best of Eventify</strong></p>
//                         <p>Explore our key features designed for seamless event management.</p>
//                     </div>

//                     {/* Display the rest of the feature cards */}
//                     {features.map((feature, index) => (
//                         <FeatureCard key={index} icon={feature.icon} name={feature.name} />
//                     ))}
//                 </div>
//             </section>

//             {/* About Section */}
//             <section className="about-section">
//                 <h2>About Eventify</h2>
//                 <p>
//                     Eventify is an innovative platform tailored for inter-college events. 
//                     Whether you are a student looking to participate or an organizer 
//                     planning a large-scale event, Eventify makes it easy and efficient 
//                     for everyone.
//                 </p>
//                 <p>
//                     From custom forms and data analytics to live chat and sponsor 
//                     connections, Eventify ensures that every aspect of event 
//                     management is smooth and enjoyable.
//                 </p>
//             </section>

//             {/* Contact Section */}
//             <section className="contact-section">
//                 <h2>Contact Us</h2>
//                 <p>Have questions or need support? We're here to help!</p>
//                 <p><strong>Email:</strong> support@eventify.com</p>
//                 <p><strong>Phone:</strong> +1 234 567 890</p>
//                 <p>
//                     <strong>Follow us:</strong>
//                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
//                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
//                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
//                 </p>
//             </section>

//             {/* Footer */}
//             <footer className="homepage-footer">
//                 <p>Eventify © 2024. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default IntroPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/IntroPage.css';

// Feature card component
const FeatureCard = ({ icon, name, description }) => (
    <div className="feature-card">
        <div className="feature-icon">{icon}</div>
        <p>{name}</p>
        <div className="feature-description">
            <p>{description}</p>
        </div>
    </div>
);

const IntroPage = () => {
    const navigate = useNavigate();

    const features = [
        { name: 'Student Registration', icon: '🎓', description: 'Easily register students for events with a streamlined process.' },
        { name: 'Event Listing', icon: '📅', description: 'Discover and list events with detailed information and schedules.' },
        { name: 'Custom Forms', icon: '📝', description: 'Create custom forms to collect specific data from participants.' },
        { name: 'Sponsor Connections', icon: '🤝', description: 'Connect with sponsors and manage partnerships seamlessly.' },
        { name: 'Live Chat', icon: '💬', description: 'Engage with participants and organizers in real-time.' },
        { name: 'Data Analytics', icon: '📊', description: 'Track event performance and participant engagement with analytics.' },
        { name: 'Mobile Friendly', icon: '📱', description: 'Access and manage events on the go with our mobile-friendly platform.' },
        { name: 'Easy Enrollment', icon: '✅', description: 'Simplify the enrollment process for participants and organizers.' },
    ];

    return (
        <div className="homepage">
            {/* Header Section */}
            <header className="homepage-header">
                <div className="header-top">
                    <div className="logo">Eventify</div>
                    <div className="auth-buttons">
                        <button className="btn-secondary" onClick={() => navigate("/login")}>Log In</button>
                        <button className="btn-primary" onClick={() => navigate("/register")}>Sign Up</button>
                    </div>
                </div>
                <p>The ultimate platform to manage and discover events.</p>
            </header>

            {/* Features Section */}
            <section className="features-section">
                <div className="features-grid">
                    {/* Add the first feature card and center it */}
                    <div className="feature-card intro-card center-card">
                        <div className="feature-icon">✨</div>
                        <p><strong>The best of Eventify</strong></p>
                        <p>Explore our key features designed for seamless event management.</p>
                    </div>

                    {/* Display the rest of the feature cards */}
                    {features.map((feature, index) => (
                        <FeatureCard key={index} icon={feature.icon} name={feature.name} description={feature.description} />
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <h2>About Eventify</h2>
                <p>
                    Eventify is an innovative platform tailored for inter-college events. 
                    Whether you are a student looking to participate or an organizer 
                    planning a large-scale event, Eventify makes it easy and efficient 
                    for everyone.
                </p>
                <p>
                    From custom forms and data analytics to live chat and sponsor 
                    connections, Eventify ensures that every aspect of event 
                    management is smooth and enjoyable.
                </p>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>Have questions or need support? We're here to help!</p>
                <p><strong>Email:</strong> support@eventify.com</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p>
                    <strong>Follow us:</strong>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
                </p>
            </section>

            {/* Footer */}
            <footer className="homepage-footer">
                <p>Eventify © 2024. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default IntroPage;