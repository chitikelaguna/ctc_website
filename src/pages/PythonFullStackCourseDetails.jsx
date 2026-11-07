import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  Check,
  ChevronRight,
  CodeXml,
  Database,
  GitBranch,
  GraduationCap,
  Laptop,
  MonitorPlay,
  Rocket,
  Server,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

import courses from "../data/courses";
import institute from "../data/institute";
import "./course-details.css";

const featureCards = [
  {
    icon: Braces,
    title: "Python Development",
    description:
      "Build strong Python fundamentals, functions, object-oriented programming, modules, exception handling, and reusable code.",
    tone: "blue",
  },
  {
    icon: Laptop,
    title: "Frontend Development",
    description:
      "Create responsive web interfaces using HTML5, CSS3, JavaScript, and modern frontend development practices.",
    tone: "cream",
  },
  {
    icon: Server,
    title: "Backend & Database",
    description:
      "Build backend applications using Django, develop REST APIs, and manage data with MySQL.",
    tone: "lavender",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Learn the fundamentals of Generative AI and integrate AI capabilities into Python applications using APIs, prompts, and practical AI-powered features.",
    tone: "peach",
  },
  {
    icon: Rocket,
    title: "Real-World Projects",
    description:
      "Build complete full-stack applications and enhance selected projects with AI-powered functionality.",
    tone: "blue",
  },
  {
    icon: GitBranch,
    title: "Deployment & GitHub",
    description:
      "Use Git and GitHub for version control, collaboration, and project deployment.",
    tone: "cream",
  },
];

const audienceCards = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Build practical programming and web development skills.",
    tone: "blue",
  },
  {
    icon: Laptop,
    title: "Freshers",
    description: "Develop a foundation for full-stack development.",
    tone: "cream",
  },
  {
    icon: CodeXml,
    title: "Aspiring Full Stack Developers",
    description: "Learn frontend, backend, databases, and deployment.",
    tone: "lavender",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Switchers",
    description: "Build practical skills for a transition into software development.",
    tone: "peach",
  },
];

const PythonFullStackCourseDetails = () => {
  const course = courses.find((item) => item.slug === "python-full-stack-development");

  useEffect(() => {
    if (!course) {
      return;
    }

    const previousTitle = document.title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionMeta?.getAttribute("content");
    const meta = descriptionMeta || document.createElement("meta");

    if (!descriptionMeta) {
      meta.name = "description";
      document.head.append(meta);
    }

    document.title = `${course.title} | Career Transformation Center`;
    meta.content = course.description;

    return () => {
      document.title = previousTitle;

      if (descriptionMeta) {
        if (previousDescription === null) {
          descriptionMeta.removeAttribute("content");
        } else if (previousDescription !== undefined) {
          descriptionMeta.setAttribute("content", previousDescription);
        }
      } else {
        meta.remove();
      }
    };
  }, [course]);

  if (!course) {
    return null;
  }

  const topics = course.topics || [];
  const technologies = course.technologiesCovered || [];
  const audience = Array.isArray(course.idealFor)
    ? course.idealFor
    : String(course.idealFor || "")
        .split("|")
        .map((item) => item.trim())
        .filter(Boolean);

  return (
    <div className="sql-course-page python-full-stack-course-page">
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
                <li><Braces aria-hidden="true" /> Python Programming</li>
                <li><Laptop aria-hidden="true" /> Frontend &amp; Backend Development</li>
                <li><Sparkles aria-hidden="true" /> AI Integration</li>
                <li><CodeXml aria-hidden="true" /> Hands-on Projects</li>
                <li><GitBranch aria-hidden="true" /> Deployment &amp; GitHub</li>
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
                  href="#python-full-stack-curriculum"
                  className="sql-course-button sql-course-button-secondary"
                >
                  Explore Curriculum <ArrowDown aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="sql-course-hero-art">
              <div className="sql-course-art-orbit sql-course-art-orbit-one" />
              <div className="sql-course-art-orbit sql-course-art-orbit-two" />
              <img
                src={course.image}
                alt="Python Full Stack with AI course topics, including Python, frontend, Django, REST APIs, MySQL, AI integration, GitHub, and deployment"
                className="sql-course-illustration"
              />
              <div className="sql-course-art-label">
                <Rocket aria-hidden="true" />
                <span>Build and deploy applications</span>
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

      <section className="sql-course-content-section" id="python-full-stack-curriculum">
        <div className="sql-course-container">
          <div className="sql-course-content-grid">
            <div className="sql-course-overview">
              <span className="sql-course-eyebrow">Your learning journey</span>
              <h2>About This Course</h2>
              <p className="sql-course-overview-copy">{course.description}</p>

              {topics.length > 0 && (
                <>
                  <h2 className="sql-course-outcomes-title">What You Will Learn</h2>
                  <ul className="sql-course-topic-list">
                    {topics.map((topic) => (
                      <li key={topic}>
                        <span><Check aria-hidden="true" /></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {technologies.length > 0 && (
                <>
                  <h2 className="sql-course-outcomes-title">Technologies Covered</h2>
                  <ul className="sql-course-topic-list sql-course-technology-list">
                    {technologies.map((technology) => (
                      <li key={technology.name}>
                        <span><Check aria-hidden="true" /></span>
                        <div className="sql-course-technology-content">
                          <h3>{technology.name}</h3>
                          <p>{technology.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <aside className="sql-course-info-card" aria-labelledby="python-full-stack-info-heading">
              <h2 id="python-full-stack-info-heading">Course Information</h2>
              <dl className="sql-course-info-list">
                {course.category && (
                  <div>
                    <dt><Database aria-hidden="true" /> Category</dt>
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
                {course.trainingMode && (
                  <div>
                    <dt><Laptop aria-hidden="true" /> Training Mode</dt>
                    <dd>{course.trainingMode}</dd>
                  </div>
                )}
                {course.platform && (
                  <div>
                    <dt><MonitorPlay aria-hidden="true" /> Platform</dt>
                    <dd>{course.platform}</dd>
                  </div>
                )}
              </dl>

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
            <p>Build practical full-stack and AI integration skills through hands-on projects.</p>
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

export default PythonFullStackCourseDetails;
