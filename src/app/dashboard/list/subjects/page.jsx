import React from "react";
import FormModal from "./components/FormModal";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import TableSearch from "./components/TableSearch";
import { role, subjectsData } from "./lib/data";
import { Link } from "react-router-dom";  // Using react-router-dom for navigation
import "./SubjectListPage.css";

const columns = [
  { header: "Subject Name", accessor: "name" },
  { header: "Teachers", accessor: "teachers", className: "hidden-md" },
  { header: "Actions", accessor: "action" },
];

const SubjectListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="table-row">
      <td className="subject-name-cell">{item.name}</td>
      <td className="hidden-md">{item.teachers.join(", ")}</td>
      <td>
        <div className="actions">
          {role === "admin" && (
            <>
              <FormModal table="subject" type="update" data={item} />
              <FormModal table="subject" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="subject-list-container">
      {/* TOP SECTION */}
      <div className="top-section">
        <h1 className="title">All Subjects</h1>
        <div className="search-and-buttons">
          <TableSearch />
          <div className="button-group">
            <button className="filter-button">
              <img src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="sort-button">
              <img src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="subject" type="create" />}
          </div>
        </div>
      </div>
      {/* SUBJECT LIST TABLE */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default SubjectListPage;
