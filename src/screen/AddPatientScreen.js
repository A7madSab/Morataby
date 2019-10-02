import React, { Component } from 'react'
import { Text, View, Button } from "react-native"

export default class AddPatientScreen extends Component {
    render() {
        return (
            <View>
                <Text>AddPatientScreen</Text>
                <Button title="close" onPress={() => console.log(this.props.navigation.pop())} />
            </View>
        )
    }
}
