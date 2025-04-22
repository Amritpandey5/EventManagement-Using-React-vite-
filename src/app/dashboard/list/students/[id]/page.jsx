import React from "react";
import Announcements from "./components/Announcements";
import BigCalendar from "./components/BigCalender";
import Performance from "./components/Performance";
import Image from "next/image";
import Link from "next/link";
import "./SingleStudentPage.css";

const SingleStudentPage = () => {
  return (
    <div className="student-page">
      {/* LEFT SECTION */}
      <div className="left-section">
        {/* TOP */}
        <div className="top-section">
          {/* USER CARD */}
          <div className="user-card">
            <div className="user-image">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Profile"
                width={144}
                height={144}
                className="img-round"
              />
            </div>
            <div className="user-info">
              <h1 className="user-name">Cameron Moran</h1>
              <p className="user-bio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="user-details">
                <div className="info-item">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="info-item">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="info-item">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="info-item">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>

          {/* STATS CARDS */}
          <div className="stats-cards">
            {[
              { icon: "/singleAttendance.png", title: "90%", subtitle: "Attendance" },
              { icon: "/singleBranch.png", title: "6th", subtitle: "Grade" },
              { icon: "/singleLesson.png", title: "18", subtitle: "Lessons" },
              { icon: "/singleClass.png", title: "6A", subtitle: "Class" },
            ].map((card, index) => (
              <div className="stat-card" key={index}>
                <Image src={card.icon} alt="" width={24} height={24} className="icon" />
                <div>
                  <h1 className="card-title">{card.title}</h1>
                  <span className="card-subtitle">{card.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="calendar-container">
          <h1>Student's Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
        <div className="shortcuts-box">
          <h1 className="shortcuts-title">Shortcuts</h1>
          <div className="shortcuts-list">
            <Link className="shortcut sky" href="/">Student's Lessons</Link>
            <Link className="shortcut purple" href="/">Student's Teachers</Link>
            <Link className="shortcut pink" href="/">Student's Exams</Link>
            <Link className="shortcut sky" href="/">Student's Assignments</Link>
            <Link className="shortcut yellow" href="/">Student's Results</Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
