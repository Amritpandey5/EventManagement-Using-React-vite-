import React from "react";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom"; // Replacing Next.js Link with React Router
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";  // Importing the custom CSS file
 // Assuming you have a logo image

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      {/* LEFT */}
      <div className="sidebar">
        <Link to="/" className="logo-container">
          <img src="/logo.png" alt="logo" width={32} height={32} />
          <span className="logo-text">GURUKUL</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="content-area">
        <Navbar />
        <Outlet/>
      </div>
    </div>
  );
};

export default DashboardLayout;
