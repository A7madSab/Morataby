import React, { Component } from 'react'
import { Text, View, TextInput, Button } from "react-native"
import { connect } from "react-redux"
import { addClinic } from "../action"

class AddClinicScreen extends Component {
    state = {
        id: '',
        name: '',
        place: '',
        percentage: '',
    }
    addClinic = () => {
        const { dispatch, navigation } = this.props
        dispatch(addClinic(this.state))
        navigation.pop()
    }
    render() {
        let { id, name, place, percentage } = this.state
        return (
            <View>
                <Text> AddClinicScreen </Text>
                <TextInput
                    placeholder="id"
                    value={id}
                    onChangeText={id => this.setState(({ id }))}
                />
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
                <Button title="Add Clinic" onPress={this.addClinic} />

                <Text>{JSON.stringify(this.state)}</Text>
            </View>
        )
    }
}

export default connect()(AddClinicScreen)