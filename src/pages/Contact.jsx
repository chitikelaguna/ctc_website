import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CalendarDays,
  Clock3,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Mail,
  MapPin,
  Phone,
  UsersRound,
  Zap,
} from "lucide-react";

import courses from "../data/courses";
import institute from "../data/institute";
import "./contact.css";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyGKSmsJ2Z1KW_lLACnBiW6yIFfUbGIDXLkOrYrKcjDG9TuUYmIf0ER5SL8tsbHw4fHVw/exec";

const Contact = () => {
  const location = useLocation();
  const selectedCourse = location.state?.selectedCourse || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: selectedCourse,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedCourse) {
      setFormData((current) => ({ ...current, course: selectedCourse }));
    }
  }, [selectedCourse]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setSubmitted(false);
    setSubmissionError("");
    setIsSubmitting(true);

    const enquiry = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      message: formData.message,
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(enquiry),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}.`);
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error("Student enquiry submission failed:", error);
      setSubmissionError(
        "We couldn't submit your enquiry. Please try again. Your details are still in the form."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-page-container contact-hero-grid">
          <div className="contact-hero-copy">
            <span className="contact-eyebrow">CONTACT US</span>
            <h1>Let&apos;s Build Your Future Together</h1>
            <p>
              Have questions about our courses? Send us an enquiry and our team
              will get back to you soon.
            </p>

            <ul className="contact-hero-features" aria-label="How we can help">
              <li>
                <Zap aria-hidden="true" />
                <span>Quick Response</span>
              </li>
              <li>
                <GraduationCap aria-hidden="true" />
                <span>Guidance from Experts</span>
              </li>
              <li>
                <BookOpenCheck aria-hidden="true" />
                <span>Course Recommendations</span>
              </li>
              <li>
                <HeartHandshake aria-hidden="true" />
                <span>Support at Every Step</span>
              </li>
            </ul>
          </div>

          <div className="contact-hero-visual">
            <div className="contact-hero-orbit contact-hero-orbit-one" />
            <div className="contact-hero-orbit contact-hero-orbit-two" />
            <img
              src="/images/hero/contact.png"
              alt="Learners taking part in an online technology class"
            />
            <div className="contact-hero-note">
              <span>
                <BadgeCheck aria-hidden="true" />
              </span>
              <span>
                <strong>Here to help</strong>
                <small>Every step of your learning journey</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="contact-page-container contact-main-grid">
          <div className="contact-information">
            <span className="contact-eyebrow">WE&apos;RE HERE FOR YOU</span>
            <h2>Career Transformation Center</h2>
            <p className="contact-information-intro">
              We&apos;re always happy to help you with course information,
              admissions, schedules, or career guidance.
            </p>

            <div className="contact-details-grid">
              {[
                { icon: MapPin, label: "Location", value: "Telangana, India" },
                {
                  icon: Laptop,
                  label: "Training Mode",
                  value: "100% Online Live Classes",
                },
                { icon: GraduationCap, label: "Founder", value: institute.founder },
                {
                  icon: Mail,
                  label: "Email Address",
                  value: "career@ctcinstitute.info",
                  href: "mailto:career@ctcinstitute.info",
                },
                {
                  icon: Phone,
                  label: "Phone Number",
                  value: "9703373646",
                  href: "tel:9703373646",
                },
                {
                  icon: CalendarDays,
                  label: "Weekday Batches",
                  value: "Monday–Friday: Morning batches only",
                },
                {
                  icon: Clock3,
                  label: "Weekend Batches",
                  value: institute.weekends,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <article className="contact-detail-card" key={label}>
                  <span className="contact-detail-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{label}</h3>
                    {href ? <a href={href}>{value}</a> : <p>{value}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <header className="contact-form-heading">
              <span className="contact-eyebrow">GET IN TOUCH</span>
              <h2>Get in Touch</h2>
              <p>Fill out the form and our team will get back to you soon.</p>
            </header>

            <form
              id="contact-enquiry-form"
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="contact-form-field">
                <label htmlFor="name">Full Name</label>
                <div className="contact-input-wrap">
                  <UsersRound aria-hidden="true" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>
              <div className="contact-form-field">
                <label htmlFor="email">Email Address</label>
                <div className="contact-input-wrap">
                  <Mail aria-hidden="true" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="contact-form-field">
                <label htmlFor="phone">Phone Number</label>
                <div className="contact-input-wrap">
                  <Phone aria-hidden="true" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              <div className="contact-form-field">
                <label htmlFor="course">Interested Course</label>
                <div className="contact-input-wrap">
                  <BookOpenCheck aria-hidden="true" />
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="contact-form-field">
                <label htmlFor="message">Message</label>
                <div className="contact-input-wrap contact-textarea-wrap">
                  <HeartHandshake aria-hidden="true" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="5"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary full-width"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>

              <p className="contact-privacy-note">
                We respect your privacy. Your information is safe with us.
              </p>

              {submitted && (
                <p className="success-message" role="status">
                  Your enquiry has been submitted successfully.
                </p>
              )}
              {submissionError && (
                <p className="contact-submission-error" role="alert">
                  {submissionError}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="contact-cta-section">
        <div className="contact-page-container">
          <div className="contact-cta-banner">
            <span className="contact-cta-icon"><HeartHandshake aria-hidden="true" /></span>
            <div className="contact-cta-copy">
              <span className="contact-cta-eyebrow">STILL HAVE QUESTIONS?</span>
              <h2>Talk to Our Team</h2>
              <p>
                We&apos;re here to help you choose the right course and guide you
                on your career path.
              </p>
            </div>
            <a className="contact-cta-button" href="#contact-enquiry-form">
              Contact Us Now <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;