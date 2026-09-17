import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  CalendarDays,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import courses from "../data/courses";
import SectionTitle from "../components/SectionTitle";

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

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Student enquiry:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Start Your Learning Journey</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionTitle
              subtitle="Get In Touch"
              title="Let's Build Your Future Together"
              description="Have questions about our courses? Send us an enquiry."
            />

            <div className="contact-info">
              <h3>Career Transformation Center</h3>

              <p className="contact-item">
                <span className="contact-icon">
                  <MapPin size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <span>Telangana, India</span>
              </p>

              <p className="contact-item">
                <span className="contact-icon">
                  <Laptop size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <span>100% Online Live Classes</span>
              </p>

              <p className="contact-item">
                <span className="contact-icon">
                  <GraduationCap size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <span>Founder: Ravuri Sarika</span>
              </p>

              <p className="contact-item">
                <span className="contact-icon">
                  <Mail size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <a href="mailto:career@ctcinstitute.info">career@ctcinstitute.info</a>
              </p>

              <p className="contact-item">
                <span className="contact-icon">
                  <Phone size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <a href="tel:9703373646">9703373646</a>
              </p>

              <p className="contact-item">
                <span className="contact-icon">
                  <CalendarDays size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <span>Monday–Friday: Morning batches</span>
              </p>

              <p className="contact-item">
                <span className="contact-icon">
                  <CalendarDays size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <span>Saturday & Sunday: Morning and evening batches</span>
              </p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Full Name</label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <label htmlFor="phone">Phone Number</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />

              <label htmlFor="course">Interested Course</label>

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

              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                required
              />

              <button type="submit" className="btn btn-primary full-width">
                Submit Enquiry
              </button>

              {submitted && (
                <p className="success-message">
                  Your enquiry has been recorded in this demo. Email
                  integration will be added later.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;