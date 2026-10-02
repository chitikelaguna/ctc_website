import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import faqs from "../data/faqs";
import SectionTitle from "./SectionTitle";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="section faq-section">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          description="Find answers to common questions about our courses, training programs, and enrollment process."
        />

        <div className="faq-list">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            const answerId = `faq-answer-${faq.id}`;
            const questionId = `${answerId}-question`;

            return (
              <article
                className={`faq-item${isOpen ? " is-open" : ""}`}
                key={faq.id}
              >
                <h3 className="faq-heading">
                  <button
                    className="faq-question"
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle-icon" aria-hidden="true">
                      {isOpen ? <Minus /> : <Plus />}
                    </span>
                  </button>
                </h3>

                <div
                  className={`faq-answer${isOpen ? " is-open" : ""}`}
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;