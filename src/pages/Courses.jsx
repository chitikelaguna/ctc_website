import { useMemo, useState } from "react";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  Search,
  X,
} from "lucide-react";

import courses from "../data/courses";
import CourseGrid from "../components/CourseGrid";
import "./courses.css";

const categories = [
  "All Courses",
  "Data Analytics",
  "Business Intelligence",
  "AI",
  "Development",
  "Career Bundle",
];

const categoryMatches = {
  "Data Analytics": ["Data Analytics", "Data Visualization"],
  "Business Intelligence": ["Business Intelligence"],
  AI: ["Artificial Intelligence"],
  Development: ["Full Stack Development"],
  "Career Bundle": ["Career Bundle"],
};

const programFeatures = [
  { icon: BookOpenCheck, label: "Industry-Relevant Curriculum" },
  { icon: Laptop, label: "Live Online Classes" },
  { icon: GraduationCap, label: "Hands-on Projects" },
  { icon: BriefcaseBusiness, label: "Career Support" },
];

const courseMatchesCategory = (course, category) =>
  category === "All Courses" ||
  (categoryMatches[category] || []).includes(course.category);

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const visibleCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return courses.filter((course) => {
      if (!courseMatchesCategory(course, activeCategory)) {
        return false;
      }

      if (!query) {
        return true;
      }

      const searchableContent = [
        course.title,
        course.category,
        course.tagline,
        course.shortDescription,
        course.description,
        ...(course.topics || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableContent.includes(query);
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="courses-container">
          <div className="courses-hero-content">
            <span className="courses-eyebrow">Our Programs</span>
            <h1>Choose Your Learning Path</h1>
            <p>
              Build practical technology skills through career-focused programs
              in data analytics, automation, business intelligence, and AI.
            </p>

            <ul className="courses-highlights" aria-label="Program highlights">
              {programFeatures.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <span className="courses-highlight-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="courses-catalog" aria-labelledby="courses-catalog-heading">
        <div className="courses-container">
          <div className="courses-catalog-heading">
            <div>
              <span className="courses-eyebrow">Find your next step</span>
              <h2 id="courses-catalog-heading">Explore Our Courses</h2>
            </div>
            <p aria-live="polite">
              {visibleCourses.length} {visibleCourses.length === 1 ? "program" : "programs"}
            </p>
          </div>

          <div className="courses-controls">
            <label className="courses-search">
              <Search aria-hidden="true" />
              <span className="visually-hidden">Search courses</span>
              <input
                type="search"
                placeholder="Search for a course..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="courses-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear course search"
                >
                  <X aria-hidden="true" />
                </button>
              )}
            </label>

            <div className="courses-filters" role="group" aria-label="Filter courses by category">
              {categories.map((category) => (
                <button
                  type="button"
                  className={`courses-filter${activeCategory === category ? " is-active" : ""}`}
                  key={category}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {visibleCourses.length > 0 ? (
            <CourseGrid courses={visibleCourses} variant="catalog" />
          ) : (
            <div className="courses-empty-state" role="status">
              <Search aria-hidden="true" />
              <h3>No matching courses found</h3>
              <p>Try a different search or choose another category.</p>
              <button
                type="button"
                className="courses-filter is-active"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Courses");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
