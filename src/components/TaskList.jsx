import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  return (
    <div className='tasks'>
      <h2>My Tasks</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
