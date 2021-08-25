import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { send } from "../store/user-actions"
import { userActions } from "../store/user-slice"
import {socket} from '../App'
const Room = () => {
    const roomId = useSelector((state) => state.user.roomId)
    const username = useSelector((state) => state.user.username)
    const messages = useSelector((state) => state.user.messages)
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    let messagesDisplayed = ''
    for (let i = 0; i < messages.length; i++) {
        messagesDisplayed += messages[i].sender + ': ' + messages[i].message + '\n'
    }

    useEffect(() => {
        console.log(1);
        socket.off('message-received-from-server')
        socket.on('message-received-from-server', (data) => {
            console.log(data);
            dispatch(userActions.addMessage(data))
        })
    }, [])


    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(send({roomId, sender: username, message}))
    }

    const onChangeRoom = (e) => {
        setMessage(e.target.value)
    }

    return <form onSubmit={onSubmitHandler}>
        <textarea readOnly rows={20} cols="100" value={messagesDisplayed} />
        <label htmlFor='message'>message</label>
        <input name='message' value={message} onChange={onChangeRoom}></input>
        <button>Send</button>
    </form>
}

export default Room;