import "../Styles/HomeComponent.css";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
const Section = () => {
  return (
    <div>
      <div className="section_container">
        <div className="section_content">
          <div className="section_text">
            <motion.h1
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
            >
              Jaydens's Logistics, <i>Human Resources</i> and Educational
              Services.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Our mission is to deliver innovative solutions that drive
              efficiency and success for our clients.
            </motion.p>
          </div>
          <div className="section_wrapper">
            <motion.div className="section_wrapper_content">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="section_wrapper_cut"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
                className="section_wrapper_cut"
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="section_wrapper_content"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: false }}
              className="section_wrapper_content"
            ></motion.div>
          </div>

          <Section2 />
        </div>
      </div>
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Section;
