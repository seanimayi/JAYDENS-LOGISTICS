import "../Styles/AdminStyles.css";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../HomePage/Footer";
const AdminForm = () => {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1);
    return () => clearTimeout(timeout);
  }, []);
  if (!isMounted) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginValidate()) {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
       setError(data.message || "Login failed");
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
        return false;
      }

      console.log(data);
      navigate("/dashboard");
      localStorage.setItem('Name', data.data.full_name);
      setLoginData({
        email: "",
        password: "",
      });
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  function loginValidate() {
    if (loginData.email == "" || loginData.password == "") {
      setError("Please This Form Must Be Filled");
      return false;
    }

    setError("");
    return true;
  }
  return (
    <>
      <div className="min-w-[100vw] flex justify-center item-center bg-slate-200 py-10 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {showError && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, y: "-100%" }}
              className="h-[60px] absolute w-[30%] bg-red-500 top-0 shadow-md text-white p-5 rounded-sm flex flex-start items-start flex-col"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="shadow-xl ring-1 ring-slate-50 w-[380px] p-[2rem] bg-white"
        >
          <form
            className="flex flex-start items-start flex-col gap-3 w-[100%]"
            onSubmit={handleSubmit}
          >
            <h1 className="text-slate-700 text-3xl mb-3">Account Login</h1>
            <div className="flex items-start flex-col gap-1 w-[100%]">
              <label className="text-[0.9rem]">Email</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="ring-1 ring-slate-200 outline-none w-[100%] h-[40px] rounded-md px-[1rem] text-[0.8rem]"
              ></input>
            </div>
            <div className="flex items-start flex-col gap-1 w-full">
              <label className="text-[0.9rem]">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="ring-1 ring-slate-200 outline-none w-[100%] h-[40px] rounded-md px-[1rem] text-[0.8rem]"
              ></input>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="accent-blue-300" />
                <label className="text-[0.8rem]">Remember Me</label>
              </div>
              <div className="underline text-blue-600 text-[0.8rem]">
                Forgot password?
              </div>
            </div>
            <input
              type="submit"
              value="Login"
              className="w-full h-[45px] bg-blue-900 text-white rounded-full my-3"
            />
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default AdminForm;
