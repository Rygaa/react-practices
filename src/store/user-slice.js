import { createSlice } from "@reduxjs/toolkit";
import { reduce } from "bluebird";

const initialState = {
    username: '',
    idToken: '',
    isConnected: null,
    socketId: '',
    roomId: '',
    inRoom: false,
    messages: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, { payload: username }) => {
            state.username = username;
        },
        setIsConnected: (state, { payload: status }) => {
            state.isConnected = status;
        },
        setToken: (state, {payload: idToken}) => {
            state.idToken = idToken;
            localStorage.setItem('idToken', idToken)
        },
        setSocketId: (state, { payload: socketId }) => {
            state.socketId = socketId;
        },
        setInRoom: (state, { payload: status }) => {
            state.status = status;
        },
        addMessage: (state, { payload }) => {
            state.messages = [...state.messages, { sender: payload.sender, message: payload.message }];

        },
        setRoomId: (state, {payload: roomId}) => {
            state.roomId = roomId;
        },
        cleanMessages: (state, { payload: roomId }) => {
            state.messages = [];
        }
    
        

    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;