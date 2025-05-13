// /components/TaskCard.jsx
import React from "react";

function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span className={`status ${task.status}`}>{task.status}</span>
    </div>
  );
}

export default TaskCard;
