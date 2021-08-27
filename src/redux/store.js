import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reviewReducer from './reviewReducers'


const store =createStore(reviewReducer,applyMiddleware(thunk));


export default store;