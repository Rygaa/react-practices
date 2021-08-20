// import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/user-slice';
import {signUp} from '../../store/user-actions'
const SignUp = props => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.username)
    const password = useSelector((state) => state.user.password)
    const type = useSelector((state) => state.user.type)

    const onChangeUsername = e => {
        dispatch(userActions.setUsername(e.target.value));
    }

    const onChangePassword = e => {
        dispatch(userActions.setPassword(e.target.value));
    }

    const onChangeType = e => {
        dispatch(userActions.setType(e.target.value));
    }

    const onSubmitHandler = async e => {
        e.preventDefault();
        dispatch(signUp({username, password, type}))
        
    }

    return <form  onSubmit={onSubmitHandler} >
        <label htmlFor="username">Username: </label>
        <input id="name" type="text" autoComplete="off" value={username} onChange={onChangeUsername}/>
        <label htmlFor="password">Password: </label>
        <input id="password" type="text" autoComplete="off" value={password} onChange={onChangePassword}/>
        <label htmlFor="type">Type: </label>
        <input id="type" type="text" autoComplete="off" value={type} onChange={onChangeType} />
        <button>Sign</button>
    </form>
}

export default SignUp;