import React from "react";
import "../App.css";
import Table from "./Table";
const Dashboard = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "100vw", display: "flex", flexDirection: "column" }}
        >
          <div style={{ maxHeight: "100vh", overflow: "auto" }}>
            <Table/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
