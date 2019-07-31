export default (state = {data:{}}, action)=>{
    //var newstate = Object.assign({},state,action.data) //更新state方法1
    var newstate = {...state,...action.data}//更新state方法2
    switch (action.type) {
        case 'setInfo':
            return newstate
        default:
            return state
    }
}