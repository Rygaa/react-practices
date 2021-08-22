
import { socket } from '../App'

export const send = ({ sender, message, room }) => {
    return async (dispatch) => {
        socket.emit('send', sender, message, room)
    };
};

export const join = ({ username, room }) => {
    return async (dispatch) => {
        socket.emit('join', username, room)
    };
};


