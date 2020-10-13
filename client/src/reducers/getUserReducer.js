export default function (state=null, action) {
    switch (action.type) {
        case 'GETTING_USER':
            console.log(action.payload)
            return action.payload
        case'LOGIN_USER':
            console.log(action.payload)
            return action.payload
        case 'LOGOUT_USER':
            console.log({user: action.payload})
            return action.payload
        default:
            return state
    }
}