import React,{useState,useEffect, Children} from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styleSheet from '../constants/styleSheet'
import TabBarHeader from './TabBarHeader'

const TabScreenContainer = (props) => {
    useEffect(()=>{
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
        <View style={[styleSheet.TabScreenContainer,{backgroundColor:theme.backgroundColor}]}>
         {props.children}
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
export default connect(mapStateToProps,mapDispatchToProps)(TabScreenContainer)
