import axios from "axios";
import {
    SET_USER,
    SET_ERRORS,
    SET_AUTHENTICATED
} from "../types";

const setCookie = (cookieValue) => {
    let cookieString = "username=" + cookieValue + "; ";
    let date = new Date(Date.now()+86400000).toUTCString();
    cookieString += "expires=" + date + "; ";
    document.cookie = cookieString;
}



export const loginUser = (userData, history) => (dispatch) => {
    console.log("Inside");
    let url = `https://jsonplaceholder.typicode.com/users?email=${userData.email}&phone=${userData.phone}`;
    axios.get(url)
        .then(userDetails => {
            if(userDetails.data.length === 0){
                dispatch({ type: SET_ERRORS, payload: "Wrong Credentials"});
            }
            else{
                setCookie(userDetails.data[0].name);
                dispatch({type: SET_AUTHENTICATED});
                dispatch({type: SET_USER, payload: userDetails.data[0]})
                history.push("/");
            }
        })
        .catch(err => {
            console.log(err);
        });
}