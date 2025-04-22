import React from "react";
import "..//css/Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Search Bar */}
      <div className="navbar-search">
        <img src="/search.png" alt="Search" width={14} height={14} />
        <input type="text" placeholder="Search..." />
      </div>

      {/* Icons and User Info */}
      <div className="navbar-right">
        <div className="icon-button">
          <img src="/message.png" alt="Messages" width={20} height={20} />
        </div>

        <div className="icon-button notification">
          <img src="/announcement.png" alt="Announcements" width={20} height={20} />
          <div className="badge">1</div>
        </div>

        <div className="user-info">
          <span className="username">John Doe</span>
          <span className="role">Admin</span>
        </div>

        <img src="/avatar.png" alt="Avatar" width={36} height={36} className="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
