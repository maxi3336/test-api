import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import animalsReducer from "./animalsReducer";

let store = createStore(combineReducers({
    animals: animalsReducer
}), applyMiddleware(thunkMiddleware))

window.store = store

export default store
