const Message = require('../models/message');
const Room = require('../models/room')

const send = async ({ io, socket, roomId, sender, message }) => {
    const newMessage = new Message({ message, sender })
    await newMessage.save();

    const room = await Room.findOne({ id: roomId });
    room.messages = room.messages.concat(newMessage);
    await room.save();

    io.to(roomId).emit('message-received-from-server', {sender, message})
}

module.exports = send;