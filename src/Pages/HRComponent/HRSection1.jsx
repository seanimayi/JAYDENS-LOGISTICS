import "../../App.css";
import "../../Styles/HRcomponent.css";
import { motion } from "framer-motion";
import React, { forwardRef } from "react";

const HRsection1 = forwardRef((props, ref) => {
  const hrBox = [
    {
      header: "Talent Acquisition",
      icons: "fas fa-user-plus",
      content:
        "Find and recruit top talent to build a dynamic workforce aligned with your company's goals.",
    },
    {
      header: "Employee Training",
      icons: "fas fa-chalkboard-teacher",
      content:
        "Upskill your team with tailored training programs to improve productivity and engagement.",
    },
    {
      header: "Performance Management",
      icons: "fas fa-chart-line",
      content:
        "Track employee performance, set clear goals, and provide continuous feedback for growth.",
    },
    {
      header: "Workplace Culture",
      icons: "fas fa-users",
      content:
        "Foster a positive, inclusive environment that motivates employees and retains talent.",
    },
    {
      header: "HR Policy & Compliance",
      icons: "fas fa-balance-scale",
      content:
        "Establish and maintain company policies that align with labor laws and ethical standards.",
    },
    {
      header: "Career Development",
      icons: "fas fa-briefcase",
      content:
        "Support employee growth through mentorship, promotion paths, and personal development plans.",
    },
  ];

  return (
    <div className="hr_section1_container" ref={ref}>
      <div className="hr_section1_content">
        <div className="hr_section1_text">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="hr_section_text1"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1.7, ease: "easeOut" }}
            >
              Our Benefit
            </motion.span>
            <motion.h1
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1.7, ease: "easeOut" }}
            >
              One <i>efficient</i> system for all your <i>people & companies</i>.
            </motion.h1>
          </motion.div>
        </div>
        <div className="hr_boxes_container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: false }}
            className="hr_boxes_content"
          >
            {hrBox.map((hr, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="hr_boxes"
                key={index}
              >
                <i className={`${hr.icons}`}></i>
                <h2>{hr.header}</h2>
                <p>{hr.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default HRsection1;