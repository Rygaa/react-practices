const Message = require('../models/message');
const Room = require('../models/room')

const join = async ({ io, socket, roomId }) => {
    const room = await Room.findOne({id: roomId});
    if (room === null) {
        const newRoom = new Room({ id: roomId });
        newRoom.save();
        socket.join(roomId);
        socket.emit('joined');
        await sendMessage(socket, newRoom)

    } else {
        socket.join(roomId);
        socket.emit('joined');
        await sendMessage(socket, room)
    }

}

const sendMessage = async (socket, room) => {
    if (room.messages == undefined) {
        return;
    } else if ( room.messages.length < 6) {
        for (let i = 0; i < room.messages.length; i++) {
            const _id = room.messages[i];
            const message = await Message.findById(_id);
            socket.emit('message-received-from-server', {
                sender: message.sender,
                message: message.message
            })
        }
    } else {
        for (let i = 0; i < 6; i++) {
            const _id = room.messages[room.messages.length - 6 + i];
            const message = await Message.findById(_id);
            socket.emit('message-received-from-server', {
                sender: message.sender,
                message: message.message
            })
        }
    }

}

module.exports = join;