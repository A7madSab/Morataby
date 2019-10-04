import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from "react-native"
import { Card } from "react-native-elements"



export default class ClinicListScreen extends Component {
    state = {
        clinics: [
            {
                id: 1,
                name: "Dar el Asana",
                percentage: "10",
                patients: [
                    {
                        name: "Ahmad sabry",
                        case: "Something A",
                        cost: "800"
                    }
                ]
            },
            {
                id: 2,
                name: "Dr Omar",
                percentage: "35",
                patients: [
                    {
                        name: "Sabry Aly",
                        case: "Something B",
                        cost: "1500"
                    }
                ]
            },
            {
                id: 3,
                name: "Clinic A",
                percentage: "15",
                patients: [
                    {
                        name: "Aly sabry",
                        case: "Comething C",
                        cost: "1000"
                    }
                ]
            },
            {
                id: 4,
                name: "Clinic Land",
                percentage: "20",
                patients: [
                    {
                        name: "Mahmoud sabry",
                        case: "Something D",
                        cost: "500"
                    }
                ]
            },
        ]
    }
    addClinic = clinic => {
        this.setState((state) => ({
            clinics: state.clinics.concat([clinic])
        }))
    }
    addPatient = (id, Patient) => {
        const { clinics } = this.state
        this.setState((state) => ({
            clinics: state.clinics.find(clinic => clinic.id === id).patients.concat([Patient])
        }))
        console.log(this.state)
    }
    render() {
        const { clinics } = this.state
        return (
            <View>
                {
                    clinics.map((clinic) => (
                        <TouchableOpacity
                            key={clinic.id}
                            onPress={() => {
                                this.props.navigation.navigate("Clinic", {
                                    clinic: clinic,
                                    addPatient: this.addPatient
                                })
                            }}>
                            <Card>
                                <Text>Clinic Name:{clinic.name}</Text>
                            </Card>
                        </TouchableOpacity>
                    ))
                }
                <Button
                    title="Add Clinic" onPress={() => this.props.navigation.navigate("AddClinic", { addClinic: this.addClinic })} />
            </View>
        )
    }
}
