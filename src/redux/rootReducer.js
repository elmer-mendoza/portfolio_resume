import {combineReducers} from 'redux';
import reviewReducer from './reviews/reviewReducer';



const rootReducer = combineReducers({
    reviews : reviewReducer
})

export default rootReducer;