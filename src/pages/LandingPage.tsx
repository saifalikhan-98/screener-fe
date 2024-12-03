import React from "react";
import "./LandingPage.css"; // Custom CSS file for styles

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <h1 className="hero-title">Welcome to Trading view landing page</h1>
        <p className="hero-description">
          You can fell free to modify this page as you like
        </p>
        <button className="cta-button">Get Started</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Feature 1</h3>
            <p>Discover how this feature will save you time and effort.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 2</h3>
            <p>Leverage the power of AI to automate mundane tasks.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 3</h3>
            <p>Get real-time insights and stay ahead of the competition.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
