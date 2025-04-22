import React from 'react';
import '../css/TableSearch.css'; // Import the CSS file for styles

const TableSearch = () => {
  return (
    <div className="table-search-container">
      <img src="/search.png" alt="Search Icon" width={14} height={14} />
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
};

export default TableSearch;
