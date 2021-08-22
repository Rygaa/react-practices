import mongoose from 'mongoose';
const { connect } = mongoose;

connect('mongodb://localhost:27017/Chat-Room', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})