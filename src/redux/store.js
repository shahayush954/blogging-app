import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";
import thunk from "redux-thunk";

const initialState = [];
const middleware = [thunk];

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer
});

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
