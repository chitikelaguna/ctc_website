import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <article className="course-card">
      <img src={course.image} alt={course.title} />

      <div className="course-card-content">
        <span className="course-category">{course.category}</span>

        <h3>{course.title}</h3>

        <p>{course.shortDescription || course.description}</p>

        <Link to={`/courses/${course.slug}`} className="course-link">
          View Course Details →
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;