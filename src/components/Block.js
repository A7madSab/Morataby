import React from 'react'
import { Text, View, StyleSheet } from "react-native"

export default Block = (props) => {
    return (
        <View styles={styles.container}>
            <Text style={styles.label}> {props.label}</Text>
            <Text style={styles.amount}>{props.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1
    },
    label: {
        fontSize: 12,
        textAlign: "center"
    },
    amount: {
        fontSize: 12,
        textAlign: "center"
    }
})
