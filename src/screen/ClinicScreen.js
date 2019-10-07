import React, { Component } from 'react'
import { View, Text, TextInput, Button } from "react-native"
import { Card } from "react-native-elements"
import { connect } from "react-redux"
import { addPatiant } from "../action"
class ClinicScreen extends Component {
    state = {
        name: "",
        age: "",
        operation: "",
        cost: "",
        id: ""
    }
    addPatient = () => {
        const { dispatch, navigation } = this.props
        const clinicId = navigation.state.params.clinic.id
        dispatch(addPatiant(clinicId, this.state))
    }
    render() {
        const { name, age, cost, operation, id } = this.state
        const { dispatch, navigation, patients } = this.props
        const clinicId = navigation.state.params.clinic.id

        return (
            <View>
                <View>
                    <TextInput
                        placeholder="Patient id"
                        value={id}
                        onChangeText={(id) => this.setState(({ id }))}
                    />
                    <TextInput
                        placeholder="Patient Name"
                        value={name}
                        onChangeText={(name) => this.setState(({ name }))}
                    />
                    <TextInput
                        placeholder="Patient age"
                        value={age}
                        onChangeText={(age) => this.setState(({ age }))}
                    />
                    <TextInput
                        placeholder="Patient cost"
                        value={cost}
                        onChangeText={(cost) => this.setState(({ cost }))}
                    />
                    <TextInput
                        placeholder="Patient operation"
                        value={operation}
                        onChangeText={(operation) => this.setState(({ operation }))}
                    />
                </View>
                <Button title="add patient" onPress={this.addPatient} />
                <View>
                    {
                        patients.map(patient => {
                            return (
                                patient.clinicId === clinicId &&
                                <Card>
                                    <Text>
                                        {patient.name} ||
                                        {patient.case} ||
                                        {patient.cost}
                                    </Text>
                                </Card>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    patients: state.patients
})

export default connect(mapStateToProps)(ClinicScreen)
