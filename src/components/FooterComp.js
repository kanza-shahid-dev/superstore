import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'

const FooterComp = (props) => {
    return (
        <View style={{flexDirection:'row'}}>
        <View>
           <Text style={{color:props.textColor}}>Already have an account? </Text>
        </View>
        <TouchableOpacity onPress={props.onPress}>
        <Text style={{color:colors.primary,fontWeight:'600'}}>Sign In</Text>
     </TouchableOpacity>
     </View>
    )
}

export default FooterComp
