import React, { Component } from 'react'
import { ScrollView, Text, View } from "react-native"
import { connect } from "react-redux"
import { Card } from "react-native-elements"
import { green } from '../../utils/colors'
class IncomeScreen extends Component {
    arr = []
    componentDidMount() {
        const { clinics, patients } = this.props
        clinics.map((clinic, index) => {
            this.arr[index] = {
                patients: patients.filter(patients => clinic.id === patients.clinicId),
                clinicName: clinic.name,
                clinicPercentage: clinic.percentage
            }
        })
        this.forceUpdate()
    }
    render() {
        let totalIncome = 0
        return (
            <ScrollView>
                {this.arr.map(income => {
                    let totalClinicalIncome = 0
                    return (
                        <View key={income.clinicName}>
                            <Card>
                                <View>
                                    <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center", textDecorationLine: "underline" }}>{income.clinicName}</Text>
                                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ fontWeight: "500" }}>Name</Text>
                                        <Text style={{ fontWeight: "500" }}>Cost</Text>
                                    </View>
                                    <View>
                                        {income.patients.map(patient => {
                                            totalClinicalIncome = totalClinicalIncome + patient.cost
                                            totalIncome = totalIncome + (totalClinicalIncome * (income.clinicPercentage / 100))
                                            return (
                                                <View key={patient.id} style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                                    <Text>{patient.name}</Text>
                                                    <Text>{patient.cost}</Text>
                                                </View>
                                            )
                                        })}
                                    </View>
                                    <Text style={{ paddingTop: 15 }}>
                                        Total Income:{totalClinicalIncome}
                                    </Text>
                                    <Text>
                                        My Cut:{totalClinicalIncome * (income.clinicPercentage / 100)}
                                    </Text>
                                </View>
                            </Card>
                        </View>
                    )
                })}
                <Card>
                    <Text style={{ textAlign: "center", fontSize: 35 }}>Expected:{totalIncome}</Text>
                </Card>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    clinics: state.clinics,
    patients: state.patients
})

export default connect(mapStateToProps)(IncomeScreen)
