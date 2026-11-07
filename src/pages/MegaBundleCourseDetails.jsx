import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Database,
  GraduationCap,
  Laptop,
  MonitorPlay,
  Workflow,
} from "lucide-react";

import courses from "../data/courses";
import institute from "../data/institute";
import "./course-details.css";

const featureCards = [
  {
    icon: Database,
    title: "Data Analytics",
    description: "Learn to retrieve and analyze data with SQL and Python.",
    tone: "blue",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Explore reporting and dashboards with Power BI and Tableau.",
    tone: "cream",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Explore Power Apps and practical automation workflows.",
    tone: "lavender",
  },
  {
    icon: Laptop,
    title: "Artificial Intelligence",
    description: "Discover Generative AI and Agentic AI applications.",
    tone: "peach",
  },
];

const audienceCards = [
  {
    icon: GraduationCap,
    title: "Final-Year Graduates",
    description: "Build practical, industry-relevant technical skills.",
    tone: "blue",
  },
  {
    icon: Laptop,
    title: "Freshers",
    description: "Develop a foundation across data and AI technologies.",
    tone: "cream",
  },
  {
    icon: BriefcaseBusiness,
    title: "Working Professionals",
    description: "Explore skills across analytics and automation.",
    tone: "lavender",
  },
  {
    icon: Workflow,
    title: "Career Switchers",
    description: "Explore a structured learning path into technology.",
    tone: "peach",
  },
];

const MegaBundleCourseDetails = () => {
  const course = courses.find(
    (item) => item.slug === "career-transformation-mega-bundle"
  );

  if (!course) {
    return null;
  }

  const topics = course.topics || [];
  const audience = Array.isArray(course.idealFor)
    ? course.idealFor
    : String(course.idealFor || "")
        .split("|")
        .map((item) => item.trim())
        .filter(Boolean);

  return (
    <div className="sql-course-page mega-bundle-course-page">
      <section className="sql-course-hero">
        <div className="sql-course-container">
          <nav className="sql-course-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight aria-hidden="true" />
            <Link to="/courses">Courses</Link>
            <ChevronRight aria-hidden="true" />
            <span aria-current="page">{course.title}</span>
          </nav>

          <div className="sql-course-hero-grid">
            <div className="sql-course-hero-copy">
              <span className="sql-course-badge">{course.category}</span>
              <h1>{course.title}</h1>
              <p className="sql-course-lead">{course.description}</p>

              <ul className="sql-course-highlights" aria-label="Course highlights">
                <li><Database aria-hidden="true" /> Multiple Technology Skills</li>
                <li><BookOpenCheck aria-hidden="true" /> Practical Projects</li>
                <li><MonitorPlay aria-hidden="true" /> Online Training</li>
                <li><BriefcaseBusiness aria-hidden="true" /> Career-Focused Learning</li>
              </ul>

              <div className="sql-course-actions">
                <Link
                  to="/contact"
                  state={{ selectedCourse: course.title }}
                  className="sql-course-button sql-course-button-primary"
                >
                  Enquire Now <ArrowRight aria-hidden="true" />
                </Link>
                <a
                  href="#mega-bundle-curriculum"
                  className="sql-course-button sql-course-button-secondary"
                >
                  Explore Curriculum <ArrowDown aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="sql-course-hero-art">
              <img
                src={course.image}
                alt="Career Transformation Mega Bundle covering data analytics, business intelligence, automation, and AI"
                className="sql-course-illustration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sql-course-feature-section" aria-label="Course areas">
        <div className="sql-course-container sql-course-feature-grid">
          {featureCards.map(({ icon: Icon, title, description, tone }) => (
            <article className={`sql-course-feature-card tone-${tone}`} key={title}>
              <span className="sql-course-feature-icon"><Icon aria-hidden="true" /></span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sql-course-content-section" id="mega-bundle-curriculum">
        <div className="sql-course-container">
          <div className="sql-course-content-grid">
            <div className="sql-course-overview">
              <span className="sql-course-eyebrow">Your learning journey</span>
              <h2>About This Course</h2>
              <p className="sql-course-overview-copy">{course.description}</p>

              <h2 className="sql-course-outcomes-title">What You Will Learn</h2>
              <ul className="sql-course-topic-list">
                {topics.map((topic) => (
                  <li key={topic}>
                    <span><Check aria-hidden="true" /></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="sql-course-info-card" aria-labelledby="mega-bundle-course-info-heading">
              <h2 id="mega-bundle-course-info-heading">Course Information</h2>
              <dl className="sql-course-info-list">
                {course.category && (
                  <div>
                    <dt><BarChart3 aria-hidden="true" /> Category</dt>
                    <dd>{course.category}</dd>
                  </div>
                )}
                {course.duration && (
                  <div>
                    <dt><MonitorPlay aria-hidden="true" /> Duration</dt>
                    <dd>{course.duration}</dd>
                  </div>
                )}
                {course.level && (
                  <div>
                    <dt><GraduationCap aria-hidden="true" /> Level</dt>
                    <dd>{course.level}</dd>
                  </div>
                )}
                <div>
                  <dt><Laptop aria-hidden="true" /> Training</dt>
                  <dd>{course.trainingMode || institute.trainingMode}</dd>
                </div>
                <div>
                  <dt><MonitorPlay aria-hidden="true" /> Platform</dt>
                  <dd>{course.platform || institute.platform}</dd>
                </div>
              </dl>

              {course.useCase && (
                <div className="sql-course-use-case">
                  <h3><BookOpenCheck aria-hidden="true" /> Real-World Use Case</h3>
                  <p>{course.useCase}</p>
                </div>
              )}

              {audience.length > 0 && (
                <div className="sql-course-info-audience">
                  <h3>Ideal For</h3>
                  <p>{audience.join(" · ")}</p>
                </div>
              )}

              <Link
                to="/contact"
                state={{ selectedCourse: course.title }}
                className="sql-course-button sql-course-button-primary sql-course-info-button"
              >
                Enquire Now <ArrowRight aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {audience.length > 0 && (
        <section className="sql-course-audience-section">
          <div className="sql-course-container">
            <div className="sql-course-section-heading">
              <span className="sql-course-eyebrow">Made for your next step</span>
              <h2>Who Is This Course For?</h2>
              <p>Explore a broad learning journey across data, automation, and AI.</p>
            </div>
            <div className="sql-course-audience-grid">
              {audienceCards.map(({ icon: Icon, title, description, tone }) => (
                <article className={`sql-course-audience-card tone-${tone}`} key={title}>
                  <span className="sql-course-audience-icon"><Icon aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MegaBundleCourseDetails;
