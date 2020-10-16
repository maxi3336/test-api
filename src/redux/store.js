import {combineReducers, createStore} from "redux";
import animalsReducer from "./animalsReducer";

let store = createStore(combineReducers({
    animals: animalsReducer
}))

window.store = store

export default store
