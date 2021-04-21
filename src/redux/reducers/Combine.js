import movieReducer from './MovieReducer'
import loginReducer from './LoginReducer'
import { combineReducers } from 'redux';



const allReducers = combineReducers (
    {
     movie : movieReducer,
     login : loginReducer
        }
)
export default allReducers; 