import { Link } from "react-router-dom";
import {
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  Globe2,
  Laptop,
  MonitorPlay,
  Rocket,
  Target,
  Users,
  Wrench,
} from "lucide-react";

import Hero from "../components/Hero";
import CourseGrid from "../components/CourseGrid";
import SectionTitle from "../components/SectionTitle";

import courses from "../data/courses";
import institute from "../data/institute";

const Home = () => {
  const benefits = [
    {
      icon: Target,
      title: "Career Focused",
      text: "Learn skills that can be applied in professional environments.",
    },
    {
      icon: Wrench,
      title: "Practical Learning",
      text: "Build confidence through assignments and real-world exercises.",
    },
    {
      icon: Globe2,
      title: "Inclusive Learning",
      text: "Learning paths for students, graduates and professionals.",
    },
    {
      icon: Rocket,
      title: "Future Ready",
      text: "Explore Data Analytics, Automation, Generative AI and Agentic AI.",
    },
  ];

  return (
    <div className="home-page">
      <Hero />

      <section className="section about-preview">
        <div className="container">
          <div className="home-about-grid">
            <div className="home-about-copy">
              <span className="section-subtitle">About CTC</span>
              <h2>Build Skills. Create New <span>Opportunities.</span></h2>
              <p className="home-about-intro">
                We help learners develop practical, industry-relevant skills
                that can create new possibilities for their careers.
              </p>
              <p>
                Career Transformation Center is a skill-development and
                career-focused learning center established in Telangana in
                August 2024.
              </p>

              <p>
                We support final-year graduates, freshers, working
                professionals, career switchers, data enthusiasts and
                non-IT professionals.
              </p>

              <Link to="/about" className="btn btn-outline">
                Learn More About Us
              </Link>

              <div className="home-about-features">
                <div><BookOpen aria-hidden="true" /><span><strong>Practical Learning</strong><small>Hands-on, real-world skills</small></span></div>
                <div><Target aria-hidden="true" /><span><strong>Career-Focused Skills</strong><small>Industry-relevant curriculum</small></span></div>
                <div><Users aria-hidden="true" /><span><strong>Learner Support</strong><small>Guidance at every step</small></span></div>
                <div><Rocket aria-hidden="true" /><span><strong>Growth Mindset</strong><small>Learn • Practice • Grow</small></span></div>
              </div>
            </div>

            <div className="home-about-visual">
              <div className="home-about-orbit home-about-orbit-one" />
              <div className="home-about-orbit home-about-orbit-two" />
              <img
                src="/images/hero/hero-background.jpg"
                alt="Technology learning workspace with laptop, coding, analytics, and career development materials"
              />

              <div className="home-about-float home-about-float-top">
                <BookOpen aria-hidden="true" />
                <span>Practical Learning</span>
              </div>
              <div className="home-about-float home-about-float-side">
                <Target aria-hidden="true" />
                <span>Career-Focused Skills</span>
              </div>
              <div className="home-about-float home-about-float-bottom">
                <Users aria-hidden="true" />
                <span>Learner Support</span>
              </div>

              <div className="home-about-training">   
                <div className="home-about-training-heading">
                  <MonitorPlay aria-hidden="true" />
                  <h3>Our Training Format</h3>
                </div>
                <p><MonitorPlay aria-hidden="true" /> {institute.trainingMode} · {institute.platform}</p>
                <p><CalendarDays aria-hidden="true" /> {institute.weekdays}</p>
                <p><CalendarDays aria-hidden="true" /> {institute.weekends}</p>
                <p><ClipboardCheck aria-hidden="true" /> {institute.faculty}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <SectionTitle
            subtitle="Why Choose Us?"
            title="Learning That Goes Beyond Theory"
            description="We combine conceptual learning with hands-on practice, assignments and real-world business use cases."
          />

          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div className="benefit-card" key={benefit.title}>
                <div className="benefit-icon">
                  <benefit.icon aria-hidden="true" />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section courses-section">
        <div className="container">
          <SectionTitle
            subtitle="Our Programs"
            title="Choose Your Learning Path"
            description="Explore practical programs designed for different career goals."
          />

          <CourseGrid courses={courses} />
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <SectionTitle
            subtitle="Our Approach"
            title="Learn → Practice → Build → Grow"
            description="Effective learning should go beyond completing a syllabus. We help learners understand how technology can be used in real-world situations."
          />

          <div className="approach-steps">
            {institute.approach.map((step, index) => (
              <div className="approach-step" key={step}>
                <span>0{index + 1}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-content">
          <h2>Ready to Start Your Learning Journey?</h2>

          <p>
            Your background may define where you start. Your willingness to
            learn can define where you go.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;