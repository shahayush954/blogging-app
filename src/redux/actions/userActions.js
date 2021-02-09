import axios from "axios";
import {
    SET_USER,
    SET_ERRORS,
    SET_AUTHENTICATED
} from "../types";

// setCookie method -> sets a single username name cookie to the document.
// we have used 1day expiration time for this cookie.
// the parameter cookieValue passed will be used as value for the username cookie.
const setCookie = (cookieValue) => {
    let cookieString = "username=" + cookieValue + "; ";
    let date = new Date(Date.now()+86400000).toUTCString();
    cookieString += "expires=" + date + "; ";
    document.cookie = cookieString;
    return cookieString;
}

// getCookies method -> returns an object with all the cookies of the document as key value pairs.
export const getCookies = () => {
    let allCookiesUnformated = document.cookie;
    let allCookies = {};
    let oneCookie = [];
    allCookiesUnformated.split(";").map(cookie => {
        oneCookie = cookie.split("=");
        allCookies[oneCookie[0].trim()] = oneCookie[1];
    });
    return allCookies;
}


// loginUser method -> create a GET request with the provided user credentials and based on the
// response determine whether the user is correct on not.
// if the user is not correct then we SET_ERRORS event is dispatched to set corresponding errors.
// if the user if correct then we dispatch the SET_USER event to update user details in the store.
// the history object is used for redirection purposes.
export const loginUser = (userData, history) => (dispatch) => {
    let url = `https://jsonplaceholder.typicode.com/users?email=${userData.email}&phone=${userData.phone}`;
    axios.get(url)
        .then(userDetails => {
            if(userDetails.data.length === 0){
                dispatch({ type: SET_ERRORS, payload: "Wrong Credentials"});
            }
            else{
                let userCookie = setCookie(userDetails.data[0].name);
                dispatch({type: SET_AUTHENTICATED});
                dispatch({
                    type: SET_USER, 
                    payload: {
                        user: userDetails.data[0],
                        user_cookie: userCookie,
                    }
                });
                history.push("/");
            }
        })
        .catch(err => {
            console.log(err);
        });
};