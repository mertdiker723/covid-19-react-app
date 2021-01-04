import { Types } from './action-type';
import * as fetchApi from '../../api/index';

export function loadCountryDataSuccess(data) {
    return {
        type: Types.LOAD_SUCCESS_DATA_FOR_COUNTRIES,
        data
    }
}

export function loadDailyDataSuccess(value) {
    return {
        type: Types.LOAD_SUCCESS_DATA_FOR_DAILY,
        value
    }
}

export function loadDataForCountries(country) {
    return dispatch => {
        return fetchApi.fetchData(country)
            .then(value => dispatch(loadCountryDataSuccess(value)))
            .catch(error => {
                return error;
            })
    }
}

export function loadDailyData() {
    return dispatch => {
        return fetchApi.fetchDailyData()
            .then(value => dispatch(loadDailyDataSuccess(value)))
            .catch(error => {
                return error;
            })
    }
}