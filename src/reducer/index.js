import { combineReducers } from "redux";
import { countriesReducer } from '../reducer/country/country-reducer.js'

export const rootReducer = combineReducers({
    countries: countriesReducer
});