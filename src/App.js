import React, { useState } from 'react';
import TaskForm from './components/Tasks/TaskForm';
import Header from './components/Layout/Header'
import Task from './components/Tasks/Task';
function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => { setTasks(tasks.concat(task)) }
  const removeTask = id => { 
    setTasks(tasks.filter(task => task.id !== id))
  }
  
  const tasksList = tasks.map(task => (
    <Task 
      key={Math.random()}
      id={task.id}
      brand={task.brand}
      model={task.model}
      amount={task.amount} 
      removeTask={removeTask}
    />
  ))

  return (
    <div>
      <Header>fsfs</Header>
      <TaskForm addTask={addTask} />
    
      {tasksList}
    </div>
  );
}

export default App;
