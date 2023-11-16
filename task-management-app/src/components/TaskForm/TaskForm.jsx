import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskForm.css';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      title,
      description,
      completed: false,
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setShowSnackbar(true);

    // Hide the snackbar after a delay (e.g., 3 seconds)
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form form-group">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button className="submit-button" type="submit">
          Add Task
        </button>
      </form>

      {showSnackbar && (
        <div className="snackbar">Task has been added!</div>
      )}
    </div>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
