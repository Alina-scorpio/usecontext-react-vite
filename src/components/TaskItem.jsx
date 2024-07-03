import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../store/taskSlice';

const TaskItem = ({ task }) => {

  const dispatch = useDispatch();
  return (
    <li>
      {task.item}
      <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
    </li>
  );
};

export default TaskItem;
