import React from "react";
import Announcements from "@/components/Announcement"; // Import the Announcements component
import BigCalendar from '@/components/BigCalender'; // Import the BigCalendar component
import "./ParentPage.css";

const ParentPage = () => {
  return (
    <div className="parent-page">
      {/* LEFT */}
      <div className="left-container">
        <div className="schedule-container">
          <h1 className="schedule-heading">Schedule (John Doe)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="right-container">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
