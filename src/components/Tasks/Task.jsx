import { useState } from 'react';
import classes from './Task.module.css'
import Modal from '../UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../../store/counter';

const Task = (props) => {
    const dispatch = useDispatch();

    const RemoveButtonClicked = (event) => {
        props.setMessageBoxShown(true)
        props.removeTask(props.id)
        props.setMessageShown('GPU removed!!!')
        dispatch(counterActions.decrement());

    }
    return <div className={classes.info}>
        <h1>Brand: {props.brand}</h1>
        <h1>Model: {props.model}</h1>
        <h1>Amount: {props.amount}</h1>
        <button onClick={RemoveButtonClicked}> Remove </button>
    
    </div>
        


};

export default Task;