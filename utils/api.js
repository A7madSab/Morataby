import { AsyncStorage } from "react-native"

const ClinicsKEY = "Clinics"
const PatiantsKEY = "Patiants"

export function saveClinics(Clinics) {
    return AsyncStorage.mergeItem(ClinicsKEY, JSON.stringify({
        Clinics
    }))
}

export function saveClinic(Clinic) {
    return AsyncStorage.mergeItem(ClinicsKEY, JSON.stringify({
        Clinic
    }))
}

export function fetchClinics() {
    return AsyncStorage.getItem(ClinicsKEY)
        .then(results => JSON.parse(results))
}