import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const [item, setItem] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(item);
    setItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
        placeholder="Enter task"
      />
      <button type="submit" className='btn-add'>Add</button>
    </form>
  );
};

export default AddTask;
