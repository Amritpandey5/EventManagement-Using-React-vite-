import React from "react";
import FormModal from "./components/FormModal";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import TableSearch from "./components/TableSearch";
import { eventsData, role } from "./lib/data";
import Image from "next/image";
import "./EventListPage.css";

const columns = [
  { header: "Title", accessor: "title" },
  { header: "Class", accessor: "class" },
  { header: "Date", accessor: "date", className: "hidden-md" },
  { header: "Start Time", accessor: "startTime", className: "hidden-md" },
  { header: "End Time", accessor: "endTime", className: "hidden-md" },
  { header: "Actions", accessor: "action" },
];

const EventListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="table-row">
      <td className="title-cell">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden-md">{item.date}</td>
      <td className="hidden-md">{item.startTime}</td>
      <td className="hidden-md">{item.endTime}</td>
      <td>
        <div className="action-buttons">
          {role === "admin" && (
            <>
              <FormModal table="event" type="update" data={item} />
              <FormModal table="event" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="event-list-page">
      <div className="event-list-header">
        <h1 className="header-title">All Events</h1>
        <div className="header-controls">
          <TableSearch />
          <div className="header-buttons">
            <button className="icon-button">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="icon-button">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="event" type="create" />}
          </div>
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={eventsData} />

      <Pagination />
    </div>
  );
};

export default EventListPage;
