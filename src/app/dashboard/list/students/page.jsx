import React from "react";
import FormModal from "./components/FormModal";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import TableSearch from "./components/TableSearch";
import { role, studentsData } from "./lib/data";
import { Link } from "react-router-dom";  // Using react-router-dom for navigation
import "./StudentListPage.css";

const columns = [
  { header: "Info", accessor: "info" },
  { header: "Student ID", accessor: "studentId", className: "hidden-md" },
  { header: "Grade", accessor: "grade", className: "hidden-md" },
  { header: "Phone", accessor: "phone", className: "hidden-lg" },
  { header: "Address", accessor: "address", className: "hidden-lg" },
  { header: "Actions", accessor: "action" },
];

const StudentListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="table-row">
      <td className="info-cell">
        <img
          src={item.photo}
          alt="Profile"
          width={40}
          height={40}
          className="profile-image"
        />
        <div className="student-info">
          <h3 className="student-name">{item.name}</h3>
          <p className="student-class">{item.class}</p>
        </div>
      </td>
      <td className="hidden-md">{item.studentId}</td>
      <td className="hidden-md">{item.grade}</td>
      <td className="hidden-lg">{item.phone}</td>
      <td className="hidden-lg">{item.address}</td>
      <td>
        <div className="actions">
          <Link to={`/list/teachers/${item.id}`}>
            <button className="view-button">
              <img src="/view.png" alt="View" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table="student" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="student-list-container">
      {/* TOP SECTION */}
      <div className="top-section">
        <h1 className="title">All Students</h1>
        <div className="search-and-buttons">
          <TableSearch />
          <div className="button-group">
            <button className="filter-button">
              <img src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="sort-button">
              <img src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModal table="student" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* TABLE LIST */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default StudentListPage;
