import {createStore} from 'redux';
import reviewReducer from './reviews/reviewReducers'

const store =createStore(reviewReducer);



export default store;