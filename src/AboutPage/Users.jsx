import "../Styles/AboutComponent.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import User from '../assets/ALASE.jpg'
import User2 from '../assets/Man2.jpg'
import User3 from '../assets/User3.jpg'
const Users = () => {
  const navigate = useNavigate()
  return (
    <div className="about_users_container">
      <div className="about_users_content">
        <div className="about_users_intro">
          <motion.span
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            OUR TEAMS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            Meet The Real Solution <i className="text">EXPERT</i> Of The
            Mission.
          </motion.h1>
          <motion.button 
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }}
            onClick={() => navigate("/Contact")}
          >
            Contact Us<i className="fas fa-arrow-right"></i>
          </motion.button>
        </div>
        <div className="about_users_bx">
          <div className="about_users_bx_content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="about_users_bx_users"
            >
              <div className="about_users_bx_users_img">
                <img src={User} alt="Pics" />
              </div>
              <div className="about_bx_users_text">
                <h3>Alase Bamidele Emmanuel</h3>
                <p>Chief Executive Officer</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="about_users_bx_users"
            >
              <div className="about_users_bx_users_img">
                <img src={User2} alt="Pics" />
              </div>
              <div className="about_bx_users_text">
                <h3>Akinade Adeyinka Micheal</h3>
                <p>Director, Logistics and Educational services</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: false }}
              className="about_users_bx_users"
            >
              <div className="about_users_bx_users_img">
                <img src={User3} alt="Pics" />
              </div>
              <div className="about_bx_users_text">
                <h3>Falayi Olufemi Abiodun</h3>
                <p>Executive director 
                Human Resources and Education</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
