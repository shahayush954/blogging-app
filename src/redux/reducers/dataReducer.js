import {
    CREATE_NEW_POST
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

        default:
            return state;
    }
}
export default dataReducer;