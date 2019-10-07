import { ADD_CLINIC, ADD_CLINICS, REMOVE_CLINIC, ADD_PATIANT, REMOVE_PATIANT } from "../action"

export const clinics = (state = [], action) => {
    switch (action.type) {
        case ADD_CLINIC:
            return state.concat([action.clinic])
        case ADD_CLINICS:
            return state.concat([...action.clinics])
        case REMOVE_CLINIC:
            return state.filter(clinic => clinic.id !== action.id)
        default:
            return state
    }
}
export const patients = (state = [], action) => {
    switch (action.type) {
        case ADD_PATIANT:
            return state.concat([action.patiant])
        case REMOVE_PATIANT:
            return state.filter(patient => patient.id !== patiantId)
        default:
            return state
    }
}
