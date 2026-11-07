import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CodeXml,
  GraduationCap,
  Laptop,
  Lightbulb,
  MonitorPlay,
  Network,
} from "lucide-react";

import courses from "../data/courses";
import institute from "../data/institute";
import "./course-details.css";

const featureCards = [
  {
    icon: BrainCircuit,
    title: "Generative AI",
    description: "Explore Generative AI concepts and language models.",
    tone: "blue",
  },
  {
    icon: Lightbulb,
    title: "Prompt Engineering",
    description: "Learn prompt engineering for language models.",
    tone: "cream",
  },
  {
    icon: CodeXml,
    title: "AI Application Development",
    description: "Develop practical AI-powered applications with Python.",
    tone: "lavender",
  },
  {
    icon: Network,
    title: "Agentic AI",
    description: "Explore Agentic AI and multi-agent systems.",
    tone: "peach",
  },
];

const audienceCards = [
  {
    icon: Laptop,
    title: "Python Learners",
    description: "Build a foundation for Python-based AI development.",
    tone: "blue",
  },
  {
    icon: CodeXml,
    title: "Developers",
    description: "Learn to integrate AI into applications.",
    tone: "cream",
  },
  {
    icon: Lightbulb,
    title: "AI Enthusiasts",
    description: "Explore Generative AI and AI agents.",
    tone: "lavender",
  },
  {
    icon: BriefcaseBusiness,
    title: "Working Professionals",
    description: "Develop practical AI application skills.",
    tone: "peach",
  },
];

const GenerativeAiCourseDetails = () => {
  const course = courses.find((item) => item.slug === "generative-ai-agentic-ai");

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
    <div className="sql-course-page generative-ai-course-page">
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
                <li><Laptop aria-hidden="true" /> Python-Based Learning</li>
                <li><BrainCircuit aria-hidden="true" /> Generative AI Fundamentals</li>
                <li><CodeXml aria-hidden="true" /> Hands-on AI Projects</li>
                <li><Bot aria-hidden="true" /> Agentic AI Applications</li>
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
              <img
                src={course.image}
                alt="Generative AI, language models, prompt engineering, Python, and agentic AI concepts"
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

            <aside className="sql-course-info-card" aria-labelledby="generative-ai-course-info-heading">
              <h2 id="generative-ai-course-info-heading">Course Information</h2>
              <dl className="sql-course-info-list">
                {course.category && (
                  <div>
                    <dt><BrainCircuit aria-hidden="true" /> Category</dt>
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
                  <h3><BriefcaseBusiness aria-hidden="true" /> Real-World Use Case</h3>
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
              <p>Explore practical AI learning paths for your interests and experience.</p>
            </div>
            <div className="sql-course-audience-grid">
              {audienceCards.map(({ icon: Icon, title, description, tone }) => (
                <article className={`sql-course-audience-card tone-${tone}`} key={title}>
                  <span className="sql-course-audience-icon"><Icon aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>
                    {audience.includes(title)
                      ? description
                      : `Explore AI application development as a ${title.toLowerCase()}.`}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default GenerativeAiCourseDetails;
