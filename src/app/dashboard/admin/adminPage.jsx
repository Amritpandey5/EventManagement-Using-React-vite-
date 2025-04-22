import React from "react";
import Announcements from "@/components/Announcement";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import "./adminPage.css";

const AdminPage = () => {
  return (
    <div className="admin-page">
      {/* LEFT */}
      <div className="admin-left">
        {/* USER CARDS */}
        <div className="user-cards">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="middle-charts">
          <div className="count-chart">
            <CountChart />
          </div>
          <div className="attendance-chart">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="finance-chart">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="admin-right">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
