import axios from 'axios'
//actionCreator.js
const initListAction=(type,data)=>({
    type:type,
    data:data.data,
});

export default {
    setPortrait:()=>{
        return dispatch=>{
            return axios.post('/api/setportrait').then((res)=>{
                dispatch(initListAction('setportrait',res));
            })
        }
    }
}