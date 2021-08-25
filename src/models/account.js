const mongoose = require('mongoose')

const Account = mongoose.model('Account', {
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    idTokens: [{
        type: String,
        required: false,
    }]
    

})

module.exports = Account