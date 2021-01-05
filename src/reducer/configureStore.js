import { applyMiddleware, compose,combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { countriesReducer } from '../reducer/country/country-reducer.js'
import { covidDataReducer, covidDailyDataReducer } from '../reducer/covid/covid-reducer.js';

const rootReducer = combineReducers({
    countries: countriesReducer,
    covidData: covidDataReducer,
    covidDailyData: covidDailyDataReducer
});

export default function configureStore() {
    const allEnhancers = compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return createStore(rootReducer, allEnhancers);
}
