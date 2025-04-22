import React from "react";
import Announcements from "@/components/Announcement";
import BigCalendar from "@/components/BigCalender";
import "./TeacherPage.css"; // Import the CSS file for styles

const TeacherPage = () => {
  return (
    <div className="teacher-page">
      {/* LEFT */}
      <div className="left-container">
        <div className="schedule-container">
          <h1 className="schedule-heading">Schedule</h1>
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

export default TeacherPage;
