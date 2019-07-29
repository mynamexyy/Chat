export const initListAction=(type,data)=>({
    type:type,
    data:data.data,
});

export default {
    
    getText:()=>{
        return dispatch=>{
            return axios.get('/api').then((res)=>{
                console.log(initListAction('getText',res))
                dispatch(initListAction('getText',res));
            })
        }
    }
}