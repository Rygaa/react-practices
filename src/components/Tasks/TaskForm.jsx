import { useState, forwardRef } from 'react';
import classes from './TaskForm.module.css'
import Modal from '../UI/Modal';
const TaskForm = forwardRef((props, ref) => {
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

    const showMessage = event => {
        props.setMessageBoxShown(true)
        props.setMessageShown('GPU added !!!!')
    }

    return <div>
        <form onSubmit={addTextSubmit} className={classes.form}>
            <label htmlFor="name">Brand</label>
            <input id='name' type="text" onChange={nameChangeHandler} autoComplete="off" /><br />
            <label htmlFor="description">Model</label>
            <input id='description' type="text" onChange={descriptionChangeHandler} autoComplete="off"/><br />
            <label htmlFor="amount">Amount</label>
            <input id='amount' type="text" onChange={amountChangeHandler} autoComplete="off"/><br />
            <button onClick={showMessage}> Add Task </button>
        </form>

     
        
        </div>
});

export default TaskForm;