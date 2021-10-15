import * as ActionTypes from './ActionTypes';

export  const fetchReviews=()=>async(dispatch) => {
        // const REVIEWDATA_URL=process.env.REACT_APP_REVIEWDATA_URL;
        // const response= await fetch(process.env.REACT_APP_REVIEWDATA_URL);
       const response= await fetch("https://poc-express-api-heroku.herokuapp.com/api/reviews");
    //    const response= await fetch("http://localhost:5001/api/reviews");
        const fetchedreviews = await response.json();
        const sortedReviewsByDate=fetchedreviews.sort((a,b)=> a.date>b.date ? -1:1);
        dispatch(addReviews(sortedReviewsByDate));
  }
 export const addReviews = (reviews)=>({
        type: ActionTypes.FETCH_REVIEWDATA_REQUEST,
        payload:reviews
    })


export const fetchData = () => dispatch => {
     dispatch(dataLoading());
    //   const MAINDATA_URL=process.env.REACT_APP_MAINDATA_URL;
    return fetch("https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/resume-dmeca/service/Resume/incoming_webhook/resume")
    .then(response => {
         if (response.ok) {
            return response;
        } else {
            console.log(response)
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
    }
)
.then(response => response.json())
.then(data => dispatch(loadingSuccess(data)))
.catch(error => dispatch(dataLoadingFailed(error.message)));
};

export const dataLoading = () => ({
    type: ActionTypes.FETCH_DATA_REQUEST
});

export const dataLoadingFailed = errMess => ({
    type: ActionTypes.FETCH_DATA_FAIL,
    payload: errMess
});

export const loadingSuccess = data => ({
    type: ActionTypes.FETCH_DATA_SUCCESS,
    payload: data
});