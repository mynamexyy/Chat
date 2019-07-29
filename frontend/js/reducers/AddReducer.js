var initState = {
    count:0
}
export default (state=initState,action)=>{
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 2 }
        case 'reduce':
            return { count: count - 2 }
        default:
            return state
    }
}