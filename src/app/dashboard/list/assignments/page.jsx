import React from "react";
import FormModal from "../../../../components/FormModal";
import Pagination from "../../../../components/Pagination";
import Table from "../../../../components/Table";
import TableSearch from "../../../../components/TableSearch";
import { assignmentsData, role } from "../../../../lib/data";
import "./AssignmentListPage.css";

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden-md",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden-md",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const AssignmentListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="table-row">
      <td className="title-cell">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden-md">{item.teacher}</td>
      <td className="hidden-md">{item.dueDate}</td>
      <td>
        <div className="action-buttons">
          {(role === "admin" || role === "teacher") && (
            <>
              <FormModal table="assignment" type="update" data={item} />
              <FormModal table="assignment" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="assignment-page">
      {/* TOP */}
      <div className="assignment-header">
        <h1 className="header-title">All Assignments</h1>
        <div className="header-controls">
          <TableSearch />
          <div className="header-buttons">
            <button className="icon-button">
              <img src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="icon-button">
              <img src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            {(role === "admin" || role === "teacher") && (
              <FormModal table="assignment" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AssignmentListPage;
