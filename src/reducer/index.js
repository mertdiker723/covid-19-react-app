import { combineReducers } from "redux";
import { countriesReducer } from '../reducer/country/country-reducer.js'
import { covidDataReducer, covidDailyDataReducer } from '../reducer/covid/covid-reducer.js';

export const rootReducer = combineReducers({
    countries: countriesReducer,
    covidData: covidDataReducer,
    covidDailyData: covidDailyDataReducer
});