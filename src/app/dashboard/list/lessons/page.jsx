import React from "react";
import FormModal from "./components/FormModal";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import TableSearch from "./components/TableSearch";
import { lessonsData, role } from "./lib/data";
import Image from "next/image";
import "./LessonListPage.css";

const columns = [
  { header: "Subject Name", accessor: "name" },
  { header: "Class", accessor: "class" },
  { header: "Teacher", accessor: "teacher", className: "hidden-md" },
  { header: "Actions", accessor: "action" },
];

const LessonListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="table-row">
      <td className="title-cell">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden-md">{item.teacher}</td>
      <td>
        <div className="action-buttons">
          {role === "admin" && (
            <>
              <FormModal table="lesson" type="update" data={item} />
              <FormModal table="lesson" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="lesson-list-page">
      {/* TOP */}
      <div className="lesson-list-header">
        <h1 className="header-title">All Lessons</h1>
        <div className="header-controls">
          <TableSearch />
          <div className="header-buttons">
            <button className="icon-button">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="icon-button">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="lesson" type="create" />}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default LessonListPage;
