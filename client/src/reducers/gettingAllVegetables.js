export default function(state=null, action) {
    switch(action.type) {
        case 'GETTING_ALL_VEGETABLES':
            console.log(action.payload)
            return action.payload

        default:
            return state
    }
}