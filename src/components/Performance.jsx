import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import "../css/Performance.css"; // Import the CSS file for styling

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

const Performance = () => {
  return (
    <div className="performance-container">
      <div className="performance-header">
        <h1 className="performance-title">Performance</h1>
        <img src="/moreDark.png" alt="More options" width={16} height={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="performance-center">
        <h1 className="performance-score">9.2</h1>
        <p className="performance-text">of 10 max LTS</p>
      </div>
      <h2 className="performance-subtitle">1st Semester - 2nd Semester</h2>
    </div>
  );
};

export default Performance;
