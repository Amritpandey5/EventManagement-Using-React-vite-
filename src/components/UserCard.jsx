import React from "react";
import "../css/UserCard.css"; // Import the CSS file for styling

const UserCard = ({ type }) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <span className="user-card-year">2024/25</span>
        <img src="/more.png" alt="More" width={20} height={20} />
      </div>
      <h1 className="user-card-count">1,234</h1>
      <h2 className="user-card-type">{type}s</h2>
    </div>
  );
};

export default UserCard;
