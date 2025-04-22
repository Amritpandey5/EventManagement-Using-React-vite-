import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import DashboardLayout from "./app/dashboard/layout";

import AdminPage from "./app/dashboard/admin/adminPage";
import StudentPage from "./app/dashboard/student/studentPage";
import TeacherPage from "./app/dashboard/teacher/teacherpage";
import ParentPage from "./app/dashboard/parent/parentPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="about" element={<div>About</div>} />
          <Route path="contact" element={<div>Contact</div>} />
          <Route path="dashboard/admin" element={<AdminPage />} />
          <Route path="dashboard/student" element={<StudentPage />} />
          <Route path="dashboard/teacher" element={<TeacherPage />} />
          <Route path="dashboard/parent" element={<ParentPage />} />
          <Route path="admin" element={<div>Admin</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
