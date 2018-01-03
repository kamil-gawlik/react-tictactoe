import {createLogger} from "redux-logger";
import combinedReducers from "./reducers";
import {applyMiddleware, createStore} from "redux";

const logger = createLogger();

export default function configureStore() {
    return createStore(
        combinedReducers,
        applyMiddleware(logger)
    )
}
