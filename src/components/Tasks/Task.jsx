import { useState } from 'react';
import classes from './Task.module.css'
const Task = (props) => {
    
    const onRemoveHandle = () => {
        props.removeTask(props.id)
    }
    return <div className={classes.info}>
        <h1>Brand: {props.brand}</h1>
        <h1>Model: {props.model}</h1>
        <h1>Amount: {props.amount}</h1>
        <button onClick={onRemoveHandle}> Remove </button>
    </div>
        


};

export default Task;