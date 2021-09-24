import React from 'react'
import { View, Text } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'

const SocialButton = (props) => {
    return (
        <View style={{width:'100%'}}>
            <View style={{width:'100%', borderWidth:1,borderColor:'grey',padding:10,marginTop:5,marginBottom:5,borderRadius:20,flexDirection:'row'}}>
              <View style={{paddingLeft:20}}>
                <Icon name={"logo-"+props.title.toLowerCase()} color={props.color} size={22}/>
               </View>
              <View style={{flex:2}}>
                <Text style={{textAlign:'center',color:props.textColor}}>Sign In with {props.title}</Text>
              </View>
            </View>
        </View>
    )
}

export default SocialButton
