import React, { Component } from 'react'
import { View, Text, Button } from "react-native"

export default class ClinicScreen extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text>ClinicScreen</Text>
                <Button title="add patient" onPress={() => navigation.navigate("AddPatient")} />
            </View>
        )
    }
}
