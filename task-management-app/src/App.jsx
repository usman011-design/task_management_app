// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/SideBar/SideBar';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import { SignIn } from './pages/SignIn/SignIn';
import './App.css';

function App() {
  const [user, setUser] = useState(null); // Track user authentication status
  const [tasks, setTasks] = useState([]);
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [showTasks, setShowTasks] = useState(false);

  useEffect(() => {
    if (user) {
      // Fetch tasks only if the user is authenticated
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          setTasks(response.data);
        })
        .catch((error) => {
          console.error('Error fetching tasks:', error);
        });
    }
  }, [user]);

  const addTask = (newTask) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
      .then((response) => {
        setTasks([...tasks, response.data]);
      })
      .catch((error) => {
        console.error('Error adding task:', error);
      });
  };

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  const handleShowTasks = () => {
    setShowTasks(true);
  };

  const handleSignIn = () => {
    // Mock user authentication (replace with your actual authentication logic)
    setUser({ useremail: 'user@gmail.com',password:'password1' });
  };

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

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={`app ${isSidebarVisible && 'sidebar-visible'}`}>
      {user ? (
        <>
          <button className="menu-button" onClick={toggleSidebar}>
            &#9776;
          </button>
          <Sidebar
            onAddTask={addTask}
            onAddBoard={() => console.log('Adding Board...')}
            onShowTasks={handleShowTasks}
          />
          <div className="main-content">
            <h1>Task Management System</h1>
            {!showTasks && (
              <TaskForm addTask={addTask} />
            )}
            {showTasks && (
              <TaskList
                tasks={tasks}
                markAsCompleted={markAsCompleted}
                markAsIncomplete={markAsIncomplete}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )}
          </div>
        </>
      ) : ( 
        <SignIn onSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default App;
