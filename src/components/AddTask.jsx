import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

const AddTask = () => {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(item));
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
