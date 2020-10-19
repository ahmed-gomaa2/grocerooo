export default function(state=null, action) {
    switch(action.type) {
        case 'CREATE_VEGETABLE':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}