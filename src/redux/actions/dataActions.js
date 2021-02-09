import {
    CREATE_NEW_POST
} from "../types";
import axios from "axios";


export const createPost = (newPost,history) => (dispatch) => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    axios.post(url, newPost)
        .then((result) => {
            newPost.id = result.data.id;
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