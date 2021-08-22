import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from './messages-slice'

const store = configureStore({
    reducer: { messages: messagesReducer },
})

export default store