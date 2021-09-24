import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Settings } from 'react-native'
import Account from '../screens/Account'
import Checkout from '../screens/Checkout'
import Intro from '../screens/Intro'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Setting from '../screens/Setting'
import Verification from '../screens/Verification'
import Welcome from '../screens/Welcome'
import BottomNavigation from './BottomNavigation'
import DrawerNavigation from './DrawerNavigation'

const StackNavigation = () => {
    const navigation=createStackNavigator()
    return (
    <navigation.Navigator initialRouteName="Intro" screenOptions={{headerShown:false}}>
        <navigation.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <navigation.Screen name="BottomNavigation" component={BottomNavigation} />

        <navigation.Screen name="Intro" component={Intro}/>
        <navigation.Screen name="Login" component={Login} />
        <navigation.Screen name="Register" component={Register} />
        <navigation.Screen name="Setting" component={Setting} />
        <navigation.Screen name="Account" component={Account} />
        <navigation.Screen name="Verification" component={Verification} />
        <navigation.Screen name="Welcome" component={Welcome} />
        <navigation.Screen name="Checkout" component={Checkout} />
    </navigation.Navigator>
    )
}

export default StackNavigation
