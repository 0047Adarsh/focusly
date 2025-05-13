// /components/AddTaskModal.jsx
import React, { useState } from "react";

function AddTaskModal() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log("Task Added:", { title, description });
    setShowModal(false);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="add-task-button">
        + Add Task
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Task</h2>
            <form onSubmit={handleAddTask}>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button type="submit">Add</button>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTaskModal;
