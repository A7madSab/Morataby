import React, { Component } from 'react'
import { View, Text, TextInput, Button } from "react-native"
import { Card } from "react-native-elements"

export default class ClinicScreen extends Component {
    state = {
        name: "",
        age: "",
        operation: "",
        cost: "",
        id: ""
    }
    addPatient = () => {
        const { navigation } = this.props
        const { id } = navigation.state.params.clinic

        navigation.state.params.addPatient(id, this.state)
    }
    render() {
        const { navigation } = this.props
        const { name, age, cost, operation, id } = this.state
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
            </View>
        )
    }
}

// <Button title="add patient" onPress={() => navigation.navigate("AddPatient")} />
// <View>
//     {navigation.state.params.patients.map(patient => {
//         return (
//             <Card key={patient.name}>
//                 <Text>Patient Name:{patient.name}</Text>
//                 <Text>Patient age:{patient.age}</Text>
//                 <Text>Patient case:{patient.case}</Text>
//             </Card>
//         )
//     })}
// </View>