import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';


const App = () => {
  return (
      <div className='container'>
        <h1>TODO list</h1>
        <AddTask />
        <TaskList />
      </div>
  );
};

export default App;
