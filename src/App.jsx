import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';


const App = () => {
  return (
    <TaskProvider>
      <div className='container'>
        <h1>TODO list</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
