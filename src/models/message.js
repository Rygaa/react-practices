const mongoose = require('mongoose')


const Message = mongoose.model('Message', {
    sender: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = Message
