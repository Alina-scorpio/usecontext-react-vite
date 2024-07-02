import React, { createContext, useState } from 'react';

export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (item) => {
    setTasks([...tasks, { id: tasks.length + 1, item }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
