import login from "../pages/user/login";

export default {
    namespace:"user",
    state:{
        currentUser:""
    },
    reducers:{
        logout(state){
            return{
               ...state,
               currentUser:null
            }
        },
        login(state,{payload}){
            return{
                ...state,
                currentUser:payload.userName
             }
        }
    }
}