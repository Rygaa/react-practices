import mongoose from 'mongoose';
const { model } = mongoose;


const Message = model('Message', {
    sender: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

export default Message