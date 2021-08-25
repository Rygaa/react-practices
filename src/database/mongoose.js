const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Chat-App', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})