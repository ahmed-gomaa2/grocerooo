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

export const addedToList = info => dispatch => {
    dispatch({
        type: 'GETTING_ITEM_INFO',
        payload: info
    })
}

export const addingList = list => async dispatch =>  {
    console.log(list)
    const res = await axios.post('/api/add/list', list)

    dispatch({
        type:'ADDING_SHOPPING_LIST',
        payload: list
    })
}


export const gettingUserLists = () => async dispatch => {
    const res = await axios.get('/api/user/lists')

    dispatch({
        type:'GETTING_LISTS',
        payload:res.data
    })
}

export const gettingListItems = items => dispatch => {
    dispatch({
        type: 'GETTING_LIST_ITEMS',
        payload: items
    })
}