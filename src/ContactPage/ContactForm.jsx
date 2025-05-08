import "../App.css";
import "../Styles/ContactComponent.css";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rp7r7kr", // Replace with your EmailJS Service ID
        "template_05p3e5e", // Replace with your EmailJS Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          otherNames: formData.emailAddress,
          phoneNumber: formData.phoneNumber,
          message: formData.message,
        },
        "t-cxFjvJY6C-6dJ3O" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      )
      .finally(() => {
        // Clear the form fields regardless of success or failure
        setFormData({
          firstName: "",
          lastName: "",
          emailAddress: "",
          phoneNumber: "",
          message: "",
        });
      });
  }; 

  return (
    <>
      <div className="contact_form">
        <div className="contact_form_content">
          <motion.form className="contact_inp" onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="contact_inp_form"
            >
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter Your Full Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="contact_inp_form"
            >
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="contact_inp_form"
            >
              <label>Email Address</label>
              <input
                type="text"
                name="emailAddress"
                placeholder="Enter your Email Address"
                value={formData.emailAddress}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="contact_inp_form"
            >
              <label>Phone Number</label>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Enter your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="contact_inp_form"
            >
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Let us hear from you"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="contact_inp_form"
            >
              <input type="submit" value="Submit" />
            </motion.div>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="form_text"
          >
            <span>
              Please fill out the <i>form</i> and our <i>Team</i> will get back
              to you properly.
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;