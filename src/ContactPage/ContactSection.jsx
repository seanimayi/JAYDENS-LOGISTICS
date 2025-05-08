import "../App.css";
import "../Styles/ContactComponent.css";
import { motion } from "framer-motion";
const ContactSection = () => {
  return (
    <>
      <div className="contact_section_container">
        <div className="contact_section_content">
          <div className="contact_section_text">
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              CONTACT OUR TEAM
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Connect With Us<i>Today</i> To <i>Build</i> A <i>Community</i>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: false }}
              className="about_section_text_p1"
            >
              {" "}
              Reaching out to us is the first step toward a meaningful
              partnership. Whether you need assistance, information, or are
              ready to collaborate, our team is always ready to respond promptly
              and professionally.
            </motion.p>
          </div>
          <div className="contact_box">
            <div className="contact_box_content">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="contact_bx"
              >
                <div className="contact_bx_text">
                  <i className="fas fa-phone"></i>
                  <span>Phone</span>
                </div>
                <p>0701 133 8163</p>
                <p>+44 7867275002</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="contact_bx"
              >
                {" "}
                <div className="contact_bx_text">
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </div>
                <p>youremailaddress</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="contact_bx"
              >
                {" "}
                <div className="contact_bx_text">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Address</span>
                </div>
                <p>35C central AvenueBeside fstc Quest house Abule Ijesa. Lagos state, Nigeria.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
