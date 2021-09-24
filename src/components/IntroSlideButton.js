import React from 'react'
import { View, Text } from 'react-native'

const IntroSlideButton = (props) => {
    return (
        <View>
        <View style={{backgroundColor:'#FA4248',flexDirection:'row',borderRadius:80,paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10}}>
          <Text style={{color:'white',fontSize:14}}>{props.title}</Text>
          <Text style={{color:'white',fontSize:14}}>  -</Text>
        </View>
  </View> 
    )
}

export default IntroSlideButton
