import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

const reducers = combineReducers({
    counter: counterReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev