import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Brush,
  Check,
  ChevronRight,
  Database,
  GraduationCap,
  Laptop,
  MonitorPlay,
} from "lucide-react";

import courses from "../data/courses";
import institute from "../data/institute";
import "./course-details.css";

const featureCards = [
  {
    icon: Database,
    title: "Data Extraction",
    description: "Use SQL to retrieve relevant data.",
    tone: "blue",
  },
  {
    icon: Brush,
    title: "Data Preparation",
    description: "Clean, combine, and transform data using Tableau Prep.",
    tone: "cream",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Create interactive dashboards using Tableau Desktop.",
    tone: "lavender",
  },
  {
    icon: Laptop,
    title: "Practical Projects",
    description: "Apply data skills to real-world scenarios.",
    tone: "peach",
  },
];

const audienceCards = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Build practical data visualization skills.",
    tone: "blue",
  },
  {
    icon: Laptop,
    title: "Freshers",
    description: "Start learning SQL and Tableau.",
    tone: "cream",
  },
  {
    icon: BarChart3,
    title: "Aspiring Data Analysts",
    description: "Develop data preparation and dashboard skills.",
    tone: "lavender",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Professionals",
    description: "Improve business reporting and analytics skills.",
    tone: "peach",
  },
];

const TableauCourseDetails = () => {
  const course = courses.find((item) => item.slug === "sql-tableau");

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
    <div className="sql-course-page tableau-course-page">
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
                <li><Laptop aria-hidden="true" /> Hands-on Projects</li>
                <li><BarChart3 aria-hidden="true" /> Real-World Case Studies</li>
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
                alt="SQL data extraction, Tableau Prep, and a Tableau Desktop retail sales dashboard"
                className="sql-course-illustration"
              />
              <div className="sql-course-art-label">
                <BarChart3 aria-hidden="true" />
                <span>From data to insight</span>
              </div>
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

            <aside className="sql-course-info-card" aria-labelledby="tableau-course-info-heading">
              <h2 id="tableau-course-info-heading">Course Information</h2>
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

      <section className="sql-course-audience-section">
        <div className="sql-course-container">
          <div className="sql-course-section-heading">
            <span className="sql-course-eyebrow">Made for your next step</span>
            <h2>Who Is This Course For?</h2>
            <p>Build practical skills for working with data and visualizations.</p>
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
    </div>
  );
};

export default TableauCourseDetails;
