import { Fragment, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Header from "./Layout/Header"
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Room from "./pages/Room";
import { useDispatch, useSelector } from "react-redux";
import { checkIdToken } from "./store/user-actions";
import Join from "./pages/Join";
import { userActions } from "./store/user-slice";
import socketIOClient from "socket.io-client";
export const socket = socketIOClient('ws://localhost:3005');

function App() {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.user.isConnected);
  const messages = useSelector((state) => state.user.messages);
  const idToken = localStorage.getItem('idToken')
  const history = useHistory();

  useEffect(() => {
    socket.emit('connection', 0)
    socket.on('connected', (socketId) => {
      dispatch(userActions.setSocketId(socketId));
    })
    
    socket.on('joined', (socketId) => {
      dispatch(userActions.setInRoom(true));
      dispatch(userActions.cleanMessages())
      history.push('/Room')
    })
  }, [])
  useEffect(() => {
    
    if (idToken) {
      dispatch(userActions.setToken(idToken));
      dispatch(checkIdToken({ idToken }))
    } else {
      dispatch(userActions.setIsConnected(false));
    }
    socket.emit('connection', 0)

 
  }, [dispatch, idToken, isConnected])

  if (isConnected === null) {
    return <h1>Loading</h1>
  }

  return (
    <Header>

    <Switch>
      <Route path='/' exact>
        <Welcome />
      </Route>

      <Route path='/SignUp' exact>
          {!!isConnected && <Redirect to='/Join'></Redirect>}
          {!isConnected && <SignUp />}
      </Route>

      <Route path='/Login' exact>
          {!!isConnected && <Redirect to='/Join'></Redirect>}
          {!isConnected && <Login />}
      </Route>

      <Route path='/Join' exact >
      {!!isConnected && 
        <Fragment>
          <Join />
        </Fragment>
      }
      {!isConnected &&
        <Fragment>
          <Redirect to='/'></Redirect>
        </Fragment>
      }
 
      </Route>
      <Route path='/Room' exact>
        <Room></Room>
      </Route>
    </Switch>
    </Header>
  );
}

export default App;
