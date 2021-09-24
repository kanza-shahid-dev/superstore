import React from 'react'
import { View, Text,Image } from 'react-native'
import Theme from '../assets/Theme'
import colors from '../constants/colors'

const CategoryProductItem = (props) => {
    return (
        <View style={{margin:20,borderRadius:40,borderColor:'grey',borderWidth:1}}>
               
        {/*Header */}
         <View style={{padding:10,borderTopLeftRadius:30,borderTopRightRadius:20,borderBottomEndRadius:20,marginRight:50,backgroundColor:colors.primary}}>
           <View><Text style={{fontWeight:'bold',fontSize:16,color:props.textColor}}>{props.title}</Text></View>
         </View>
        
         {/*Body */}
         <View style={{height:160}}>

         </View>

     </View>
    )
}

export default CategoryProductItem
