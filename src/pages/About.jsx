import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  GraduationCap,
  Laptop,
  LineChart,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <span className="about-eyebrow">Career-focused learning</span>
            <h1>
              Empowering Learners
              <br />
              for a <span>Brighter Tomorrow</span>
            </h1>
            <p>
              At Career Transformation Center, we believe in practical
              learning, real-world skills and continuous growth. Our mission is
              to help individuals unlock their potential and build successful
              careers in the technology-driven world.
            </p>
            <div className="about-hero-features">
              <span><Laptop aria-hidden="true" /> Practical Learning</span>
              <span><GraduationCap aria-hidden="true" /> Expert Guidance</span>
              <span><BriefcaseBusiness aria-hidden="true" /> Better Opportunities</span>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-hero-orbit about-hero-orbit-one" />
            <div className="about-hero-orbit about-hero-orbit-two" />
            <img
              src="/images/about/learners-collaboration-hero.png.png"
              alt="Learners collaborating during a technology training session"
            />
            <div className="about-hero-note">
              <Sparkles aria-hidden="true" />
              <span>Learn. Build. Grow.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container">
          <div className="about-section-heading">
            <span className="section-subtitle">Who We Are</span>
            <h2>Career Transformation Center</h2>
            <p>A skill-development and career-focused learning center.</p>
          </div>

          <div className="about-story-grid">
            <div className="about-story-copy">
              <p>
                Career Transformation Center was established in Telangana in
                August 2024 with a clear purpose: to help individuals build
                practical, industry-relevant skills that can create new
                possibilities for their careers.
              </p>
              <p>
                Founded and led by Ravuri Sarika, we believe that talent is not
                limited by a person's degree, academic background or previous
                career experience.
              </p>
              <p>
                We support final-year graduates, freshers, working
                professionals, career switchers, data enthusiasts and non-IT
                professionals in building the skills, confidence and practical
                experience needed for real opportunities.
              </p>
            </div>

            <div className="about-stats" aria-label="Career Transformation Center statistics">
              <div><UsersRound aria-hidden="true" /><strong>500+</strong><span>Learners Trained</span></div>
              <div><BriefcaseBusiness aria-hidden="true" /><strong>50+</strong><span>Hiring Partners</span></div>
              <div><LineChart aria-hidden="true" /><strong>10+</strong><span>Industry-Relevant Programs</span></div>
              <div><Target aria-hidden="true" /><strong>95%</strong><span>Learner Satisfaction</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-founder">
        <div className="container about-founder-grid">
          <div className="about-founder-image-wrap">
            <img
              src="/images/about/founder-sarika-office.png"
              alt="Founder of Career Transformation Center"
              className="about-founder-image"
            />
          </div>

          <div className="about-founder-copy">
            <span className="section-subtitle">Our Founder</span>
            <h2>Ravuri Sarika</h2>
            <p className="about-founder-role">Founder &amp; Owner, Career Transformation Center</p>
            <blockquote>
              “I believe that talent is not limited by a person's degree,
              background or previous career experience. The right learning
              environment, practical skills and consistent guidance can open
              new possibilities for anyone willing to learn.”
            </blockquote>
            <p className="about-founder-signature">— Ravuri Sarika</p>
          </div>
        </div>
      </section>

      <section className="section about-difference">
        <div className="container">
          <div className="about-section-heading">
            <span className="section-subtitle">What Makes Us Different?</span>
            <h2>Learning Designed Around Your Growth</h2>
          </div>

          <div className="about-difference-grid">
            <article><Target aria-hidden="true" /><h3>Career Focused</h3><p>We focus on skills learners can apply in real professional environments.</p></article>
            <article><Laptop aria-hidden="true" /><h3>Hands-On Experience</h3><p>Learners work with practical exercises, assignments and real-world scenarios.</p></article>
            <article><UsersRound aria-hidden="true" /><h3>Inclusive Learning</h3><p>Our programs are designed for learners from diverse educational and professional backgrounds.</p></article>
            <article><LineChart aria-hidden="true" /><h3>Future Ready</h3><p>We explore emerging areas such as Generative AI and Agentic AI alongside established data technologies.</p></article>
            <article><CalendarCheck aria-hidden="true" /><h3>Continuous Growth</h3><p>We encourage learners to continuously upgrade their skills as technology evolves.</p></article>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <div>
            <h2>Ready to Transform Your Career?</h2>
            <p>Join Career Transformation Center and take the next step toward a brighter future.</p>
          </div>
          <Link to="/courses" className="btn btn-primary">Explore Our Courses <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
};

export default About;