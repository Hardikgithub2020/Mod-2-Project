// creating our React action type


export const GET_POSTS ='GET_POSTS';
export const GET_POSTS_SUCCESS ='GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE ='GET_POSTS_FAILURE';


// create  my Redux action using  action creaters

export const getPosts = () =>({
    type : GET_POSTS
})

export const getPostsSuccess = (posts) =>({
    type : GET_POSTS_SUCCESS,
    payload: posts,
})

export const getPostsFailure = () =>({
    type : GET_POSTS_FAILURE
})

// Combining all action in an Asynchronise Thunk

export function fetchPosts(){
    return async (dispatch) => {
        dispatch(getPosts())
        try{
            const res = await fetch('https://api.openbrewerydb.org/breweries/search?query=united_state&sort=-state,-city,-type,-name')
       
            const data =  await res.json()
            console.log(data);
            dispatch(getPostsSuccess(data))
            

        }catch(error){
            dispatch(getPostsFailure())
        }
    }
}