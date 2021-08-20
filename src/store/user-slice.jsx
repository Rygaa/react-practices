import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { 
    username : '', 
    password: '',
    type: '',
    isConnected: false,
    profile: {
        
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialCounterState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: true
    }),
    reducers: {
        setUsername(state, { payload: username }) {
            state.username = username;
        },
        setPassword(state, { payload: password }) {
            state.password = password;
        },
        setType(state, { payload: type }) {
            state.type = type;
        },
        setIdToken(state, { payload: idToken }) {
            localStorage.setItem('token', idToken)
        },
        setIsConnected(state, { payload: status }) {
            state.isConnected = status;
        },
        setProfile(state, {payload: profile}) {
            state.profile = profile;
        }
        

    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;