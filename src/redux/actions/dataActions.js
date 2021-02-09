import {
    CREATE_NEW_POST,
    SET_POSTS,
} from "../types";
import axios from "axios";


// createPost method -> A method to make a POST request to create a new post.
// The POST request gives us the ID of the newly created post.
// The CREATE_NEW_POST event is dispatched to update the store accordingly.
// We use the history object passed for redirection purposes
export const createPost = (newPost,history) => (dispatch) => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    axios.post(url, newPost)
        .then((result) => {
            newPost.postId = result.data.id;
            dispatch({
                type: CREATE_NEW_POST,
                payload: newPost
            });
            history.push(`/${result.data.id}`);
        })
        .catch(err => {
            console.log(err);
        })
}


export const getAllPosts = () => (dispatch) => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    axios.get(url)
         .then((result) => {
             dispatch({
                 type: SET_POSTS,
                 payload: result.data,
             });
         })
         .catch(err => {
             console.log(err);
         });
}