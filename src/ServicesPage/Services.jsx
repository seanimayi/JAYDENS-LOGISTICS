import "../App.css";
import "../Styles/ServiceComponent.css";
import ServiceDetails from "./Servicesdetails";
import Footer from "../HomePage/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Services = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 1);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="service_container">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
          className="bx_content services_content"
        >
          <motion.div className="bx_text">
            <motion.h1
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: false }}
            >
              At Jaydens's Logistics, Human Resources, and Educational Services,
              we provide a dynamic range of professional solutions tailored to
              meet your needs. From fast and dependable logistics delivery to
              strategic HR management and impactful educational programs, our
              services are designed to drive results and empower growth.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <ServiceDetails />
      <Footer />
    </>
  );
};

export default Services;
