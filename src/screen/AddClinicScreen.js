import React, { Component } from 'react'
import { Text, View, TextInput, Button } from "react-native"
import { connect } from "react-redux"
import { addClinic } from "../action"
import { saveClinic } from '../../utils/api'

class AddClinicScreen extends Component {
    state = {
        id: '',
        name: '',
        place: '',
        percentage: '',
    }
    addClinic = () => {
        const { dispatch, navigation } = this.props
        const { id, name, place, percentage } = this.state
        dispatch(addClinic({
            id,
            name,
            place,
            percentage
        }))
        navigation.pop()
    }
    render() {
        let { id, name, place, percentage } = this.state
        return (
            <View style={{ padding: 25 }}>
                <Text> Add Clinic </Text>
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
            </View>
        )
    }
}

export default connect()(AddClinicScreen)