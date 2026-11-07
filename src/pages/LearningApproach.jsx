import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Code2,
  GraduationCap,
  PencilRuler,
  UsersRound,
} from "lucide-react";

import institute from "../data/institute";
import "./learning-approach.css";

const learningSteps = [
  {
    title: "Learn",
    icon: BookOpen,
    description:
      "Understand concepts through structured lessons and expert explanations.",
    tone: "mint",
  },
  {
    title: "Practice",
    icon: PencilRuler,
    description:
      "Apply your knowledge with hands-on exercises and assignments.",
    tone: "peach",
  },
  {
    title: "Build",
    icon: Code2,
    description:
      "Create real-world projects and solutions to strengthen your skills.",
    tone: "blue",
  },
  {
    title: "Grow",
    icon: ChartNoAxesColumnIncreasing,
    description:
      "Develop confidence, build a portfolio, and advance your career with our guidance.",
    tone: "green",
  },
];

const trainingBenefits = [
  "Live interactive classes",
  "Hands-on practice sessions",
  "Doubt clearing and mentorship",
];

const LearningApproach = () => (
  <div className="learning-approach-page">
    <section className="learning-hero">
      <div className="learning-page-container learning-hero-grid">
        <div className="learning-hero-copy">
          <span className="learning-eyebrow">OUR APPROACH</span>
          <h1>Learning That Builds Careers</h1>
          <p>
            A practical, hands-on, and career-focused learning approach designed
            to help you gain real skills, work on real projects, and grow with
            confidence.
          </p>
        </div>

        <div className="learning-hero-visual">
          <div className="learning-orbit learning-orbit-one" />
          <div className="learning-orbit learning-orbit-two" />
          <img
            className="learning-hero-image"
            src="/images/hero/learning%20approach.png"
            alt="Learners taking part in an online technology class"
          />
        </div>
      </div>
    </section>

    <section className="learning-journey-section">
      <div className="learning-page-container">
        <header className="learning-section-heading">
          <span className="learning-eyebrow">OUR LEARNING JOURNEY</span>
          <h2>Learn <span aria-hidden="true">→</span> Practice <span aria-hidden="true">→</span> Build <span aria-hidden="true">→</span> Grow</h2>
          <p>
            A step-by-step approach to help you gain skills, apply knowledge,
            and achieve your career goals.
          </p>
        </header>

        <div className="learning-journey-grid">
          {learningSteps.map(({ title, icon: Icon, description, tone }, index) => (
            <article className={`learning-journey-card tone-${tone}`} key={title}>
              <span className="learning-step-number">0{index + 1}</span>
              <span className="learning-step-icon"><Icon aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="learning-training-section">
      <div className="learning-page-container learning-training-panel">
        <header className="learning-section-heading">
          <span className="learning-eyebrow">TRAINING FORMAT</span>
          <h2>100% Online · Live Classes over Zoom</h2>
          <p>Flexible schedules designed to fit your learning goals.</p>
        </header>

        <div className="learning-training-grid">
          {[
            { title: "Weekdays", schedule: institute.weekdays },
            { title: "Weekends", schedule: institute.weekends },
          ].map(({ title, schedule }) => (
            <article className="learning-training-card" key={title}>
              <span className="learning-training-icon"><CalendarDays aria-hidden="true" /></span>
              <div className="learning-training-copy">
                <h3>{title}</h3>
                <p>{schedule}</p>
                <ul>
                  {trainingBenefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="learning-cta-section">
      <div className="learning-page-container">
        <div className="learning-cta-banner">
          <div className="learning-cta-decoration learning-cta-decoration-one" />
          <div className="learning-cta-decoration learning-cta-decoration-two" />
          <div className="learning-cta-icon"><UsersRound aria-hidden="true" /></div>
          <div className="learning-cta-copy">
            <span className="learning-cta-eyebrow">READY TO START?</span>
            <h2>Take the Next Step in Your Learning Journey</h2>
            <p>
              Join our industry-focused programs and build the skills for a
              brighter future.
            </p>
          </div>
          <Link to="/courses" className="learning-cta-button">
            Explore Our Courses <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default LearningApproach;
