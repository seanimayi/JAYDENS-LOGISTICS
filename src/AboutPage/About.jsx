import "../Styles/AboutComponent.css";
import AboutNum from "./AboutNo";
import Users from "./Users";
import Footer from "../HomePage/Footer";
import "../App.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
    <div className="about_container">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="about_content"
      >
        <motion.div className="about_text">
          <motion.h1
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: false }}
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: false }}
          >
            With a team of experienced professionals, we pride ourselves on
            delivering excellence, fostering growth, and creating opportunities.
            Whether you're looking for streamlined logistics, workforce
            solutions, or skill development programs, we are here to support you
            every step of the way.
          </motion.p>
        </motion.div>
      </motion.div>
      <AboutNum />
      <Users />
    </div>
    <Footer />
    </>
  );
};

export default About;
