import {
    FETCH_REVIEWDATA_REQUEST,
    FETCH_REVIEWDATA_SUCCESS,
    FETCH_REVIEWDATA_FAIL,
} from './reviewActionTypes'




export const fetchReviewDataRequest = () => {
    return {
        type: FETCH_REVIEWDATA_REQUEST
    }
}