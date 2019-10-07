import React from "react"
import { Feather } from "@expo/vector-icons"
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation"

import AddPatientScreen from "../screen/AddPatientScreen.js"
import IncomeScreen from "../screen/IncomeScreen.js"
import AddClinicScreen from "../screen/AddClinicScreen"
import ClinicListScreen from "../screen/ClinicListScreen.js"
import ClinicScreen from "../screen/ClinicScreen.js"

import { cottonCandy, oysterPink } from "../../utils/colors"

const ClinicStackNavigation = createStackNavigator({
    ClinicList: {
        screen: ClinicListScreen,
        navigationOptions: ({ navigation }) => {
            return ({
                title: "Home",
                headerLeft: <Feather
                    onPress={() => navigation.toggleDrawer()}
                    name="menu"
                    size={30}
                    style={{ margin: 15 }}
                />
            })
        }
    },
    AddClinic: {
        screen: AddClinicScreen,
        navigationOptions: {
            title: "Add Clinic"
        }
    },
    Clinic: {
        screen: ClinicScreen,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.clinic.name} Clinic`,
        }),
    },
    AddPatient: {
        screen: AddPatientScreen,
        navigationOptions: {
            title: "App Paitent",
        }
    }
})

const StackStackNavigation = createStackNavigator({
    Income: {
        screen: IncomeScreen,
        navigationOptions: ({ navigation }) => {
            return ({
                title: "Income",
                headerLeft: <Feather
                    onPress={() => navigation.toggleDrawer()}
                    name="menu"
                    size={30}
                    style={{ margin: 15 }}
                />
            })
        }
    }
})

const AppStack = createDrawerNavigator({
    Home: {
        screen: ClinicStackNavigation,
        navigationOptions: {
            drawerIcon: () => <Feather name="home" size={30} />
        }
    },
    Income: {
        screen: StackStackNavigation,
        navigationOptions: {
            drawerIcon: () => <Feather name="dollar-sign" size={30} />
        }
    }
}, {
    drawerWidth: 200,
    drawerBackgroundColor: cottonCandy,
    overlayColor: '#fff',
    contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: '#6b52ae',
    },
})

export default createAppContainer(AppStack)