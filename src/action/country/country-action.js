import { Types } from './action-type';
import * as fetchApi from '../../api/index';

export function loadCountriesSuccess(countries) {
    return {
        type: Types.LOAD_SUCCESS_COUNTRIES,
        countries
    }
}

export function loadCountries() {
    return dispatch => {
        return fetchApi.fetchCountries()
            .then(countries => dispatch(loadCountriesSuccess(countries)))
            .catch(error => {
                return error;
            })
    }
}


