import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { send } from '../../store/messages-actions';
import { socket } from '../../App'
import { messagesActions } from '../../store/messages-slice'

const Room = props => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const sender = useSelector((state) => state.messages.username)
    const messagesP = useSelector((state) => state.messages.messages)
    const room = useSelector((state) => state.messages.room)
    let messages = ''
    for (let i = 0; i < messagesP.length; i++) {
        messages += messagesP[i].sender + ': ' + messagesP[i].message + '\n'
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(send({ sender, message: inputRef.current.value, room }))
    }
    useEffect(() => {
        console.log(room);
        socket.emit('joined', room )
        socket.on('receive', (...data) => {
            const message = data[0].message;
            const sender = data[0].sender;

            dispatch(messagesActions.add({message: message, sender: sender }))
        })
    }, [dispatch, room])


    return <form onSubmit={onSubmitHandler}>
        <h1>{sender}</h1>

        <textarea readOnly rows={20} cols="100" value={messages} />
        <input ref={inputRef}></input>
        <button> Send </button>
    </form>
}

export default Room