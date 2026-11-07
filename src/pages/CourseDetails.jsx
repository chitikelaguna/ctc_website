import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Clock3,
  Database,
  Download,
  GraduationCap,
  Laptop,
  Lightbulb,
  MonitorPlay,
  UsersRound,
} from "lucide-react";

import courses from "../data/courses";
import GenerativeAiCourseDetails from "./GenerativeAiCourseDetails";
import MegaBundleCourseDetails from "./MegaBundleCourseDetails";
import PowerAppsCourseDetails from "./PowerAppsCourseDetails";
import PythonFullStackCourseDetails from "./PythonFullStackCourseDetails";
import TableauCourseDetails from "./TableauCourseDetails";
import "./course-details.css";

const sqlCourseFeatures = [
  {
    icon: BriefcaseBusiness,
    title: "Real-World Use Cases",
    description: "Work on industry-relevant problems.",
    tone: "blue",
  },
  {
    icon: Laptop,
    title: "Hands-on Learning",
    description: "Practical projects and exercises.",
    tone: "cream",
  },
  {
    icon: Lightbulb,
    title: "Expert Trainers",
    description: "Learn from industry-experienced mentors.",
    tone: "lavender",
  },
  {
    icon: BadgeCheck,
    title: "Certification Support",
    description: "Build a portfolio for your career.",
    tone: "peach",
  },
];

const sqlLearningTopics = [
  "SQL fundamentals and data querying",
  "Data filtering, joining, and analysis",
  "Python for data manipulation and analysis",
  "Working with real-world datasets",
  "Data cleaning and exploration",
  "Data visualization using Python libraries",
  "Practical data analysis projects",
];

const sqlAudience = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Build strong data analysis skills.",
    tone: "blue",
  },
  {
    icon: Laptop,
    title: "Freshers",
    description: "Start your career in data analytics.",
    tone: "cream",
  },
  {
    icon: BarChart3,
    title: "Aspiring Data Analysts",
    description: "Gain industry-relevant skills.",
    tone: "lavender",
  },
  {
    icon: BriefcaseBusiness,
    title: "Working Professionals",
    description: "Upgrade your skills and grow in your career.",
    tone: "peach",
  },
];

