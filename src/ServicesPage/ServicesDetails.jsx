import "../Styles/ServiceComponent.css";
import "../App.css";
import logistics from "../assets/logistics.jpeg";
import HR from "../assets/HR.jpg";
import educ from "../assets/educationservice.jpeg";
import { motion } from "framer-motion";
const ServiceDetails = () => {
  return (
    <>
      <div className="service_list_container">
        <motion.h1
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: false }}
        >
          The <i>services</i> we offer are <i>economicaly</i> comprehensive.
        </motion.h1>
        <div className="service_list_content">
          <div className="service_list_bx">
            <div className="service_list_bx_content">
              <motion.h2
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: false }}
              >
                Logistics
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: false }}
              >
                We provide reliable, on-time delivery solutions tailored to
                businesses of all sizes. From local dispatch to large-scale
                freight coordination, our logistics team ensures smooth and
                secure movement of goods. Whether it's last-mile delivery or
                warehouse management, we keep your supply chain flowing.
              </motion.p>
            </div>
            <div className="service_mini_bx">
              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="mini_bx"
              >
                <i class="fas fa-shipping-fast"></i>
                <h2>Fast Delievery</h2>
                <p>Ensuring timely and secure transportation of goods</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="mini_bx"
              >
                <i className="fas fa-warehouse"></i>
                <h2>Warehouse Management</h2>
                <p>Streamlined inventory handling and storage operations.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="mini_bx"
              >
                <i className="fas fa-route"></i>
                <h2>Nationwide Coverage</h2>
                <p>
                  Delivering to businesses and individuals across the country.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="service_list_bx">
            <div className="service_list_bx_content">
              <motion.h2
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: false }}
              >
                HR
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: false }}
              >
                Our HR experts support companies in recruiting top talent,
                managing employee relations, and building a productive workplace
                culture. We offer staffing solutions, training programs, HR
                consulting, and workforce planning—helping you grow a strong,
                agile team that drives success.
              </motion.p>
            </div>
            <div className="service_mini_bx">
              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="mini_bx"
              >
                <i className="fas fa-users"></i>
                <h2>Talent Acquisition</h2>
                <p>Recruiting skilled professionals to strengthen your team.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: false }}
                className="mini_bx"
              >
                <i className="fas fa-chalkboard-teacher"></i>
                <h2>Employee Training</h2>
                <p>
                  Upskilling staff through workshops and professional
                  development.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: false }}
                className="mini_bx"
              >
                <i className="fas fa-chart-line"></i>
                <h2>Performance Management</h2>
                <p>
                  Enhancing productivity with clear goals and feedback systems.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="service_list_bx">
            <div className="service_list_bx_content">
              <motion.h2
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                Education
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                We empower individuals and organizations through transformative
                education. Our training programs, workshops, and career
                development services are designed to equip learners with
                real-world skills. From professional certifications to youth
                mentoring, we’re shaping the future—one learner at a time.
              </motion.p>
            </div>

            <div className="service_mini_bx">
              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
                className="mini_bx"
              >
                {" "}
                <i className="fas fa-graduation-cap"></i>
                <h2>Career Development</h2>
                <p>
                  Equipping individuals with skills for future career growth.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="mini_bx"
              >
                {" "}
                <i className="fas fa-tools"></i>
                <h2>Skill Based Training</h2>
                <p>Hands-on learning tailored to real-world demands</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: false }}
                className="mini_bx"
              >
                {" "}
                <i className="fas fa-chalkboard"></i>
                <h2>Workshop & Seminars</h2>
                <p>Interactive sessions led by experienced professionals</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
