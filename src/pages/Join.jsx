import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { join, login } from "../store/user-actions"
import { userActions } from "../store/user-slice"

const Join = () => {
    
    const roomId = useSelector((state) => state.user.roomId)
    const idToken = useSelector((state) => state.user.idToken)
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(join({ idToken, roomId }))
    }

    const onChangeRoom = (e) => {
        dispatch(userActions.setRoomId(e.target.value))
    }

    return <form onSubmit={onSubmitHandler}>
        <label htmlFor='room'>room</label>
        <input name='room' value={roomId} onChange={onChangeRoom}></input>
        <button>Join</button>
    </form>
}

export default Join;