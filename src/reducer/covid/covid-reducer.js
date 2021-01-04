import { Types } from '../../action/covid/action-type';

export function covidDataReducer(state = [], action) {
    switch (action.type) {
        case Types.LOAD_SUCCESS_DATA_FOR_COUNTRIES:
            return action.data;
        default:
            return state;
    }
}

export function covidDailyDataReducer(state = [], action) {
    switch (action.type) {
        case Types.LOAD_SUCCESS_DATA_FOR_DAILY:
            return action.value;
        default:
            return state;
    }
}