import React from 'react'
import { View, Text, Image } from 'react-native'
import colors from '../constants/colors'

const ProductItem = (props) => {
    return (
        <View style={{margin:20}}>
               
        {/*Header */}
         <View>
           <View><Text style={{fontWeight:'bold',fontSize:16,color:props.textColor}}>{props.title}</Text></View>
           <View><Text style={{color:colors.primary,fontSize:18}}>{props.price}</Text></View>
         </View>
        
         {/*Body */}
         <View style={{height:120}}>

         </View>

         {/*Footer */}
         <View style={{backgroundColor:colors.silver,alignItems:'flex-end'}}>
             <Image source={require('../assets/images/icon_cart.png')} style={{width:18,height:18,margin:12}}/>
             <Image source={require('../assets/images/icon-blacklike.png')} style={{width:18,height:18,margin:12}} />
         </View>
     </View>
    )
}

export default ProductItem
