import "../Styles/AboutComponent.css";
import "../App.css";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <div className="about_section">
      <div className="about_section_content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="about_section_img"
        >
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: false }}  
           className="about_text_content">
            <span>
              <i className="fas fa-lightbulb"></i> Innovation
            </span>
            <span>
              <i className="fas fa-chart-bar"></i>Scalability
            </span>
            <span>
              <i className="fas fa-check"></i>Invulnerability
            </span>
            <span>
              <i className="fas fa-truck"></i>Transportation
            </span>
          </motion.div>
        </motion.div>
        <div className="about_section_text">
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            WHO WE ARE ?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            We Specialized In <i>Innovative</i> Production That Ensures A vast{" "}
            <i>Community</i>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: false }}
            className="about_section_text_p1"
          >
            {" "}
            We connect people, processes, and purpose—delivering smart
            logistics, strategic HR support, and forward-thinking education. Our
            focus is to equip businesses and individuals with the right tools,
            talent, and training to succeed in a rapidly changing world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
            className="about_section_text_p2"
          >
            {" "}
            We connect people, processes, and purpose—delivering smart
            logistics, strategic HR support, and forward-thinking education. Our
            focus is to equip businesses and individuals with the right tools,
            talent, and training to succeed in a rapidly changing world.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
