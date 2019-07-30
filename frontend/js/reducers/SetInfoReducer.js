export default (state = {data:{}}, action)=>{
    switch (action.type) {
        case 'setInfo':
            return action.data
        default:
            return state
    }
}