import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Checkout from '../screens/Checkout';
import Welcome from '../screens/Welcome';
import CustomDrawer from './CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../constants/colors';
import Home from '../screens/Home';
import BottomNavigation from './BottomNavigation';


const DrawerNavigation = () => {
    const navigation=createDrawerNavigator();
    return (
        <navigation.Navigator initialRouteName="Welcome" drawerContent={(props)=><CustomDrawer {...props}/>} screenOptions={{headerShown:false, labelStyle: {
            color: 'white',
          },}} >

        <navigation.Screen 
        name="Home" 
        component={BottomNavigation} 
        options={{
            drawerIcon:()=><Image source={require('../assets/images/icon_home.png')}/> ,
            drawerLabel:()=><Text style={styles.text}>Home</Text>}}
        />

        <navigation.Screen 
        name="Catalog" 
        component={Checkout} 
        options={{drawerIcon:()=><Image source={require('../assets/images/Icon_Catalog.png')}/>, 
        drawerLabel:()=><Text style={styles.text}>Catalog</Text>}}
        />

        <navigation.Screen 
        name="Category" 
        component={Checkout} 
        options={{drawerIcon:()=><Image source={require('../assets/images/Icon_Category.png')}/>,
        drawerLabel:()=><Text style={styles.text}>Category</Text>}}
        />

        <navigation.Screen 
        name="Collection" 
        component={Checkout} 
        options={{drawerIcon:()=><Image source={require('../assets/images/Icon_Collection.png')}/>,
        drawerLabel:()=><Text style={styles.text}>Collection</Text>}}
        />

        <navigation.Screen 
        name="Products" 
        component={Checkout} 
        options={{drawerIcon:()=><Image source={require('../assets/images/Icon_Product.png')}/>,
        drawerLabel:()=><Text style={styles.text}>Products</Text>}}
        />

        <navigation.Screen 
        name="Wishlist" 
        component={Checkout} 
        options={{drawerIcon:()=><Image source={require('../assets/images/icon_like.png')}/>,
        drawerLabel:()=><Text style={styles.text}>Wishlist</Text>}}
        />

    </navigation.Navigator>
    )
}

const styles=StyleSheet.create({
    text:{
        color:'white',
        fontSize:16,
    }
})

export default DrawerNavigation
