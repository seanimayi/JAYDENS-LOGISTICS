import "../../App.css";
import "../../Styles/HRcomponent.css";
import { motion } from "framer-motion";

const HRsection2 = ({ scrollToHrSection }) => {
  const variants1 = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants1 = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <>
      <div className="hr_section2_container">
        <div className="hr_section2_content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 50 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="hr_section2_img"
          >
            <img src="" alt="Pics" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants1}
            className="hr_section2_text"
          >
            <motion.span
              variants={variants1}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              About Our Firm
            </motion.span>
            <motion.h2
              variants={variants1}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Get To <i>Know</i> This <i>Part</i> Of The <i>Company</i>
            </motion.h2>
            <motion.p
              variants={variants1}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              At JLHE, Human Resource Development (HRD) is at the core of our
              mission to build a resilient, skilled, and forward-thinking
              workforce. We believe that the growth of our people drives the
              growth of our organization. That's why we invest in strategies
              that empower employees at every level.
            </motion.p>
            <motion.button
              variants={variants1}
              transition={{ duration: 1, ease: "easeOut" }}
              onClick={scrollToHrSection}
            >
              Explore More <i className="fas fa-arrow-right"></i>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HRsection2;
