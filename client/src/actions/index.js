import axios from 'axios'

export const createUser = info => async dispatch => {
    const res = await axios.post('/api/register', info)

    dispatch({
        type: 'GETTING_USER',
        payload: res.data
    })
}

export const loginUser = info => async dispatch => {
    const res = await axios.post('/api/login',info)

    dispatch({
        type: 'LOGIN_USER',
        payload: res.data
    })
}

export const LogoutUser = () => async dispatch => {
    const res = await axios.get('/api/logout')

    dispatch({
        type:'LOGOUT_USER',
        payload: res.data
    })
}