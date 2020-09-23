import { AsyncStorage } from "react-native"
import { saveClinics } from "../../utils/api"

export const ADD_CLINIC = "ADD_CLINIC"
export const ADD_CLINICS = "ADD_CLINICS"
export const REMOVE_CLINIC = "REMOVE_CLINIC"
export const ADD_PATIANT = "ADD_PATIANT"
export const REMOVE_PATIANT = "REMOVE_PATIANT"

export const addClinic = (clinic) => {
    try {
        console.log("JSON.stringify(clinic)", JSON.stringify(clinic))
        AsyncStorage.mergeItem("Clinics", JSON.stringify(clinic))
    }
    catch {
        console.error("Error saving clinic", clinic)
    }
    return ({
        type: ADD_CLINIC,
        clinic
    })
}
export const removeClinic = (id) => ({
    type: REMOVE_CLINIC,
    id
})
export const addClinics = (clinics) => {
    try {
        console.log("JSON.stringify(clinic)", JSON.stringify(clinics))
        AsyncStorage.mergeItem("clinics", JSON.stringify(clinics))
    }
    catch {
        console.error("Error saving clinics", clinics)
    }
    return ({
        type: ADD_CLINICS,
        clinics
    })
}
export const handelAddClinics = (clinics) => {
    saveClinics(clinics)
    return addClinics(clinics)
}
export const addPatiant = (clinicId, patiant) => ({
    type: ADD_PATIANT,
    patiant: {
        clinicId,
        ...patiant
    }
})
export const removePatiant = (clinicId, patiantId) => ({
    type: REMOVE_PATIANT,
    clinicId,
    patiantId
})