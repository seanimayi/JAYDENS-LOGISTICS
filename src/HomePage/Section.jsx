import "../Styles/HomeComponent.css";
import "../App.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import FAQ from "../Pages/FAQ";

const Section = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1);
    return () => clearTimeout(timeout);
  }, []);

  if (!isMounted) return null; // Prevent motion glitches on first render

  return (
    <>
      <div className="section_container">
        <div className="section_content">
          <div className="section_text">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="font-bold"
            >
              Jaydens's Logistics, <i>Human Resources</i> and Educational
              Services.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 80 }}
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
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="section_wrapper_cut"
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="section_wrapper_cut"
              />
            </motion.div>

            <motion.div
              className="section_wrapper_content"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            />

            <motion.div
              className="section_wrapper_content"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            />
          </div>

          <Section2 />
        </div>
      </div>
      <Section3 />
      <FAQ />
      <Section4 />
    </>
  );
};

export default Section;
