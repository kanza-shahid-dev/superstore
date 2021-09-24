import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const HeaderComp = (props) => {
    return (
        <View style={{alignItems:'flex-end',width:'100%',marginTop:10}}>
            <TouchableOpacity onPress={props.onPress}>
            <Text style={{color:'red',fontSize:18}}>{props.title}</Text>
            </TouchableOpacity>
        </View>

    )
}

export default HeaderComp
