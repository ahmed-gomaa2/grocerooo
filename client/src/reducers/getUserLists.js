export default function(state=null, action) {
    switch(action.type) {
        case 'GETTING_LISTS':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}