// TaskList.js
import './TaskList.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskList({ tasks, markAsCompleted, markAsIncomplete, deleteTask, updateTask }) {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTasks = tasks.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <ul>
        {currentTasks.map((task) => (
          <li key={task.id}>
            <div>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
            </div>
            <div>
              {task.completed ? (
                <button onClick={() => markAsIncomplete(task.id)}>
                  Mark as Incomplete
                </button>
              ) : (
                <button onClick={() => markAsCompleted(task.id)}>
                  Mark as Completed
                </button>
              )}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <button
                onClick={() => {
                  const updatedTask = prompt('Enter updated task description:');
                  if (updatedTask !== null && updatedTask !== undefined) {
                    updateTask(task.id, { description: updatedTask });
                  }
                }}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  markAsCompleted: PropTypes.func.isRequired,
  markAsIncomplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired, // Add the updateTask prop type
};

export default TaskList;
