import('./src/database/mongoose.mjs');
import { createServer } from "http";
import { Server } from "socket.io";
import { add, remove, getPeerById, broadcast } from './src/Peers/Peers.mjs'
import { v4 as uuidv4 } from 'uuid';
import Room from './src/models/room.mjs';
import Message from "./src/models/message.mjs";
import mongoose from 'mongoose';
const { model } = mongoose;

const httpServer = createServer({
});

const io = new Server(httpServer, {
    cors: {
        origin: '*',
    }
});

io.on("connection", async (socket) => {
    await handshake(socket)

    socket.on('join', async (...data) => {
        await join({ socket, roomId: data[1] })
    })

    socket.on('joined', async (...data) => {
        await joinedSuccessfully({ socket, roomId: data[0] })
    })

    // Message received from Client
    socket.on('send', async (...data) => {
        await send({ socket, roomId: data[2], sender:data[0], message:data[1]})
    })

});

const send = async ({socket, roomId, sender, message}) => {
    const newMessage = new Message({ sender, message })
    await newMessage.save();
    const room = await Room.findOne({ id: roomId });
    room.messages.push(newMessage);
    await room.save();
    const args = {
        sender: newMessage.sender,
        message: newMessage.message,
    }
    await broadcast(args)
}
const join = async ({ socket, roomId}) => {
    const room = await Room.findOne({ id: roomId })
    if (room === null) {
        const room = new Room({ id: roomId })
        await room.save();
    }
    socket.emit('join-room', roomId)
}

const joinedSuccessfully = async ({socket, roomId }) => {
    const room = await Room.findOne({ id: roomId });
    for (let i = 0; i < room.messages.length; i++) {
        const message = await Message.findOne({ _id: room.messages[i] })
        const args = {
            sender: message.sender,
            message: message.message,
        }
        socket.emit('receive', args)
    }
}


const handshake = async (socket) => {
    const id = uuidv4()
    add({ id, socket })
    socket.emit('handshake', id)
}

httpServer.listen(3001);