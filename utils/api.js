import { AsyncStorage } from "react-native"

const ClinicsKEY = "Clinics"
const PatiantsKEY = "Patiants"

export function saveClinics(Clinics) {
    return AsyncStorage
        .setItem(ClinicsKEY, JSON.stringify([
            Clinics
        ]))
        .catch(err => console.error(err))
}
export function saveClinic(Clinic) {
    return AsyncStorage
        .mergeItem(ClinicsKEY, JSON.stringify({
            Clinic
        }))
        .catch(err => console.error(err))
}
export function fetchClinics() {
    return AsyncStorage
        .getItem(ClinicsKEY)
        .then(results => JSON.parse(results))
        .catch(err => console.error(err))
}