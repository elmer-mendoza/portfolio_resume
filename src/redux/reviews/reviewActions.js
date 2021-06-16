import axios from 'axios';
import {
    FETCH_REVIEWDATA_REQUEST,
    FETCH_REVIEWDATA_SUCCESS,
    FETCH_REVIEWDATA_FAILURE
} from './reviewTypes';


 


export const fetchReview =() =>{
    console.log('hi1')
    return async (dispatch)=>{
            console.log('hi2')
        
        dispatch(fetchReviewDataRequest());
               
        await axios
        .get('http://localhost:5001/api/items')
        .then(response => {
            const reviews = response.data
            dispatch(fetchReviewDataSuccess(reviews))
            console.log(reviews)  
        })
        .catch(error =>{
            dispatch(fetchReviewDataFailure(error.message))
        })
    }
    }
 
 
 
 


export const fetchReviewDataRequest = () =>{
    return {
        type: FETCH_REVIEWDATA_REQUEST
    }
}


export const fetchReviewDataSuccess = reviews =>{
    return {
        type: FETCH_REVIEWDATA_SUCCESS,
        payload: reviews
    }
}


export const fetchReviewDataFailure = error =>{
    return {
        type: FETCH_REVIEWDATA_FAILURE,
        payload : error
    }
}

