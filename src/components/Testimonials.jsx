import { useState } from "react";
import { Quote } from "lucide-react";

import testimonials from "../data/testimonials";
import SectionTitle from "./SectionTitle";

const REVIEW_PREVIEW_LENGTH = 280;

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongReview = testimonial.review.length > REVIEW_PREVIEW_LENGTH;
  const reviewText =
    isLongReview && !isExpanded
      ? `${testimonial.review.slice(0, REVIEW_PREVIEW_LENGTH).trimEnd()}...`
      : testimonial.review;

  return (
    <article className="testimonial-card">
      <Quote className="testimonial-quote-icon" aria-hidden="true" />

      {testimonial.course && (
        <p className="testimonial-course">{testimonial.course}</p>
      )}

      <p className="testimonial-review">{reviewText}</p>

      {isLongReview && (
        <button
          className="testimonial-toggle"
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          Read {isExpanded ? "less" : "more"}
        </button>
      )}

      <footer className="testimonial-attribution">
        <h3>{testimonial.name}</h3>
      </footer>
    </article>
  );
};

const Testimonials = () => (
  <section className="section testimonials-section">
    <div className="container">
      <SectionTitle
        subtitle="Student Testimonials"
        title="What Our Students Say"
        description="Real experiences. Real learning. Real career transformations."
      />

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;