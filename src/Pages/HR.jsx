import "../App.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import HRsection1 from "./HRComponent/HRSection1";
import HRsection2 from "./HRComponent/HRSection2";
import Footer from "../HomePage/Footer";
import Linked from "./Links";

const HR = () => {
 
  const hrRef = useRef(null);

  const scrollToHrSection = () => {
    if (hrRef.current) {
      hrRef.current.scrollIntoView({ behavior: "smooth" }); // Fixed typo
    }
  };

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
          className="bx_content hr_content"
        >
          <motion.div className="bx_text">
            <motion.h1
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Human Resources
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: false }}
            >
              At Jaydens’s Human Resources Services, we believe people are the
              heart of every successful organization. Our HR solutions are
              designed to help you attract, develop, and retain top talent.
            </motion.p>
          </motion.div>
        </motion.div>
        <HRsection2 scrollToHrSection={scrollToHrSection} />
        <HRsection1 ref={hrRef} />
      </div>
      <Footer />
    </>
  );
};

export default HR;