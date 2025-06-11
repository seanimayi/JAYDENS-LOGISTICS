import { motion } from "framer-motion";
const EducationSection2 = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVaritants = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <div className="educationalServices1_container">
      <div className="educationalServices1_content">
        <motion.div
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1, ease: "easeOut"}}
          viewport={{once: false}}
         className="educational_img">
          <motion.div 
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1, ease: "easeOut"}}
          viewport={{once: false}}
          className="educational_img_text">
            <i className="fas fa-chart-line"></i>
            <div>
              <h2>85%</h2>
              <p>Success Rate</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVaritants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="educational_text"
        >
          <motion.h2
            variants={variants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            The <i>Ways</i> We <i>Can</i> Help.
          </motion.h2>
          <motion.p
            variants={variants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            We give forward-thinking educational services company dedicated to
            empowering individuals and institutions through transformative
            learning experiences.
          </motion.p>
          <ul>
            <motion.li
              variants={variants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <i className="fas fa-graduation-cap"></i>Training Programs
            </motion.li>
            <motion.li
              variants={variants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <i className="fas fa-graduation-cap"></i>Curiculum Development
            </motion.li>
            <motion.li
              variants={variants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <i className="fas fa-graduation-cap"></i>Talent Development
            </motion.li>
          </ul>
          <motion.button
            variants={variants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            View More <i className="fas fa-arrow-right"></i>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationSection2;
