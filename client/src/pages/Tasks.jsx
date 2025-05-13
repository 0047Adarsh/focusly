import React from "react";
import TaskList from "../components/TaskList";
import AddTaskModal from "../components/AddTaskModal";
import "../styles/Tasks.css";


function Tasks() {
  return (
    <div className="tasks-page">
      <h1>My Tasks</h1>
      <AddTaskModal />
      <TaskList />
    </div>
  );
}

export default Tasks;
