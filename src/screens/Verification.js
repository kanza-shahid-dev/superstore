import React,{useState,useEffect} from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input'
import { Button } from 'react-native-paper'
import { connect } from 'react-redux'
import ButtonComp from '../components/ButtonComp'
import FooterComp from '../components/FooterComp'
import HeaderComp from '../components/HeaderComp'
import LogoContainer from '../components/LogoContainer'
import colors from '../constants/colors'

const Verification = (props) => {
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
           
           <HeaderComp title="Sign up" onPress={()=>props.navigation.navigate("Register")}/>
           <LogoContainer color={theme.textColor} />

            <Image source={require('../assets/images/verify.png')} />
            
            <View style={{alignItems:'center',paddingLeft:70,paddingRight:70,paddingTop:30,paddingBottom:5}}>
            <Text style={{fontSize:24,fontWeight:'bold',color:theme.textColor}}>Verification</Text>
            <Text style={{textAlign:'center',color:theme.textColor}}>A 5-Digit PIN has been sent to your email. Enter it below to continue</Text>
            </View>

            <View style={{marginBottom:15}}>
             <CodeInput
                activeColor='grey'
                size={51}
                fontSize={30}
                color='grey'//input color
                codeLength={5}
                space={15}
                keyboardType='phone-pad'
                codeInputStyle={{ backgroundColor:'white' }} />
            </View>

       </View>
       <View style={{width:'100%',flex:5}}>
           <ButtonComp title="CONTINUE" color={colors.primary} textColor={theme.backgroundColor} onPress={()=>props.navigation.navigate("Welcome")}/>
       </View>
       <FooterComp color={theme.textColor} textColor={theme.textColor} onPress={()=>props.navigation.navigate("Login")}/>
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



export default connect(mapStateToProps,mapDispatchToProps)( Verification)
