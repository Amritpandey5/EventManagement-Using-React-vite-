import React from "react";
import FormModal from "./FormModal";
import Pagination from "./Pagination";
import Table from "./Table";
import TableSearch from "./TableSearch";
import { role, teachersData } from "../lib/data";
import { Link } from "react-router-dom"; // For internal linking
import "./TeacherListPage.css";  // Importing the custom CSS file

const TeacherListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="table-row">
      <td className="table-cell">
        <img
          src={item.photo}
          alt={item.name}
          width={40}
          height={40}
          className="teacher-image"
        />
        <div className="teacher-info">
          <h3 className="teacher-name">{item.name}</h3>
          <p className="teacher-email">{item?.email}</p>
        </div>
      </td>
      <td className="table-cell">{item.teacherId}</td>
      <td className="table-cell">{item.subjects.join(",")}</td>
      <td className="table-cell">{item.classes.join(",")}</td>
      <td className="table-cell">{item.phone}</td>
      <td className="table-cell">{item.address}</td>
      <td className="action-cell">
        <div className="action-buttons">
          <Link to={`/list/teachers/${item.id}`}>
            <button className="action-button view-button">
              <img src="/view.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table="teacher" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="teacher-list-page">
      {/* TOP */}
      <div className="top-bar">
        <h1 className="page-title">All Teachers</h1>
        <div className="actions">
          <TableSearch />
          <div className="buttons">
            <button className="action-button filter-button">
              <img src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="action-button sort-button">
              <img src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModal table="teacher" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
