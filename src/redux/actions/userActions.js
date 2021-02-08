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
    return cookieString;
}


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