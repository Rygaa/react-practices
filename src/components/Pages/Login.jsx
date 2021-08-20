// import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/user-slice';
import {login} from '../../store/user-actions'
const Login = props => {
    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.username)
    const password = useSelector((state) => state.user.password)
    const connected = useSelector((state) => state.user.isConnected)


    
    const onChangeUsername = e => {
        dispatch(userActions.setUsername(e.target.value));
    }

    const onChangePassword = e => {
        dispatch(userActions.setPassword(e.target.value));
    }

    const onSubmitHandler = async e => {
        e.preventDefault();
        dispatch(login({username, password}));
    }

    return <form  onSubmit={onSubmitHandler} >
        {connected && <h1>Connected</h1>}
        {!connected && <h1>Disconnected</h1>}
        <label htmlFor="username">Username: </label>
        <input id="name" type="text" autoComplete="off" value={username} onChange={onChangeUsername} />
        <label htmlFor="password">Password: </label>
        <input id="password" type="text" autoComplete="off" value={password} onChange={onChangePassword} />
        <button>Connect</button>
    </form>
}

export default Login;