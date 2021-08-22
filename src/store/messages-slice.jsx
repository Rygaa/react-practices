import { createSlice } from "@reduxjs/toolkit";

const initialMessagesState = {
    messages: [],
    username: 'Anonyme',
    room: '1'
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState: initialMessagesState,
    reducers: {
        add(state, {payload}) {
            state.messages = [...state.messages, { sender: payload.sender, message: payload.message}];
        },
        setUsername(state, {payload: username}) {
            state.username = username;
        },
        setRoom(state, { payload: room }) {
            state.room = room;
        }
    }

})

export const messagesActions = messagesSlice.actions
export default messagesSlice.reducer;
