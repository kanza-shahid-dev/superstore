import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colors from '../constants/colors'
import Checkout from '../screens/Checkout'
import All from '../screens/Discover/All'
import BestSellers from '../screens/Discover/BestSellers'
import Men from '../screens/Discover/Men'
import Women from '../screens/Discover/Women'

const StackNavigation = () => {
    const navigation=createMaterialTopTabNavigator()
    return (
    <navigation.Navigator 
    initialRouteName="All"
    screenOptions={{tabBarLabelStyle:{fontSize:14,fontWeight:'700'},
    tabBarActiveTintColor:colors.primary,tabBarPressColor:'white',
    tabBarIndicatorStyle:{backgroundColor:colors.primary}}}
    >
        <navigation.Screen
         name="All"
         component={All}
         options={{tabBarActiveTintColor:'red', tabBarLabel:()=><Text style={styles.label}>All</Text>}}
          />

        <navigation.Screen
         name="Women"
         component={Women}
         options={{tabBarLabel:()=><Text style={styles.label}>Women</Text>}}
          />

        <navigation.Screen 
         name="Men" 
         component={Men}
         options={{tabBarLabel:()=><Text style={styles.label}>Men</Text>}}
          />

        <navigation.Screen 
         name="Best Sellers" 
         component={BestSellers}
         options={{tabBarLabel:()=><Text style={styles.label}>Best Sellers</Text>}}
           />
   
    </navigation.Navigator>
    )
}

const styles=StyleSheet.create({
    label:{
        color:'grey'
    }
})

export default StackNavigation
