import React from "react";
import FormModal from "./components/FormModal";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import TableSearch from "./components/TableSearch";
import { resultsData, role } from "./lib/data";
import Image from "next/image";
import "./ResultListPage.css";

const columns = [
  { header: "Subject Name", accessor: "name" },
  { header: "Student", accessor: "student" },
  { header: "Score", accessor: "score", className: "hidden-md" },
  { header: "Teacher", accessor: "teacher", className: "hidden-md" },
  { header: "Class", accessor: "class", className: "hidden-md" },
  { header: "Date", accessor: "date", className: "hidden-md" },
  { header: "Actions", accessor: "action" },
];

const ResultListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="table-row">
      <td className="subject-cell">{item.subject}</td>
      <td>{item.student}</td>
      <td className="hidden-md">{item.score}</td>
      <td className="hidden-md">{item.teacher}</td>
      <td className="hidden-md">{item.class}</td>
      <td className="hidden-md">{item.date}</td>
      <td>
        <div className="action-buttons">
          {(role === "admin" || role === "teacher") && (
            <>
              <FormModal table="result" type="update" data={item} />
              <FormModal table="result" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="result-list-page">
      {/* TOP */}
      <div className="result-header">
        <h1 className="header-title">All Results</h1>
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
              <FormModal table="result" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ResultListPage;
