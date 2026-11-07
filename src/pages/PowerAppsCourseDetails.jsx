import { Link } from "react-router-dom";
import {
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
    title: "Data Management",
    description: "Organize and query business data using SQL.",
    tone: "blue",
  },
  {
    icon: Laptop,
    title: "Business Applications",
    description: "Build simple business applications with Power Apps.",
    tone: "cream",
  },
  {
    icon: BarChart3,
    title: "Interactive Dashboards",
    description: "Explore business data with Power BI reports.",
    tone: "lavender",
  },
  {
    icon: Workflow,
    title: "Connected Solutions",
    description: "Connect data, applications, and reporting.",
    tone: "peach",
  },
];

const audienceDescriptions = {
  Students: "Explore SQL, business apps, and reporting in one course.",
  "Working Professionals": "Connect business data, applications, and reporting.",
  "Business Users": "Learn how data and simple apps support business processes.",
  "Non-IT Professionals": "Build familiarity with data tools and business applications.",
  "Aspiring Business/Data Analysts": "Explore SQL data and turn it into business insights.",
};

const audienceIcons = {
  Students: GraduationCap,
  "Working Professionals": BriefcaseBusiness,
  "Business Users": BarChart3,
  "Non-IT Professionals": Laptop,
  "Aspiring Business/Data Analysts": BarChart3,
};

const PowerAppsCourseDetails = () => {
  const course = courses.find((item) => item.slug === "sql-power-apps-power-bi");

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
    <div className="sql-course-page powerapps-course-page">
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
                <li><MonitorPlay aria-hidden="true" /> Live Online Classes</li>
                <li><GraduationCap aria-hidden="true" /> {course.level}</li>
                <li><Laptop aria-hidden="true" /> Build Business Applications</li>
                <li><BarChart3 aria-hidden="true" /> Business Reporting</li>
              </ul>

              <div className="sql-course-actions">
                <Link
                  to="/contact"
                  state={{ selectedCourse: course.title }}
                  className="sql-course-button sql-course-button-primary"
                >
                  Enquire Now <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="sql-course-hero-art">
              <div className="sql-course-art-orbit sql-course-art-orbit-one" />
              <div className="sql-course-art-orbit sql-course-art-orbit-two" />
              <img
                src={course.image}
                alt="SQL, Power Apps, and Power BI connected in an employee leave management workflow"
                className="sql-course-illustration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sql-course-feature-section" aria-label="Course highlights">
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

      <section className="sql-course-content-section">
        <div className="sql-course-container">
          <div className="sql-course-content-grid">
            <div className="sql-course-overview">
              <span className="sql-course-eyebrow">Your learning journey</span>
              <h2>About This Course</h2>
              <p className="sql-course-overview-copy">{course.description}</p>
              <p className="sql-course-overview-copy sql-course-overview-followup">
                SQL works with business data, Power Apps supports simple business applications, and Power BI presents data through dashboards and reports.
              </p>

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

            <aside className="sql-course-info-card" aria-labelledby="powerapps-course-info-heading">
              <h2 id="powerapps-course-info-heading">Course Information</h2>
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
                  <dt><Laptop aria-hidden="true" /> Training Format</dt>
                  <dd>{course.trainingMode || institute.trainingMode}</dd>
                </div>
                <div>
                  <dt><MonitorPlay aria-hidden="true" /> Platform</dt>
                  <dd>{institute.platform}</dd>
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
              <p>Explore how data tools and business applications fit your learning goals.</p>
            </div>
            <div className="sql-course-audience-grid powerapps-audience-grid">
              {audience.map((learner, index) => {
                const Icon = audienceIcons[learner] || BarChart3;
                const tones = ["blue", "cream", "lavender", "peach"];

                return (
                  <article
                    className={`sql-course-audience-card tone-${tones[index % tones.length]}`}
                    key={learner}
                  >
                    <span className="sql-course-audience-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{learner}</h3>
                    <p>{audienceDescriptions[learner] || `Explore ${course.category.toLowerCase()} course topics.`}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PowerAppsCourseDetails;
