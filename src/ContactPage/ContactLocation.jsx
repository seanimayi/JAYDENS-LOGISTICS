import "../App.css";
import "../Styles/ContactComponent.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ContactLocation = () => {
  return (
    <>
      <div className="contact_map_container">
        <motion.div className="contact_map_content">
          <div className="blur"></div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="map_container"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d31712.052308518876!2d3.376236!3d6.520854!3m2!1i1024!2i768!4f13.1!2m1!1s35C%20central%20AvenueBeside%20fstc%20Quest%20house%20Abule%20Ijesa%20Lagos!5e0!3m2!1sen!2sng!4v1746276797758!5m2!1sen!2sng"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          <motion.div className="map_text">
            <motion.span
              initial={{ opacity: 0, y: 85 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              FIND US
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              Lagos State, Nigeria
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <Link
                className="get_location"
                to="https://www.google.com/maps/dir/6.5243793,3.3792057/Federal+Science+And+Technical+College,+Yaba,+Lagos/@6.5223449,3.3760713,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x103b8c55b73aa6f7:0xaf9e43f22e5beef7!2m2!1d3.377142!2d6.5213537?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
              >
                Find The Direction<i className="fas fa-arrow-right"></i>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactLocation;
