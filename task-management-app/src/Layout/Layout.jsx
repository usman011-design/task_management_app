import React from 'react';
import Sidebar from '../components/SideBar/SideBar';
import TaskForm from '../components/TaskForm/TaskForm'
import TaskList from '../components/TaskList/TaskList'

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Layout;