export default function(state= null, action) {
    switch(action.type) {
        case 'GETTING_ITEM_INFO':
            return action.payload
        default:
            return state
    }
}