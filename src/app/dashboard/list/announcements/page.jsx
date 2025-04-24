import React from "react";
import FormModal from "../../../../components/FormModal";
import Pagination from "../../../../components/Pagination";
import Table from "../../../../components/Table";
import TableSearch from "../../../../components/TableSearch";
import { announcementsData, role } from "../../../../lib/data";
import "./AnnouncementListPage.css";

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden-md",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const AnnouncementListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="table-row">
      <td className="title-cell">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden-md">{item.date}</td>
      <td>
        <div className="action-buttons">
          {role === "admin" && (
            <>
              <FormModal table="announcement" type="update" data={item} />
              <FormModal table="announcement" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="announcement-page">
      {/* TOP */}
      <div className="announcement-header">
        <h1 className="header-title">All Announcements</h1>
        <div className="header-controls">
          <TableSearch />
          <div className="header-buttons">
            <button className="icon-button">
              <img src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="icon-button">
              <img src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModal table="announcement" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AnnouncementListPage;
