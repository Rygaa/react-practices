import React from 'react';
import Header from './components/Layout/Header';
import SignUp from './components/Pages/SignUp';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Pages/Login';
import Profile from './components/Pages/Profile';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { isItAlreadyConnected } from './store/user-actions'
function App() {
  const dispatch = useDispatch();

  const isConnected = useSelector((state) => state.user.isConnected)
  const idToken = localStorage.getItem('token')
  useEffect(() => {
    dispatch(isItAlreadyConnected(idToken))
  }, [dispatch, idToken])
  return (
    <div>
      <Header></Header>

    <Switch>
      <Route path='/' exact>
      </Route>
      {!isConnected &&
        <Route path='/SignUp' exact>
          <SignUp></SignUp>
        </Route>
      }
      {!isConnected &&
        <Route path='/Login' exact>
          <Login />
        </Route>
      }

      {
        !!isConnected &&
          <Route path='/Profile' exact>
            <Profile></Profile>
          </Route>
      }
        <Route path='*' exact>
            <Redirect to='/'></Redirect>
        </Route>
      <Route path='/Login:id' exact>
          <Login />
      </Route>
    </Switch>

    </div>
  );
}

export default App;
