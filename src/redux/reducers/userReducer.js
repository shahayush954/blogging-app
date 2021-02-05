import {
    SET_USER,
    SET_ERRORS,
    SET_AUTHENTICATED
} from "../types";

const initialState = {
    authenticated: false,
    errors: "",
    user: {},
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };

        case SET_USER:
            return {
                ...state,
                user: action.payload
            };

        case SET_ERRORS:
            return {
                ...state,
                errors: action.payload
            }

        default:
            return state;
    }
}
export default userReducer;