import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from "react-native"
import { Card } from "react-native-elements"

const Clinics = [
    {
        id: 1,
        name: "clinic1"
    },
    {
        id: 2,
        name: "clinic1"
    },
    {
        id: 3,
        name: "clinic1"
    },
    {
        id: 4,
        name: "clinic1"
    },
]

export default class ClinicListScreen extends Component {
    render() {
        return (
            <View>
                {
                    Clinics.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => {
                                this.props.navigation.navigate("Clinic", {
                                    title: "something passed"
                                })
                            }}>
                            <Card>
                                <Text>Clinic Name:{item.name}</Text>
                            </Card>
                        </TouchableOpacity>
                    ))
                }
                <Button title="Add Clinic" onPress={() => this.props.navigation.navigate("AddClinic")} />
            </View>
        )
    }
}
