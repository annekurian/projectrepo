import React from "react";

const StatusCard = () => {
  const containerStyle = {
    display: "flex",
  };

  const PendingTasksStyle = {
    background: "aliceblue",
  };
  return (
    <div style={containerStyle}>
      <div style={PendingTasksStyle}>
        <h3>Pending</h3>
        <p>
          <span>10</span>tasks
        </p>
      </div>
      <div>
        <h3>Today's</h3>
        <p>
          <span>4</span>tasks
        </p>
      </div>
      <div>
        <h3>Completed</h3>
        <p>
          <span>6</span>tasks
        </p>
      </div>
    </div>
  );
};

export default StatusCard;
