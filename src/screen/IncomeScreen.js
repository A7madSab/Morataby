import React, { Component } from 'react'
import { ScrollView, Text, View } from "react-native"
import { connect } from "react-redux"
import { Card } from "react-native-elements"
class IncomeScreen extends Component {
    arr = []
    componentDidMount() {
        const { clinics, patients } = this.props
        clinics.map((clinic, index) => {
            this.arr[index] = { patients: patients.filter(patients => clinic.id === patients.clinicId), clinicName: clinic.name }
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
                                    <Text>{income.clinicName}</Text>
                                    <View>
                                        {income.patients.map(patient => {
                                            totalClinicalIncome = totalClinicalIncome + patient.cost
                                            totalIncome = totalIncome + totalClinicalIncome
                                            return (
                                                <Text key={patient.id}>
                                                    {patient.name}
                                                    {patient.cost}
                                                </Text>
                                            )
                                        })}
                                    </View>
                                    <Text>
                                        {totalClinicalIncome}
                                    </Text>
                                </View>
                            </Card>
                        </View>
                    )
                })}
                <Text>total:{totalIncome}</Text>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    clinics: state.clinics,
    patients: state.patients
})

export default connect(mapStateToProps)(IncomeScreen)
