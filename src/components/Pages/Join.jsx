import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { join } from '../../store/messages-actions';
import { socket } from '../../App'
import { Redirect, useHistory } from "react-router-dom";
import { messagesActions } from "../../store/messages-slice";


const Join = props => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.messages.username)
    const room = useSelector((state) => state.messages.room)

    const history = useHistory();
    const onChangeUsername = (e) => {
        dispatch(messagesActions.setUsername(e.target.value));
    }
    const onChangeRoom = (e) => {
        dispatch(messagesActions.setRoom(e.target.value));
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(join({username, room}))
        dispatch(messagesActions.setUsername(username));
    }
    useEffect(()=> {
        socket.on('join-room', data => {
            console.log(data);

            dispatch(messagesActions.setRoom(data));
            history.replace('room')
        })
    }, [])
 

    return <form onSubmit={onSubmitHandler}>
        <label htmlFor="username"> username </label>
        <input name="username" value={username} onChange={onChangeUsername}></input>
        <label htmlFor="room"> Room </label>
        <input name="room" value={room} onChange={onChangeRoom}></input>
        <button> Join </button>
    </form>
}

export default Join