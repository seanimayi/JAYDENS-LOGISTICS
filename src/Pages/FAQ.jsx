import "../Styles/FAQ.css";
import "../App.css";
import { motion } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const questions = [
    { header: "Why is the Sky blue?", answer: "Due to the scattering of sunlight by the atmosphere." },
    { header: "Where is Isaac Newton?", answer: "Isaac Newton was a famous physicist and mathematician." },
    { header: "Why is the floor dry?", answer: "The floor is dry because there is no water on it." },
  ];

  // State to track which question is open
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSlideDown = (index) => {
    // Toggle the active index
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq_container">
        <motion.div className="faq_content">
          <motion.span>Frequently Asked Questions</motion.span>
          <motion.h2>
            Common <i>Questions</i> asked In Our Organization.
          </motion.h2>
          {questions.map((question, index) => (
            <div className="faq_questions" key={index}>
              <div className="faq_header" onClick={() => handleSlideDown(index)}>
                <h3>{question.header}</h3>
                <i
                  className={`fas ${
                    activeIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </div>
              <div className={`faq_title ${activeIndex === index ? "open" : ""}`}>
                <p>{question.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default FAQ;