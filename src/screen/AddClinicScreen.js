import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from "react-native"

export default class AddClinicScreen extends Component {
    state = {
        name: '',
        place: '',
        percentage: '',
    }
    addClinic = () => {
        const { navigation } = this.props
        navigation.state.params.addClinic(this.state)
        navigation.pop()
    }
    render() {
        let { name, place, percentage } = this.state
        return (
            <View>
                <Text> AddClinicScreen </Text>
                <TextInput
                    placeholder="Clinic Name"
                    value={name}
                    onChangeText={name => this.setState(({ name }))}
                />
                <TextInput
                    placeholder="Clinic Place"
                    value={place}
                    onChangeText={(place) => this.setState(({ place }))}
                />
                <TextInput
                    placeholder="percentage"
                    value={percentage}
                    onChangeText={(percentage) => this.setState(({ percentage }))}
                />
                <TouchableOpacity onPress={this.addClinic}>
                    <Text> Add Clinic </Text>
                </TouchableOpacity>

                <Text>{JSON.stringify(this.state)}</Text>
            </View>
        )
    }
}