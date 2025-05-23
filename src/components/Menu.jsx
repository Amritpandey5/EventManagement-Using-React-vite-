import { role } from "../lib/data.js"; // Update the import path as needed
import { Link } from "react-router-dom";
import "../css/Menu.css"; // Custom CSS file

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "/home.png", label: "Home", href: "/", visible: ["admin", "teacher", "student", "parent"] },

      { icon: "/teacher.png", label: "Teachers", href: "/dashboard/dashboard/teacher", visible: ["admin", "teacher"] },

      { icon: "/student.png", label: "Students", href: "/dashboard/dashboard/student", visible: ["admin", "teacher"] },

      { icon: "/parent.png", label: "Parents", href: "/dashboard/dashboard/parent", visible: ["admin", "teacher"] },

      { icon: "/subject.png", label: "Subjects", href: "/list/subjects", visible: ["admin"] },

      { icon: "/class.png", label: "Classes", href: "/list/classes", visible: ["admin", "teacher"] },

      { icon: "/lesson.png", label: "Lessons", href: "/list/lessons", visible: ["admin", "teacher"] },

      { icon: "/exam.png", label: "Exams", href: "/list/exams", visible: ["admin", "teacher", "student", "parent"] },

      { icon: "/assignment.png", label: "Assignments", href: "/list/assignments", visible: ["admin", "teacher", "student", "parent"] },

      { icon: "/result.png", label: "Results", href: "/list/results", visible: ["admin", "teacher", "student", "parent"] },

      { icon: "/attendance.png", label: "Attendance", href: "/list/attendance", visible: ["admin", "teacher", "student", "parent"] },

      { icon: "/calendar.png", label: "Events", href: "/list/events", visible: ["admin", "teacher", "student", "parent"] },

      { icon: "/message.png", label: "Messages", href: "/list/messages", visible: ["admin", "teacher", "student", "parent"] },

      { icon: "/announcement.png", label: "Announcements", href: "/list/announcements", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },

  {
    title: "OTHER",
    items: [
      { icon: "/profile.png", label: "Profile", href: "/profile", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/setting.png", label: "Settings", href: "/settings", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/logout.png", label: "Logout", href: "/logout", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
];

const Menu = () => {
  return (
    <div className="menu">
      {menuItems.map((section) => (
        <div className="menu-section" key={section.title}>
          <span className="menu-title">{section.title}</span>
          {section.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link to={item.href} key={item.label} className="menu-link">
                  <img src={item.icon} alt={item.label} width={20} height={20} />
                  <span className="menu-label">{item.label}</span>
                </Link>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
