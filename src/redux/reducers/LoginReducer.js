
const loginReducer = (state = false, action) => {
    switch(action){
        case 'LOGGED_IN' :
            return !state 
           default :
            return state 
    }
};

export default loginReducer;