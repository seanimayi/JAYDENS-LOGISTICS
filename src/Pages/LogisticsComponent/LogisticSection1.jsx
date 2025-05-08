import "../../App.css";
import "../../Styles/Pages.css";
import { motion } from "framer-motion";
import "../../Styles/Logistics.css";
import box from "../../assets/tanker3.png";

const LogisSection1 = () => {
  return (
    <>
      <div className="logis_section1">
        <div className="logis_section1_content">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="logistic_img_container"
          >
            <div className="logistics_bx">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="logis_location"
              >
                <span>
                  <i className="fas fa-cube"></i>
                  From
                </span>
                <h2>JL</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: false }}
                className="logis_location"
              >
                <span>
                  <i className="fas fa-cube"></i>
                  To
                </span>
                <h2>HE</h2>
              </motion.div>
            </div>
            <div className="shipping_container">
              <motion.img
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                src={box}
              />
            </div>
          </motion.div>
          <div className="logistics_img_text">
            <motion.h1
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              Delievering Any <i>Possibilities</i> with one Cargo at a
              <i> time</i>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              At JLHE, we believe every shipment holds the power to transform
              possibilities into progress. With every cargo we move, we deliver
              more than just goods — we deliver trust, efficiency, and the
              promise of new opportunities.
            </motion.p>
            <motion.div className="logis_mn">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className="logis_mn_bx"
              >
                <i className="fas fa-shipping-fast"></i>
                <span>Efficient Delievery</span>
                <p>
                  We ensure fast and secure transportation, meeting deadlines
                  while maintaining the highest quality standards.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="logis_mn_bx"
              >
                <i className="fas fa-globe"></i>
                <span>Global Reach</span>
                <p>
                  Our logistics network spans across regions, enabling seamless
                  international and local cargo operations.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="logis_mn_bx"
              >
                <i className="fas fa-handshake"></i>
                <span>Reliable Partnerships</span>
                <p>
                  We build lasting relationships with clients by offering
                  dependable services and transparent communication.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogisSection1;
