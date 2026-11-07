import CourseCard from "./CourseCard";

const CourseGrid = ({ courses, variant = "home" }) => {
  const isCatalog = variant === "catalog";

  return (
    <div className={isCatalog ? "courses-grid" : "home-courses-grid"}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} variant={variant} />
      ))}
    </div>
  );
};

export default CourseGrid;