// Sidebar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTasks, faColumns } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

function Sidebar({ onAddTask, onAddBoard, onShowTasks }) {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  const handleShowTasks = () => {
    onShowTasks();
    setShowAddTaskForm(false); // Reset the state when Show Tasks is clicked
  };

  const handleAddTask = () => {
    onAddTask(); // Call onAddTask without any arguments
    setShowAddTaskForm(true); // Set the state to true when Add Task is clicked
  };

  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <FontAwesomeIcon icon={faTasks} size="3x" />
      </div>
      {!showAddTaskForm && (
        <div className="sidebar-option" onClick={handleAddTask}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Add Task</span>
        </div>
      )}
      <div className="sidebar-option" onClick={onAddBoard}>
        <FontAwesomeIcon icon={faColumns} />
        <span>Add Board</span>
      </div>
      {!showAddTaskForm && ( // Render the Show Tasks option only if showAddTaskForm is false
        <div className="sidebar-option" onClick={handleShowTasks}>
          <FontAwesomeIcon icon={faColumns} />
          <span>Show Tasks</span>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
