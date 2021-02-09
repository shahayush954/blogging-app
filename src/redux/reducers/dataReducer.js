import {
    CREATE_NEW_POST, 
    SET_POSTS
} from "../types";
const initialState = {
    posts: [],
    singlePost: {},
};

const dataReducer = (state=initialState, action) => {
    switch(action.type){

        case CREATE_NEW_POST:
            let newPostsArray = state.posts;
            newPostsArray.push(action.payload);
            return {
                ...state,
                posts: newPostsArray,
                singlePost: action.payload
            };

        case SET_POSTS:
            return {
                ...state,
                posts: [...action.payload]
            };

        default:
            return state;
    }
}
export default dataReducer;