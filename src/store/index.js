import { createStore, combineReducers, applyMiddleware } from "redux"
import { logger } from "../middleware/index"
import { clinics, patients } from "../reducers/index"

const store = createStore(combineReducers({
    clinics,
    patients
}), applyMiddleware(
    logger
))

export default store