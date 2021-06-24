import {
    FETCH_REVIEWDATA_REQUEST,
    FETCH_REVIEWDATA_SUCCESS,
    FETCH_REVIEWDATA_FAIL,
} from './reviewActionTypes'


const initState = {
    reviews:['hi']
}

const reviewReducers =(state=initState,action) =>{
    console.log(action)
    switch(action.type){
        case FETCH_REVIEWDATA_REQUEST :
            return {
                reviews:['hello']
            }
    
        default: return {
            reviews:['success']
        }
}
}

export default reviewReducers
