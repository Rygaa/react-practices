import React, {  } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import Join from './components/Pages/Join';
import Room from './components/Pages/Room';
import { send } from './store/messages-actions';
export const socket = socketIOClient('ws://localhost:3001');

function App() {

  socket.emit('connection', 0)
  socket.on('handshake', (id) => {
    localStorage.setItem('id', id);
  })
  
  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });


  return (
    <Switch>
      <Route path='/join'>
        <h1>Chat Room</h1>
        <Join></Join>
      </Route>
      <Route path='/room'>
        <h1>Chat Room</h1>
        <Room></Room>
      </Route>
      <Route path='*' exact>
        <Redirect to='/join'></Redirect>
      </Route>
    </Switch>
  );
}

export default App;
