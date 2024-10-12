import { createStore, combineReducers } from 'redux';
import backgroundReducer from "./Reducer";

const rootReducer = combineReducers({
    background: backgroundReducer,
});

export const store = createStore(rootReducer);

