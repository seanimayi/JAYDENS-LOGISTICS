import { Outlet, useLocation } from "react-router-dom";
import Body from "./Body";
import SideBar from "./Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const AdminDashboardLayout = () => {
  const [showGreeting, setShowGreeting] = useState(false);
  const userName = localStorage.getItem("Name");

  useEffect(() => {
    setShowGreeting(true);
    setTimeout(() => {
      setShowGreeting(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="min-h-screen w-full bg-slate-900">
        <AnimatePresence>
          {showGreeting && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0, y: "-100%" }}
              className="h-[60px] z-10 left-0 w-[30%] absolute bg-blue-500 top-0 shadow-md text-white p-5 rounded-sm flex items-center justify-center"
            >
              Welcome back, {userName}!
            </motion.div>
          )}
        </AnimatePresence>
        <SideBar />
        <Body>
          <Outlet />
        </Body>
      </div>
    </>
  );
};

export default AdminDashboardLayout;
