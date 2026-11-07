import { Link } from "react-router-dom";
import { Clock3, GraduationCap } from "lucide-react";

const CourseCard = ({ course, variant = "home" }) => {
  const isCatalog = variant === "catalog";

  return (
    <article className={isCatalog ? "catalog-course-card" : "home-course-card"}>
      <div className={isCatalog ? "catalog-course-image" : "home-course-image"}>
        <img src={course.image} alt={course.title} loading="lazy" />
        {course.isNew && (
          <span className={isCatalog ? "catalog-course-new" : "home-course-new"}>
            NEW
          </span>
        )}
      </div>

      <div className={isCatalog ? "catalog-course-content" : "home-course-content"}>
        {isCatalog && (
          <div className="catalog-course-meta">
            {course.duration && (
              <span><Clock3 aria-hidden="true" /> {course.duration}</span>
            )}
            {course.level && (
              <span><GraduationCap aria-hidden="true" /> {course.level}</span>
            )}
          </div>
        )}

        <span className={isCatalog ? "catalog-course-category" : "home-course-category"}>
          {course.category}
        </span>
        <h3>{course.title}</h3>

        {isCatalog && course.tagline && (
          <p className="catalog-course-tagline">{course.tagline}</p>
        )}
        <p className={isCatalog ? "catalog-course-description" : "home-course-description"}>
          {isCatalog
            ? course.description || course.shortDescription
            : course.shortDescription || course.description}
        </p>

        {!isCatalog && (
          <div className="home-course-meta">
            {course.duration && (
              <span><Clock3 aria-hidden="true" /> {course.duration}</span>
            )}
            {course.level && (
              <span><GraduationCap aria-hidden="true" /> {course.level}</span>
            )}
          </div>
        )}

        <Link
          to={`/courses/${course.slug}`}
          className={isCatalog ? "catalog-course-link" : "home-course-link"}
        >
          <span>View Course Details</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;