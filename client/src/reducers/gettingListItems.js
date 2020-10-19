export default function(state=null, action) {
    switch(action.type) {
        case 'GETTING_LIST_ITEMS':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}