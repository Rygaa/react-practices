import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const Room = model('Room', {
    id: {
        type: String,
        required: true
    },  
    messages: [
        {
            type: [Schema.Types.ObjectId],
            ref: 'Message',
            // required: true
        }

    ]
})

export default Room
