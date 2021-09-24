import React,{useState,useEffect} from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input'
import { Button } from 'react-native-paper'
import { connect } from 'react-redux'
import ButtonComp from '../components/ButtonComp'
import LogoContainer from '../components/LogoContainer'
import colors from '../constants/colors'

const Checkout = (props) => {
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
    <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor:theme.backgroundColor}}>
    <View style={{flex:1,alignItems:'center',padding:20}}>
          
        <View style={{width:'100%',flex:1,alignItems:'center'}}>
           
            <Image source={require('../assets/images/orderAccept.png')} />
            
            <View style={{alignItems:'center',paddingLeft:70,paddingRight:70,paddingTop:30,paddingBottom:5}}>
            <Text style={{fontSize:24,fontWeight:'700',color:theme.textColor}}>Order Accepted</Text>
            <Text style={{textAlign:'center',color:theme.textColor,marginTop:20}}>Your Order No. #123-456 {'\n'} has been placed</Text>
            </View>
       </View>
       <View style={{width:'100%',flex:5}}>
           <ButtonComp title="TRACK ORDER" color={colors.primary} textColor={theme.backgroundColor} onPress={()=>props.navigation.navigate("Welcome")}/>
       </View>
    </View>
    </ScrollView>
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



export default connect(mapStateToProps,mapDispatchToProps)( Checkout)
