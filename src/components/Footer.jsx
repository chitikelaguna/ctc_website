import { Link } from "react-router-dom";

import institute from "../data/institute";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img
            src="/images/logo/ctc-logo.jpeg"
            alt="Career Transformation Center Logo"
            className="footer-logo"
          />

          <h3>{institute.name}</h3>

          <p>{institute.tagline}</p>

          <p>
            Helping learners turn curiosity into capability and capability
            into career opportunities.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h4>Training Format</h4>

          <p>{institute.trainingMode}</p>
          <p>{institute.platform}</p>
          <p>{institute.weekdays}</p>
          <p>{institute.weekends}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {institute.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;