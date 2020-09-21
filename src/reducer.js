export const initialState={
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
};

export const actionTypes={
    SET_USER: "SET_USER",
    LOG_OUT: "LOG_OUT"
}

const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case actionTypes.SET_USER: 
            localStorage.setItem('user',JSON.stringify(action.user))
            return{
                ...state,
                user:action.user
            }
        case actionTypes.LOG_OUT:
            localStorage.clear();
            return{
                ...state,
                user:null
            }
        default: return state
    }
}

export default reducer;