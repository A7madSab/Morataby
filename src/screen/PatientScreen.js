import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, View } from "react-native"
import { connect } from "react-redux"
import { Card } from "react-native-elements"
import { oysterPink, green } from '../../utils/colors'
import { Feather, FontAwesome } from "@expo/vector-icons"

class PatientScreen extends Component {
    renderPatient = (patient) => (
        <Card>
            <Text>{patient.name}</Text>
        </Card>
    )
    render() {
        const { patients, clinics } = this.props

        return (
            <ScrollView>
                {
                    patients.map(patient => {
                        const clinicsName = clinics.find(clinic => clinic.id === patient.clinicId).name
                        return (
                            <Card key={patient.id}>
                                <View style={styles.horizontal}>
                                    <Text style={styles.name}>{patient.name}</Text>
                                    <Text style={styles.age}> ({patient.age})</Text>
                                </View>
                                <View style={styles.horizontal}>
                                    <Feather style={styles.icon} name="dollar-sign" size={16} color={green} />
                                    <Text>{patient.cost}</Text>
                                </View>
                                <View style={styles.horizontal}>
                                    <Feather style={styles.icon} name="file-text" size={16} />
                                    <Text>{patient.case}</Text>
                                </View>
                                <View style={styles.horizontal}>
                                    <FontAwesome style={styles.icon} name="hospital-o" size={16} />
                                    <Text>{clinicsName}</Text>
                                </View>
                            </Card>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    patients: state.patients,
    clinics: state.clinics
})

const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        fontWeight: "500"
    },
    horizontal: {
        flexDirection: "row",
    },
    age: {
        color: oysterPink
    },
    icon: {
        paddingRight: 5
    }
})

export default connect(mapStateToProps)(PatientScreen)