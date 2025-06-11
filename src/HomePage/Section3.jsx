import "../Styles/HomeComponent.css";
import "../App.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Section3 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="section3_container">
        <div className="section3_container_content">
          <div className="section3_container_text">
            <motion.h1
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-3xl font-bold"
            >
              <i>Comprehensive</i> Services <i>Tailored</i> To Meet Your
              <i>Unique</i> Needs.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="font-bold"
            >
              At Jayden's Logistics, we are dedicated to providing services that
              not only meet but exceed your expectations.
            </motion.p>
          </div>
          <div className="section3_content">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="section3_content_text"
            >
              <div className="icons_container">
                <i className="fas fa-truck"></i>
              </div>
              <h4>Logistics Services</h4>
              <p>
                We provide streamlined logistics solutions including
                warehousing, transportation, and inventory coordination,
                ensuring businesses achieve timely and cost-effective delivery
                every time
              </p>
              <button
                className="section3_content_button"
                onClick={() => navigate("/Logistics")}
              >
                View Details
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: false }}
              className="section3_content_text"
            >
              <div className="icons_container">
                <i className="fas fa-user-tie"></i>
              </div>
              <h4>HR Development</h4>
              <p>
                {" "}
                Our HR services connect businesses with the right talent while
                also offering scalable workforce solutions, policy development,
                and training programs tailored to each organization’s unique
                needs.
              </p>
              <button
                className="section3_content_button"
                onClick={() => navigate("/HR")}
              >
                View Details
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="section3_content_text"
            >
              <div className="icons_container">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h4>Educational services</h4>
              <p>
                Through innovative training and learning platforms, we equip
                individuals and teams with job-ready skills, leadership
                development, and access to lifelong learning opportunities.
              </p>
              <button
                className="section3_content_button"
                onClick={() => navigate("/EducationalServices")}
              >
                View Details
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
