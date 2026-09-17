import { Link } from "react-router-dom";
import courses from "../data/courses";

const Courses = () => {
  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">OUR PROGRAMS</span>

          <h1>Choose Your Learning Path</h1>

          <p>
            Build practical technology skills through career-focused programs
            in data analytics, automation, business intelligence, and AI.
          </p>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.id}>
              <div className="course-icon">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
              </div>

              <div className="course-content">
                <h3>{course.title}</h3>

                <h4>{course.tagline}</h4>

                <p>{course.description}</p>

                <div className="course-meta">
                  <span>◷ {course.duration}</span>
                  <span>◉ {course.level}</span>
                </div>

                <Link to={`/courses/${course.slug}`} className="course-link">
                  <span>View Course Details</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;