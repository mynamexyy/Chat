var initState = {
    msg:[]
}
export default (state=initState,action)=>{
    //console.log('getMsg',action);
    switch (action.type) {
        case 'getMsg':
            //console.log(JSON.parse(action.data.msg))
            return {
                msg: JSON.parse(action.data.msg)
            }
        case 'setInfo':
            return action.data
        default:
            return state
    }
}