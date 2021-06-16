export const FETCH_REVIEWDATA_REQUEST = 'FETCH_REVIEWDATA_REQUEST'
export const FETCH_REVIEWDATA_SUCCESS = 'FETCH_REVIEWDATA_SUCCESS'
export const FETCH_REVIEWDATA_FAILURE = 'FETCH_REVIEWDATA_FAILURE'

const initialState = {
    loading : false,
    reviews: [],
    error: ""
};

const reviewReducer = (state =initialState,action) =>{
    switch (action.type) {
        case FETCH_REVIEWDATA_REQUEST :
            return {
                ...state,
                loading: true
            }
        case FETCH_REVIEWDATA_SUCCESS:
            return {
                loading : false,
                reviews:action.payload,
                error: ""
            }
        case FETCH_REVIEWDATA_FAILURE :
            return {
                loading : false,
                reviews: [],
                error: action.payload
            }
        default : return state
    }
}

export default reviewReducer