import React from "react";
import { Link } from "react-router-dom";
import FormModal from "./components/FormModal";
import Performance from "./components/Performance";
import Announcements from "./components/Announcements";
import BigCalendar from "./components/BigCalendar";
import { role } from "./lib/data";
import "./SingleTeacherPage.css";

const SingleTeacherPage = () => {
  return (
    <div className="teacher-page-container">
      {/* LEFT SECTION */}
      <div className="left-section">
        {/* TOP SECTION */}
        <div className="top-section">
          {/* USER INFO CARD */}
          <div className="user-info-card">
            <div className="user-photo">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="User"
                className="user-image"
              />
            </div>
            <div className="user-details">
              <div className="user-name">
                <h1 className="name">Leonard Snyder</h1>
                {role === "admin" && (
                  <FormModal
                    table="teacher"
                    type="update"
                    data={{
                      id: 1,
                      username: "deanguerrero",
                      email: "deanguerrero@gmail.com",
                      password: "password",
                      firstName: "Dean",
                      lastName: "Guerrero",
                      phone: "+1 234 567 89",
                      address: "1234 Main St, Anytown, USA",
                      bloodType: "A+",
                      dateOfBirth: "2000-01-01",
                      sex: "male",
                      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    }}
                  />
                )}
              </div>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="user-info-details">
                <div className="detail-item">
                  <img src="/blood.png" alt="Blood Type" className="icon" />
                  <span>A+</span>
                </div>
                <div className="detail-item">
                  <img src="/date.png" alt="Date" className="icon" />
                  <span>January 2025</span>
                </div>
                <div className="detail-item">
                  <img src="/mail.png" alt="Email" className="icon" />
                  <span>user@gmail.com</span>
                </div>
                <div className="detail-item">
                  <img src="/phone.png" alt="Phone" className="icon" />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="small-cards-container">
            {/* CARD */}
            <div className="card">
              <img src="/singleAttendance.png" alt="Attendance" className="card-icon" />
              <div>
                <h1 className="card-title">90%</h1>
                <span className="card-subtitle">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="card">
              <img src="/singleBranch.png" alt="Branches" className="card-icon" />
              <div>
                <h1 className="card-title">2</h1>
                <span className="card-subtitle">Branches</span>
              </div>
            </div>
            {/* CARD */}
            <div className="card">
              <img src="/singleLesson.png" alt="Lessons" className="card-icon" />
              <div>
                <h1 className="card-title">6</h1>
                <span className="card-subtitle">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="card">
              <img src="/singleClass.png" alt="Classes" className="card-icon" />
              <div>
                <h1 className="card-title">6</h1>
                <span className="card-subtitle">Classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-section">
          <h1>Teacher's Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
        <div className="shortcuts-card">
          <h1 className="shortcuts-title">Shortcuts</h1>
          <div className="shortcuts-links">
            <Link className="shortcut-link" to="/">
              Teacher's Classes
            </Link>
            <Link className="shortcut-link" to="/">
              Teacher's Students
            </Link>
            <Link className="shortcut-link" to="/">
              Teacher's Lessons
            </Link>
            <Link className="shortcut-link" to="/">
              Teacher's Exams
            </Link>
            <Link className="shortcut-link" to="/">
              Teacher's Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
