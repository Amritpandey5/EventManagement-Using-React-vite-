import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";
import "../css/CountChart.css"; // Import the CSS file for styling

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="count-chart-container">
      {/* TITLE */}
      <div className="count-chart-header">
        <h1 className="count-chart-title">Students</h1>
        <img src="/moreDark.png" alt="options" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="count-chart-graph-container">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <img
          src="/maleFemale.png"
          alt="Male and Female icon"
          width={50}
          height={50}
          className="count-chart-center-image"
        />
      </div>

      {/* BOTTOM */}
      <div className="count-chart-footer">
        <div className="count-chart-legend">
          <div className="legend-icon sky" />
          <h1 className="legend-value">1,234</h1>
          <h2 className="legend-label">Boys (55%)</h2>
        </div>
        <div className="count-chart-legend">
          <div className="legend-icon yellow" />
          <h1 className="legend-value">1,234</h1>
          <h2 className="legend-label">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
