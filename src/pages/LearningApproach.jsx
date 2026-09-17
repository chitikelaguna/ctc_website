import SectionTitle from "../components/SectionTitle";

import institute from "../data/institute";

const LearningApproach = () => {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <h1>Learning Approach</h1>
          <p>Learn → Practice → Build → Grow</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Our Approach"
            title="Learning That Builds Confidence"
            description="We combine conceptual learning with hands-on assignments, practical exercises, real-world business use cases and projects."
          />

          <div className="learning-steps">
            {institute.approach.map((step, index) => (
              <div className="learning-step" key={step}>
                <span>0{index + 1}</span>

                <h2>{step}</h2>

                <p>
                  {index === 0 &&
                    "Understand concepts and build a strong foundation."}

                  {index === 1 &&
                    "Apply your knowledge through exercises and assignments."}

                  {index === 2 &&
                    "Create practical projects and real-world solutions."}

                  {index === 3 &&
                    "Develop confidence and continue your career growth."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section info-section">
        <div className="container">
          <SectionTitle
            subtitle="Training Format"
            title="100% Online • Live Classes over Zoom"
          />

          <div className="two-column">
            <div className="info-box">
              <h3>Weekdays</h3>
              <p>Monday–Friday: Morning batches only</p>
            </div>

            <div className="info-box">
              <h3>Weekends</h3>
              <p>Saturday & Sunday: Morning and evening batches</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningApproach;