import React, { useState } from 'react';
import TaskForm from './components/Tasks/TaskForm';
import Header from './components/Layout/Header'
import Task from './components/Tasks/Task';
import Modal from './components/UI/Modal';

function App() {

  const [tasks, setTasks] = useState([]);
  const [isMessageBoxShown, setMessageBoxShown] = useState(false);
  const [messageShown, setMessageShown] = useState('');

  const addTask = task => { setTasks(tasks.concat(task)) }
  const removeTask = id => { setTasks(tasks.filter(task => task.id !== id)) }
  const hideMessage = event => { setMessageBoxShown(false) }

  const tasksList = tasks.map(task => (
    <Task 
      key={Math.random()}
      id={task.id}
      brand={task.brand}
      model={task.model}
      amount={task.amount} 
      removeTask={removeTask}
      setMessageBoxShown={setMessageBoxShown}
      setMessageShown={setMessageShown}
    />
  ))


  return (
    <div>
      <Header />
      <TaskForm 
        addTask={addTask} 
        setMessageBoxShown={setMessageBoxShown}
        setMessageShown={setMessageShown}
       />
      {tasksList}

      {
        isMessageBoxShown &&
        <Modal setMessageBoxShown={setMessageBoxShown} >
          <p>{messageShown}</p>
          <button onClick={hideMessage}>Ok</button>
        </Modal>
      }
    </div>
  );
}

export default App;
