import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, AsyncStorage } from "react-native"
import { Card } from "react-native-elements"
import { addClinic, addClinics } from "../action"
import { fetchClinics } from "../../utils/api"
import { Entypo } from "@expo/vector-icons"
import { connect } from "react-redux"
import { removeClinic } from "../action"
class ClinicListScreen extends Component {
    componentDidMount() {
        const { dispatch } = this.props

    }
    removeClinic = (id) => {
        this.props.dispatch(removeClinic(id))
    }
    render() {
        return (
            <View>
                {
                    this.props.clinics.map((clinic) => (
                        <TouchableOpacity
                            key={clinic.id}
                            onPress={() => {
                                this.props.navigation.navigate("Clinic", {
                                    Title: clinic.name,
                                    clinic
                                })
                            }}>
                            <Card style={{ flex: 1, flexDirection: "row" }} >
                                <Text>Clinic Name:{clinic.name}</Text>
                                <Entypo name="circle-with-cross" size={25} onPress={() => this.removeClinic(clinic.id)} />
                            </Card>
                        </TouchableOpacity>
                    ))
                }
                <Button
                    title="Add Clinic"
                    onPress={() => {
                        this.props.navigation.navigate("AddClinic", {
                            addClinic: this.addClinic
                        })
                    }}
                />
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        clinics: state.clinics
    }
}
export default connect(mapStateToProps)(ClinicListScreen)

// addPatient = (id, patient) => {
//     const currentClinics = this.state.clinics.find(clinic => clinic.id === id)
//     const newPatients = currentClinics.patients.concat([patient])

//     const newState = this.state.clinics.map(clinic => {
//         if (clinic.id === currentClinics.id) {
//             clinic.patients = newPatients
//         }
//         return clinic
//     })
//     this.setState(({
    //         clinics: newState
//     }))
// }








