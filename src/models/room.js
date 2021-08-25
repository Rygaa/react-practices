const mongoose = require('mongoose')

const Room = mongoose.model('Room', {
    id: {
        type: String,
        required: true
    },
    messages: [
        {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Message',
            // required: true
        }

    ]
})

module.exports = Room
