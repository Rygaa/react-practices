const peers = new Array();

export const add = ({ id, socket }) => {
    peers.push({ id, socket })
}

export const remove = ({ id }) => {
    for (let i = 0; i < peers.length; i++) {
        if (peers[i].id === id) {
            peers.splice(i, 1);
        }
    }
}

export const getPeerById = ({ id }) => {
    for (let i = 0; i < peers.length; i++) {
        if (peers[i].id === id) {
            return peers[i];
        }
    }
}

export const broadcast = async (data) => {
    for (let i = 0; i < peers.length; i++) {
        peers[i].socket.emit('receive', data)
    }
}


 