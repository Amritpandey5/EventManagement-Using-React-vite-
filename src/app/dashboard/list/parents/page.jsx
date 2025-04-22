import React from "react";
import FormModal from "./components/FormModal";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import TableSearch from "./components/TableSearch";
import { parentsData, role } from "./lib/data";
import Image from "next/image";
import "./ParentListPage.css";

const columns = [
  { header: "Info", accessor: "info" },
  { header: "Student Names", accessor: "students", className: "hidden-md" },
  { header: "Phone", accessor: "phone", className: "hidden-lg" },
  { header: "Address", accessor: "address", className: "hidden-lg" },
  { header: "Actions", accessor: "action" },
];

const ParentListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="table-row">
      <td className="info-cell">
        <div className="info-text">
          <h3 className="info-name">{item.name}</h3>
          <p className="info-email">{item?.email}</p>
        </div>
      </td>
      <td className="hidden-md">{item.students.join(", ")}</td>
      <td className="hidden-lg">{item.phone}</td>
      <td className="hidden-lg">{item.address}</td>
      <td>
        <div className="action-buttons">
          {role === "admin" && (
            <>
              <FormModal table="parent" type="update" data={item} />
              <FormModal table="parent" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="parent-list-page">
      {/* TOP */}
      <div className="parent-list-header">
        <h1 className="header-title">All Parents</h1>
        <div className="header-controls">
          <TableSearch />
          <div className="header-buttons">
            <button className="icon-button">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="icon-button">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="parent" type="create" />}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ParentListPage;
