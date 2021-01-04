import { Types } from '../../action/country/action-type';

export function countriesReducer(state = [], action) {
    switch (action.type) {
        case Types.LOAD_SUCCESS_COUNTRIES:
            return action.countries;
        default:
            return state;
    }
}