const downloadSyllabus = (course) => {
  const syllabus = [
    course.title,
    "=".repeat(course.title.length),
    "",
    `Category: ${course.category}`,
    `Duration: ${course.duration}`,
    `Level: ${course.level}`,
    "",
    "About this course",
    course.description,
    "",
    "What you will learn",
    ...sqlLearningTopics.map((topic) => `- ${topic}`),
    "",
    "Real-world use case",
    course.useCase,
  ].join("\n");
  const file = new Blob([syllabus], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");

  link.href = url;
  link.download = "sql-python-for-data-analysts-syllabus.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const SqlPythonCourseDetails = ({ course }) => (
  <div className="sql-course-page sql-python-course-page">
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
            <span className="sql-course-badge">Data Analytics <span aria-hidden="true">•</span> New Batch</span>
            <h1>{course.title}</h1>
            <p className="sql-course-lead">
              Learn to extract, clean, transform, and analyze data using SQL and Python to discover meaningful business insights with hands-on projects.
            </p>

            <ul className="sql-course-highlights" aria-label="Course highlights">
              <li><MonitorPlay aria-hidden="true" /> Live Online Classes</li>
              <li><GraduationCap aria-hidden="true" /> Beginner Friendly</li>
              <li><Laptop aria-hidden="true" /> Hands-on Projects</li>
              <li><UsersRound aria-hidden="true" /> Career Support</li>
            </ul>

            <div className="sql-course-actions">
              <Link
                to="/contact"
                state={{ selectedCourse: course.title }}
                className="sql-course-button sql-course-button-primary"
              >
                Enquire Now <ArrowRight aria-hidden="true" />
              </Link>
              <button
                type="button"
                className="sql-course-button sql-course-button-secondary"
                onClick={() => downloadSyllabus(course)}
              >
                <Download aria-hidden="true" /> Download Syllabus
              </button>
            </div>
          </div>

          <div className="sql-course-hero-art">
            <div className="sql-course-art-orbit sql-course-art-orbit-one" />
            <div className="sql-course-art-orbit sql-course-art-orbit-two" />
            <img
              src={course.image}
              alt="SQL and Python data analytics with a laptop, database, charts, and Python"
              className="sql-course-illustration"
            />
            <div className="sql-course-art-label">
              <Database aria-hidden="true" />
              <span>Turn data into insight</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sql-course-feature-section" aria-label="Course benefits">
      <div className="sql-course-container sql-course-feature-grid">
        {sqlCourseFeatures.map(({ icon: Icon, title, description, tone }) => (
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
            <p className="sql-course-overview-copy">
              This course teaches you how to work with data using SQL and Python. You will learn data extraction, cleaning, analysis, and visualization with hands-on projects and real-world scenarios.
            </p>

            <h2 className="sql-course-outcomes-title">What You Will Learn</h2>
            <ul className="sql-course-topic-list">
              {sqlLearningTopics.map((topic) => (
                <li key={topic}>
                  <span><Check aria-hidden="true" /></span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <aside className="sql-course-info-card" aria-labelledby="sql-course-info-heading">
            <h2 id="sql-course-info-heading">Course Information</h2>
            <dl className="sql-course-info-list">
              <div>
                <dt><BarChart3 aria-hidden="true" /> Category</dt>
                <dd>{course.category}</dd>
              </div>
              <div>
                <dt><Clock3 aria-hidden="true" /> Duration</dt>
                <dd>{course.duration}</dd>
              </div>
              <div>
                <dt><GraduationCap aria-hidden="true" /> Level</dt>
                <dd>Beginner Friendly</dd>
              </div>
              <div>
                <dt><Laptop aria-hidden="true" /> Training Format</dt>
                <dd>100% Online</dd>
              </div>
              <div>
                <dt><MonitorPlay aria-hidden="true" /> Platform</dt>
                <dd>Live Classes over Zoom</dd>
              </div>
            </dl>

            <div className="sql-course-use-case">
              <h3><BookOpenCheck aria-hidden="true" /> Real-World Use Case</h3>
              <p>{course.useCase}</p>
            </div>

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
          <p>A practical learning path for wherever you are in your career journey.</p>
        </div>
        <div className="sql-course-audience-grid">
          {sqlAudience.map(({ icon: Icon, title, description, tone }) => (
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

const CourseDetails = () => {
  const { slug } = useParams();

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <section className="section">
        <div className="container">
          <h1>Course Not Found</h1>
          <Link to="/courses" className="btn btn-primary">
            Back to Courses
          </Link>
        </div>
      </section>
    );
  }

  if (course.slug === "sql-python-for-data-analysts") {
    return <SqlPythonCourseDetails course={course} />;
  }

  if (course.slug === "sql-power-apps-power-bi") {
    return <PowerAppsCourseDetails />;
  }

  if (course.slug === "sql-tableau") {
    return <TableauCourseDetails />;
  }

  if (course.slug === "generative-ai-agentic-ai") {
    return <GenerativeAiCourseDetails />;
  }

  if (course.slug === "career-transformation-mega-bundle") {
    return <MegaBundleCourseDetails />;
  }

  if (course.slug === "python-full-stack-development") {
    return <PythonFullStackCourseDetails />;
  }

  const idealFor = Array.isArray(course.idealFor)
    ? course.idealFor
    : String(course.idealFor || "")
        .split("|")
        .map((item) => item.trim())
        .filter(Boolean);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>{course.title}</h1>
          <p>{course.category}</p>
        </div>
      </section>

      <section className="section">
        <div className="container course-details-grid">
          <div>
            <img
              src={course.image}
              alt={course.title}
              className="course-detail-image"
            />

            <h2>About This Course</h2>

            <p>{course.description}</p>

            <h2>What You Will Learn</h2>

            <ul className="topic-list">
              {(course.topics || []).map((topic) => (
                <li key={topic}>✓ {topic}</li>
              ))}
            </ul>

            {course.technologiesCovered && (
              <>
                <h2>Technologies Covered</h2>

                <ul className="topic-list">
                  {course.technologiesCovered.map((technology) => (
                    <li key={technology.name}>
                      <strong>{technology.name}:</strong>{" "}
                      {technology.description}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {course.learningOutcomes && (
              <>
                <h2>Learning Outcomes</h2>

                <ul className="topic-list">
                  {course.learningOutcomes.map((outcome) => (
                    <li key={outcome}>✓ {outcome}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="course-sidebar">
            <h3>Course Information</h3>

            <p>
              <strong>Category:</strong> {course.category}
            </p>

            <p>
              <strong>Duration:</strong> {course.duration}
            </p>

            <p>
              <strong>Level:</strong> {course.level}
            </p>

            {course.trainingMode ? (
              <p>
                <strong>Training Mode:</strong> {course.trainingMode}
              </p>
            ) : (
              <>
                <p>
                  <strong>Training:</strong> 100% Online
                </p>

                <p>
                  <strong>Platform:</strong> Live Classes over Zoom
                </p>
              </>
            )}

            <h4>Real-World Use Case</h4>

            <p>{course.useCase}</p>

            <h4>Ideal For</h4>

            <ul>
              {idealFor.map((learner) => (
                <li key={learner}>{learner}</li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="btn btn-primary full-width"
              state={{ selectedCourse: course.title }}
            >
              Enquire Now
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
