import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { Card, Button } from "react-native-elements"
import { addClinic, addClinics, handelAddClinics, addPatiant } from "../action"
import { fetchClinics } from "../../utils/api"
import { Entypo, MaterialIcons } from "@expo/vector-icons"
import { connect } from "react-redux"
import { removeClinic } from "../action"
import Block from '../components/Block'
import { pinkFraud, copperRust, darkPurple } from '../../utils/colors'
class ClinicListScreen extends Component {
    componentDidMount() {
        const clinics = [
            {
                id: 1,
                name: "Dar El Asnan",
                percentage: 25
            },
            {
                id: 2,
                name: "De Rehab",
                percentage: 35
            },
            {
                id: 3,
                name: "Dental Land",
                percentage: 15
            },
            {
                id: 4,
                name: "Wedoo",
                percentage: 50
            }
        ]
        this.props.dispatch(addClinics(clinics))
        this.props.dispatch(addPatiant(1, {
            name: "Ahmad Sabry",
            age: 21,
            cost: 500,
            case: "Quis dolore labore eiusmod veniam consequat.",
            id: 1865
        }))
        this.props.dispatch(addPatiant(1, {
            name: "Haneen Sabry",
            age: 26,
            cost: 1500,
            case: "Esse eu ullamco in eiusmod laborum commodo occaecat in nulla.",
            id: 185
        }))
        this.props.dispatch(addPatiant(2, {
            name: "Aly Sabry",
            age: 21,
            cost: 900,
            case: "Eu magna sunt fugiat ullamco ad Lorem nostrud.",
            id: 1857
        }))
        this.props.navigation.navigate("Income")
    }
    removeClinic = (id) => {
        this.props.dispatch(removeClinic(id))
    }
    render() {
        const { navigation, patients, clinics } = this.props
        return (
            <ScrollView style={styles.container}>
                {
                    clinics.map((clinic) => {
                        let totalAmount = 0, patientNumber = 0, myShare = 0
                        patients.map(patient => {
                            if (patient.clinicId === clinic.id) {
                                totalAmount = totalAmount + patient.cost
                                patientNumber++
                            }
                        })
                        myShare = totalAmount * (clinic.percentage / 100)
                        return (
                            <TouchableOpacity
                                style={{ felx: 1, flexDirection: "column" }}
                                key={clinic.id}
                                onPress={() => navigation.navigate("Clinic", { Title: clinic.name, clinic })}>
                                <Card style={{ flex: 1 }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={styles.clinicName}> {clinic.name}</Text>
                                        <Entypo name="circle-with-cross" color="#000" size={25} onPress={() => this.removeClinic(clinic.id)} />
                                    </View>
                                    <View style={styles.blocksContainer}>
                                        <Block label="Patients" amount={patientNumber} />
                                        <Block label="Total Cost" amount={totalAmount} />
                                        <Block label="%" amount={clinic.percentage} />
                                        <Block label="My Cut" amount={myShare} />
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        )
                    })
                }
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={styles.AddClinicBtn}
                        onPress={() => this.props.navigation.navigate("AddClinic", {
                            addClinic: this.addClinic
                        })}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <MaterialIcons color={darkPurple} size={20} name="add-circle" />
                            <Text style={{ color: "#fff" }}>ADD CLINIC</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    clinics: state.clinics,
    patients: state.patients
})

export default connect(mapStateToProps)(ClinicListScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blocksContainer: {
        flexDirection: "row",
        borderTopColor: "#555",
        borderTopWidth: 1,
        justifyContent: "space-between",
        padding: 15
    },
    clinicName: {
        fontSize: 18,
        fontWeight: "bold"
    },
    AddClinicBtn: {
        width: 150,
        margin: 15,
        padding: 15,
        backgroundColor: pinkFraud,
        borderColor: copperRust,
        borderRadius: 15,
        borderWidth: 1
    },
    cardContainer: {
    },
    addClinicButton: {
    }
})