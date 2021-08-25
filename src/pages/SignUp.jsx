import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-slice";
import { signUp } from "../store/user-actions";
const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(signUp({username, password}))
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    
    return <form onSubmit={onSubmitHandler}>
        <label htmlFor='username'>username</label>
        <input name='username' value={username} onChange={onChangeUsername}/>
        <label htmlFor='password' >password</label>
        <input name='password' value={password} onChange={onChangePassword} />
        <button>Submit</button>
    </form>
}

export default SignUp;