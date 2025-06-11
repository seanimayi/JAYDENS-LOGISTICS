import "../App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import EducationSection1 from "./EducationalComponent/EducationalComponent";
import EducationSection2 from "./EducationalComponent/Educationalcomponent2";

import Footer from "../HomePage/Footer";
import "../Styles/Pages.css";
import Linked from "./Links";
const ES = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1);
    return () => clearTimeout(timeout);
  }, []);
  if (!isMounted) return null;
  return (
    <>
      <div className="pages_container">
        <Linked />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
          className="bx_content es_content"
        >
          <motion.div className="bx_text">
            <motion.h1
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Educational Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: false }}
            >
              At Jaydens’s Educational Services, we provide transformative
              learning opportunities tailored to empower individuals with
              relevant skills for today’s world.
            </motion.p>
          </motion.div>
        </motion.div>

        <EducationSection1 />
        <EducationSection2 />
      </div>
      <Footer />
    </>
  );
};

export default ES;
