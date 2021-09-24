import React,{useState,useEffect} from 'react'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import colors from '../constants/colors'

const TabBarHeader = (props) => {
    useEffect(()=>{
        console.log("*",props.navigation.navigation)
        console.log("->",props.theme.theme)
        if(props.theme.theme=="Light")
       {
            setTheme(Theme.Light)}
        else 
        {
            setTheme(Theme.Dark)
        }
    },[])
    const [theme,setTheme]=useState(Theme.Light)
   
    return (
        <View style={{paddingTop:20,paddingBottom:10,flexDirection:'row',backgroundColor:theme.backgroundColor}}>
            <TouchableOpacity onPress={()=>props.navigation.navigation.toggleDrawer()} style={{flex:1,justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                <Image source={require('../assets/images/menu.png')} style={{margin:10}} />
            </TouchableOpacity>
            <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:23,color:colors.primary}}>{props.title}</Text>
            </View>
            <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                <Image source={require('../assets/images/Icons-search-gray.png')} style={{margin:10}} />
                <Image source={require('../assets/images/Icons-filter-gray.png')} style={{margin:10}}/>
            </View>
        </View>
    )
}

const mapStateToProps=(state)=>({theme:state.theme});
const mapDispatchToProps=(dispatch)=>({
    SetTheme:(theme)=>
    {
    dispatch({
        type:ActionTypes.DefaultTheme,
        payload:{
            theme
        },
    })
}
});
export default connect(mapStateToProps,mapDispatchToProps)(TabBarHeader)

