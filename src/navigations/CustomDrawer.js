import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import colors from '../constants/colors'

const CustomDrawer = (props) => {
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>

        {/* Header */}
        <View style={{backgroundColor:colors.secondary,height:200,padding:20}}>
            <Image source={require('../assets/images/userDrawer.png')}  />
            <Text style={{fontSize:24,color:'white',fontWeight:'bold'}}>User Name</Text>
            <Text style={{fontSize:17,color:'white'}}>@email</Text>
        </View>

         {/* Item List */}
         <View style={{flex:1,backgroundColor:colors.drawerItems}}>
        <DrawerContentScrollView {...props} >
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        </View>


          {/* Footer */}
          <View style={{justifyContent:'flex-end', backgroundColor:colors.drawerItems,padding:20}}>
            <Text style={{fontSize:17,color:'white',marginBottom:20}}>About us</Text>
            <Text style={{fontSize:17,color:'white',marginBottom:20}}>Log Out</Text>
        </View>

        </ScrollView>
    )
}

export default CustomDrawer
