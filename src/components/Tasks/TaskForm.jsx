import { useState } from 'react';
import classes from './TaskForm.module.css'
const TaskForm = (props) => {
    const [brandInputted, setBrandInputted] = useState('')
    const [modelInputted, setModelInputted] = useState('')
    const [amountInputted, setAmountInputted] = useState('')

    const addTextSubmit = (event) => {
        event.preventDefault();
        props.addTask({
            brand: brandInputted,
            model: modelInputted,
            amount: amountInputted,
            id: Math.random()
        })
    }
  
    const nameChangeHandler = (event) => {
        setBrandInputted(event.target.value)
    }
    const descriptionChangeHandler = (event) => {
        setModelInputted(event.target.value)

    }
    const amountChangeHandler = (event) => {
        setAmountInputted(event.target.value)
    }

    return <form onSubmit={addTextSubmit} className={classes.form}>
        <label htmlFor="name">Brand</label>
        <input id='name' type="text" onChange={nameChangeHandler} autoComplete="off" /><br />
        <label htmlFor="description">Model</label>
        <input id='description' type="text" onChange={descriptionChangeHandler} autoComplete="off"/><br />
        <label htmlFor="amount">Amount</label>
        <input id='amount' type="text" onChange={amountChangeHandler} autoComplete="off"/><br />
        <button>Add Task</button>
    </form>
};

export default TaskForm;