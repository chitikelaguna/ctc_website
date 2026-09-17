import { Link, useParams } from "react-router-dom";

import courses from "../data/courses";

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

            <p>
              <strong>Training:</strong> 100% Online
            </p>

            <p>
              <strong>Platform:</strong> Live Classes over Zoom
            </p>

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
