import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const AccountScreenList = (props) => {
    const icon=props.icon;
    useEffect(()=>{
        console.log(props )
    },[])
 
    return (
        <TouchableOpacity onPress={props.onPress} style={{padding:15,flexDirection:'row',alignItems:'center'}}>
            <Image source={props.icon}/>
            <View style={{flex:2}}>
                <Text style={{fontSize:18,paddingLeft:15,paddingRight:12,color:props.color}}>{props.title}</Text>
            </View>
            <View style={{alignItems:'flex-end',flex:1}}><Icon name="arrow-right" size={15} color={props.color}/>
            </View>
        </TouchableOpacity>
             
    )
}

export default AccountScreenList
