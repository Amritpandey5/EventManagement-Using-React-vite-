import React from "react";
import "../css/Pagination.css"; // Import the CSS file for styling

const Pagination = () => {
  return (
    <div className="pagination-container">
      <button disabled className="pagination-btn prev-btn">
        Prev
      </button>
      <div className="pagination-pages">
        <button className="pagination-page active">1</button>
        <button className="pagination-page">2</button>
        <button className="pagination-page">3</button>
        ...
        <button className="pagination-page">10</button>
      </div>
      <button className="pagination-btn next-btn">
        Next
      </button>
    </div>
  );
};

export default Pagination;
