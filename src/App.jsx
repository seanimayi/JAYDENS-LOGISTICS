import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./HomePage/Navbar";
import Home from "./HomePage/Home";
import About from "./AboutPage/About";
import Contact from "./ContactPage/Contact";
import Services from "./ServicesPage/Services";
import Logistics from "./Pages/Logistics";
import HR from "./Pages/HR";
import ES from "./Pages/ES";
import Update from "./Updates/update";
import AdminForm from "./Admin_Page/AdminForm";
import FAQ from "./Pages/FAQ";
import AdminDashboardLayout from "./Admin_Page/AdminDashboardLayout";
import Dashboard from "./Admin_Page/Dashboard";
import Post from "./Admin_Page/Post";
import Admin from "./Admin_Page/Admin";
import Employees from "./Admin_Page/Employees";
import Profile from "./Admin_Page/Profile";
import Settings from "./Admin_Page/Settings";

import "./App.css";

function App() {
  const location = useLocation();
  const hidePathName = ["/dashboard", "/dashboard/post", "/dashboard/admin", "/dashboard/employees", "/dashboard/profile", "/dashboard/settings"];

  return (
    <>
      {!hidePathName.includes(location.pathname) && <NavBar />}
      <Routes>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/hr" element={<HR />} />
        <Route path="/educationalservices" element={<ES />} />
        <Route path="/news-update" element={<Update />} />
        <Route path="/signup" element={<AdminForm />} />
        <Route path="*" element={<h1>Page Not Found.</h1>} />

        {/* Admin layout & nested routes */}
        <Route path="dashboard" element={<AdminDashboardLayout />}>
          <Route index element={<Dashboard />} /> {/* default /dashboard */}
          <Route path="post" element={<Post />} />
          <Route path="admin" element={<Admin />} />
          <Route path="employees" element={<Employees />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
