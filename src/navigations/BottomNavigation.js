import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';
import Account from '../screens/Account';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Verification from '../screens/Verification';

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
      
      <Tab.Navigator initalRouteName="Home" 
      screenOptions={{ 
        tabBarLabelPosition:'beside-icon',
         headerShown:false,
         tabBarStyle:{position:'absolute',paddingLeft:20,paddingRight:20,
         height:75,borderTopLeftRadius:50,borderTopRightRadius:50,borderColor:colors.primary,borderWidth:1,borderTopWidth:1,borderTopColor:colors.primary},
         tabBarActiveTintColor:colors.primary,
         }}  >
        <Tab.Screen name="Home" 
        component={Home} 
        options={{
          tabBarIcon:({color})=><Icon name="home-outline" size={25} color={color}/>,
          tabBarLabel:({focused})=>focused?<Text style={{marginLeft:15}} >Home</Text>:null
        }}

        />
        <Tab.Screen name="Cart" 
        component={Cart} 
        options={{tabBarIcon:({color})=><Icon name="cart-outline" size={25}  color={color}/>,
        tabBarLabel:({focused})=>focused?<Text style={{marginLeft:15}}>Cart</Text>:null
        }}
        />
        <Tab.Screen name="Account" 
        component={Account} 
        options={{tabBarIcon:({color})=><Icon name="person-outline" size={25}  color={color}/>,
        tabBarLabel:({focused})=>focused?<Text style={{marginLeft:15}}>Account</Text>:null
       }}
        />
        <Tab.Screen name="Setting" 
        component={Setting}  
        options={{tabBarIcon:({color})=><Icon name="settings-outline" size={25} color={color}/>,
        tabBarLabel:({focused})=>focused?<Text style={{marginLeft:15}}>Setting</Text>:null
       }}
        />
      </Tab.Navigator>
    )
}

export default BottomNavigation
