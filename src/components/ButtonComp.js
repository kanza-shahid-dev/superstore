import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonComp = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{width:'100%',borderWidth:1,borderColor:props.textColor,backgroundColor:props.color,alignItems:'center', padding:13,marginTop:5,marginBottom:5,borderRadius:20}}>
                <Text style={{fontSize:15,color:props.textColor,fontWeight:'900'}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonComp
