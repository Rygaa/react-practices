import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/user-actions"
import { userActions } from "../store/user-slice"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(login({ username, password }))
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return <form onSubmit={onSubmitHandler}>
        <label htmlFor='username'>username</label>
        <input name='username' value={username} onChange={onChangeUsername}></input>
        <label htmlFor='password'>password</label>
        <input name='password' value={password} onChange={onChangePassword}></input>
        <button>Login</button>
    </form>
}

export default Login;