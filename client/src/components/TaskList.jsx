// /components/TaskList.jsx
import React from "react";
import TaskCard from "./TaskCard";

function TaskList() {
  const dummyTasks = [
    { id: 1, title: "Buy groceries", description: "Milk, eggs, bread", status: "pending" },
    { id: 2, title: "Finish project", description: "Complete the dashboard UI", status: "in progress" },
  ];

  return (
    <div className="task-list">
      {dummyTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
