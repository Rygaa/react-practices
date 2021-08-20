
import { userActions } from './user-slice';
import axios from 'axios'

export const signUp = ({username, password, type}) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await axios.post('http://localhost:3005/signUp', {
                username: username,
                password: password,
                type: type,
            })
     
            const data = response.data
            console.log(data);
        }
        await sendRequest();
    };
};

export const login = ({ username, password }) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await axios.post('http://localhost:3005/login', {
                username: username,
                password: password,
            })

            const data = response.data
            console.log(data);
            dispatch(userActions.setIdToken(data.idToken));
            dispatch(userActions.setIsConnected(true))
        }
        await sendRequest();


    };
};

export const isItAlreadyConnected = (idToken ) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await axios.post('http://localhost:3005/profile', {
                idToken: idToken,
            })

            const data = response.data
            console.log(data);
            if (data.password) {
                dispatch(userActions.setIsConnected(true))
            }
            dispatch(userActions.setProfile(data))

        }
        await sendRequest();
    }
}


export const getMyProfile = ({ username, password }) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await axios.post('http://localhost:3005/profile', {
                
            })

            const data = response.data
            console.log(data);
            dispatch(userActions.setIdToken(data.idToken));
            dispatch(userActions.setIsConnected(true))
        }
        await sendRequest();


    };
};