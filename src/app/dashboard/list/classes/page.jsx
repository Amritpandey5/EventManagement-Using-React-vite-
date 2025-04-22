import React from "react";
import FormModal from "./components/FormModal";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import TableSearch from "./components/TableSearch";
import { classesData, role } from "./lib/data";
import Image from "next/image";
import "./ClassListPage.css";

const columns = [
  { header: "Class Name", accessor: "name" },
  { header: "Capacity", accessor: "capacity", className: "hidden-md" },
  { header: "Grade", accessor: "grade", className: "hidden-md" },
  { header: "Supervisor", accessor: "supervisor", className: "hidden-md" },
  { header: "Actions", accessor: "action" },
];

const ClassListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="table-row">
      <td className="title-cell">{item.name}</td>
      <td className="hidden-md">{item.capacity}</td>
      <td className="hidden-md">{item.grade}</td>
      <td className="hidden-md">{item.supervisor}</td>
      <td>
        <div className="action-buttons">
          {role === "admin" && (
            <>
              <FormModal table="class" type="update" data={item} />
              <FormModal table="class" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="class-list-page">
      {/* TOP */}
      <div className="class-list-header">
        <h1 className="header-title">All Classes</h1>
        <div className="header-controls">
          <TableSearch />
          <div className="header-buttons">
            <button className="icon-button">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="icon-button">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="class" type="create" />}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ClassListPage;
