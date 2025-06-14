import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
import "../Styles/ContactComponent.css";
import ContactSection from "../ContactPage/ContactSection";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";
import Footer from "../HomePage/Footer";
const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1);
    return () => clearTimeout(timeout);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <div className="contact_container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
          className="bx_content contact_content"
        >
          <motion.div className="bx_text">
            <motion.h1
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Get In Touch
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: false }}
            >
              We're here to help! Whether you have questions, need support, or
              want to explore our services, feel free to reach out. Let’s start
              a conversation and build something great together.
            </motion.p>
          </motion.div>
        </motion.div>
        <ContactSection />
        <ContactLocation />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
