import React from "react";
import FormModal from "./components/FormModal";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import TableSearch from "./components/TableSearch";
import { examsData, role } from "./lib/data";
import Image from "next/image";
import "./ExamListPage.css";

const columns = [
  { header: "Subject Name", accessor: "name" },
  { header: "Class", accessor: "class" },
  { header: "Teacher", accessor: "teacher", className: "hidden-md" },
  { header: "Date", accessor: "date", className: "hidden-md" },
  { header: "Actions", accessor: "action" },
];

const ExamListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="table-row">
      <td className="title-cell">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden-md">{item.teacher}</td>
      <td className="hidden-md">{item.date}</td>
      <td>
        <div className="action-buttons">
          {(role === "admin" || role === "teacher") && (
            <>
              <FormModal table="exam" type="update" data={item} />
              <FormModal table="exam" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="exam-list-page">
      <div className="exam-list-header">
        <h1 className="header-title">All Exams</h1>
        <div className="header-controls">
          <TableSearch />
          <div className="header-buttons">
            <button className="icon-button">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="icon-button">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {(role === "admin" || role === "teacher") && (
              <FormModal table="exam" type="create" />
            )}
          </div>
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={examsData} />

      <Pagination />
    </div>
  );
};

export default ExamListPage;
