import React from 'react';
import Announcements from "@/components/Announcement"; // Import the Announcements component
import BigCalendar from '@/components/BigCalender'; // Import the BigCalendar component
import EventCalendar from '@/components/EventCalendar'; // Import the EventCalendar component
import './StudentPage.css'; // Import the CSS file for styles

const StudentPage = () => {
  return (
    <div className="student-page-container">
      {/* LEFT */}
      <div className="left-container">
        <div className="schedule-card">
          <h1 className="schedule-title">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="right-container">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
