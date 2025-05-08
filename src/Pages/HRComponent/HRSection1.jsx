import "../../App.css";
import "../../Styles/HRcomponent.css";
import { motion } from "framer-motion";

const HRsection1 = () => {
  const hrBox = [
    {
      header: "Talent Acquistion",
      icons: "fas fa-user-plus",
      content:
        "Find and recruit top talent to build a dynamic workforce aligned with your company's goals.",
    },
    {
      header: "Employee Training",
      icons: " fas fa-chalkboard-teacher",
      content:
        "Upskill your team with tailored training programs to improve productivity and engagement",
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
      header: " HR Policy & Compliance",
      icons: "fas fa-balance-scale",
      content:
        "Establish and maintain company policies that align with labor laws and ethical standards",
    },
    {
      header: "Career Development",
      icons: "fas fa-briefcase",
      content:
        "Support employee growth through mentorship, promotion paths, and personal development plans",
    },
  ];

  //Content animation variants
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const textVariants2 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants2 = {
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <>
      <div className="hr_section1_container">
        <div className="hr_section1_content">
          <div className="hr_section1_text">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants2}
              className="hr_section_text1"
            >
              <motion.span
                variants={textVariants2}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Our Benefit
              </motion.span>
              <motion.h1
                variants={textVariants2}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                One <i>efficient</i> system for all your{" "}
                <i>people & companies</i>.
              </motion.h1>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="hr_section_text2"
            >
              <motion.p
                variants={textVariants}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                At the heart of every successful organization is its people. Our
                Human Resource Development (HRD) solutions are designed to
                empower your workforce, enhance productivity, and foster growth.
              </motion.p>

              <motion.p
                variants={textVariants}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Whether it's performance management, leadership development, or
                organizational transformation, we provide the tools and
                strategies to align your people with your business goals.
              </motion.p>
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
    </>
  );
};

export default HRsection1;
