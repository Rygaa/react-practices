require('./database/mongoose')

const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())
const router = new express.Router();
const server = app.listen(3005);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
    }
    );
const signUpRouter = require('./routers/signUp')
const loginRouter = require('./routers/login')
const checkIdTokenRouter = require('./routers/checkIdToken')
const auth = require('./middleware/auth')
const join = require('./routers/join');
const send = require('./routers/send');
io.sockets.on('connection', (socket) => {
    console.log('Connection');
    socket.emit('connected', socket.id)

    socket.on('join', async ({idToken, roomId}) => {
        await join({io, socket, roomId})
    });

    socket.on('message-received-from-client', async(data) => {
        const roomId = data.roomId
        const sender = data.sender
        const message = data.message
        console.log(data);
        await send({io, socket, roomId, sender, message})
    })

    socket.on('disconnect', () => {
        console.log('disconnect');
    });

});


app.use(express.json())

app.use(router)
app.use(signUpRouter)
app.use(loginRouter)
app.use(checkIdTokenRouter)


