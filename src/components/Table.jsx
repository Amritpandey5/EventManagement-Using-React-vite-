import React from 'react';
import '../css/Table.css'; // Import the CSS file for styles

const Table = ({ columns, renderRow, data }) => {
  return (
    <table className="table-container">
      <thead>
        <tr className="table-header">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;
