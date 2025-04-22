import React from "react";
import "../css/Announcement.css"; // Import the CSS file for styling

const Announcements = () => {
  return (
    <div className="announcements">
      <div className="announcements-header">
        <h1 className="announcements-title">Announcements</h1>
        <span className="announcements-view-all">View All</span>
      </div>
      <div className="announcement-list">
        <div className="announcement-item sky">
          <div className="announcement-top">
            <h2 className="announcement-heading">Lorem ipsum dolor sit</h2>
            <span className="announcement-date">2025-01-01</span>
          </div>
          <p className="announcement-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>

        <div className="announcement-item purple">
          <div className="announcement-top">
            <h2 className="announcement-heading">Lorem ipsum dolor sit</h2>
            <span className="announcement-date">2025-01-01</span>
          </div>
          <p className="announcement-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>

        <div className="announcement-item yellow">
          <div className="announcement-top">
            <h2 className="announcement-heading">Lorem ipsum dolor sit</h2>
            <span className="announcement-date">2025-01-01</span>
          </div>
          <p className="announcement-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
