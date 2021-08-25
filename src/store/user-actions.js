import axios from "axios"
import { useDispatch } from "react-redux"
import { userActions } from "./user-slice"
import { socket } from '../App'

export const signUp = ({username, password}) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3005/signUp', {
            username,
            password,
        })
        const data = response.data
    }
}

export const login = ({ username, password }) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3005/login', {
            username,
            password,
        })
        const data = response.data
        if (data.error) {
            return;
        } 
        dispatch(userActions.setToken(data.idToken));
        dispatch(userActions.setIsConnected(true));
        localStorage.setItem('idToken', data.idToken)

    }
}

export const checkIdToken = ({ idToken }) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3005/checkIdToken', {
            idToken,
        })

        const data = response.data
        if (data.error) {
            console.log(data.error);
            dispatch(userActions.setIsConnected(false));

            return;
        }
        const username = data.username
        dispatch(userActions.setIsConnected(true));
        dispatch(userActions.setUsername(username));

    }
}

export const join = ({ idToken, roomId }) => {
    return async (dispatch) => {
        socket.emit('join', {idToken, roomId})
    };
}

export const send = ({ roomId, sender, message }) => {
    return async (dispatch) => {
        socket.emit('message-received-from-client', { roomId, sender, message })
    }
}