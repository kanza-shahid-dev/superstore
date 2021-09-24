import React from 'react'
import { View, Text } from 'react-native'

const LogoContainer = (props) => {
    return (
        <View>
            <View style={{alignItems:'center',justifyContent:'flex-start'}}>
                <Text style={{color:props.color,fontSize:34}}>Superstore</Text>
                <Text style={{color:props.color,fontSize:13}}>FASHION</Text>
            </View> 
        </View>
    )
}

export default LogoContainer
