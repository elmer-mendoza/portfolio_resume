import * as ActionTypes from './reviewActionTypes'


// export const addTodo = (todo) => (dispatch) => {
//     const newTodo = {
//     activity: todo,
//     complete: false,
//   }
//   dispatch(createTask(newTodo))
// }

export  const fetchReviews=()=>async(dispatch) => {
       
        const response= await fetch('http://localhost:5001/api/items');
        const fetchedreviews = await response.json();
        const sortedReviewsByDate=fetchedreviews.sort((a,b)=> a.date>b.date ? -1:1);
        console.log(sortedReviewsByDate);
        dispatch(addReviews(sortedReviewsByDate));
    //    dispatch({
        
    //     type: ActionTypes.FETCH_REVIEWDATA_REQUEST,
    //     payload:sortedReviewsByDate
        
    // });
        
 }


    export const addReviews = (reviews)=>({
        
        type: ActionTypes.FETCH_REVIEWDATA_REQUEST,
        payload:reviews
        
    })