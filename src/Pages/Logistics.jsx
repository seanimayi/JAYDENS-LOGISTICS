import "../App.css";
import '../Styles/Pages.css'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import LogisSection1 from './LogisticsComponent/LogisticSection1';
import Logistics2 from "./LogisticsComponent/LogisticsSection2";
import LogisticsSection3 from "./LogisticsComponent/LogisticsSection3";
import Linked from "./Links";
import Footer from '../HomePage/Footer'
const Logistics = () => {
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
          className="bx_content logistics_content"
        >
          <motion.div className="bx_text">
            <motion.h1
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Logistics
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: false }}
            >
              We provide efficient, reliable, and timely logistics solutions
              tailored to your business needs — ensuring smooth transportation,
              warehousing, and delivery of goods from start to finish.
            </motion.p>
          </motion.div>
        </motion.div>
        <LogisSection1 />
        <Logistics2/>
        <LogisticsSection3 />
      </div>
      <Footer />
    </>
  );
};

export default Logistics;
