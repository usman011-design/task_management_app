import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import TaskList from '../../components/TaskList/TaskList';

const ListPage = () => {
  const [tasks, setTasks] = useState([]);

  const markAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const markAsIncomplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: false } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          markAsCompleted={markAsCompleted}
          markAsIncomplete={markAsIncomplete}
          deleteTask={deleteTask}
        />
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

ListPage.propTypes = {
  tasks: PropTypes.array.isRequired,
  markAsCompleted: PropTypes.func.isRequired,
  markAsIncomplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default ListPage;
