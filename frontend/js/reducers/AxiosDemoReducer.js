export default (state = {}, action)=>{
    switch (action.type) {
        case 'getText':
            return {data:action.data}
        default:
            return state
    }
}