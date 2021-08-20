// import { Fragment, useEffect } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isItAlreadyConnected } from '../../store/user-actions'

const Profile = props => {
    const dispatch = useDispatch();
    const idToken = localStorage.getItem('token')
    
    useEffect(() => {
        dispatch(isItAlreadyConnected(idToken))
    }, [dispatch, idToken])
   
    const data = useSelector((state) => state.user.profile)
    return <div>
        <h1>Profile</h1>
        <h1>{JSON.stringify(data)}</h1>
    </div>
}

export default Profile;