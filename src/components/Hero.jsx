import { Link } from "react-router-dom";
import { BriefcaseBusiness, GraduationCap, Laptop, Rocket } from "lucide-react";

import institute from "../data/institute";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-badge">100% Online • Live Classes • Career Support</span>

            <h1>
              Learn Today.
              <br />
              Build Your Skills.
              <br />
              <span>Transform Your Tomorrow.</span>
            </h1>

            <p>
              {institute.name} helps learners build practical,
              industry-relevant skills in Data Analytics, Automation and AI.
            </p>

            <div className="hero-buttons">
              <Link to="/courses" className="btn btn-primary">
                Explore Courses
              </Link>

              <Link to="/contact" className="btn btn-outline">
                Enroll Now
              </Link>
            </div>

            <div className="hero-benefits" aria-label="Learning benefits">
              <span><Laptop aria-hidden="true" /> Live Interactive Classes</span>
              <span><GraduationCap aria-hidden="true" /> Expert Mentorship</span>
              <span><BriefcaseBusiness aria-hidden="true" /> Real-World Projects</span>
              <span><Rocket aria-hidden="true" /> Career Guidance</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-shape hero-shape-one" />
            <div className="hero-shape hero-shape-two" />
            <img
              src="/images/about/learners-collaboration-hero.png.png"
              alt="Learners collaborating during a technology training session"
            />
            <div className="hero-float-card hero-float-card-top">
              <GraduationCap aria-hidden="true" />
              <span>In-Demand Skills</span>
            </div>
            <div className="hero-float-card hero-float-card-bottom">
              <BriefcaseBusiness aria-hidden="true" />
              <span>Career Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;