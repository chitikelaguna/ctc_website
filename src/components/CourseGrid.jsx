import CourseCard from "./CourseCard";

const CourseGrid = ({ courses }) => {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;