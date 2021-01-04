import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { rootReducer } from './index.js';

export default function configureStore() {
    const allEnhancers = compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return createStore(rootReducer, allEnhancers);
}
