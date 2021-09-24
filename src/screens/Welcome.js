import { NavigationContainer } from '@react-navigation/native'
import React,{useState,useEffect} from 'react'
import { View, Text, Image, ScrollView,TouchableOpacity } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input'
import { Button } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { connect } from 'react-redux'
import ButtonComp from '../components/ButtonComp'
import FooterComp from '../components/FooterComp'
import HeaderComp from '../components/HeaderComp'
import LogoContainer from '../components/LogoContainer'
import colors from '../constants/colors'

const Welcome = (props) => {
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
    <View style={{flex:1,alignItems:'center',padding:30}}>
          
        <View style={{width:'100%',flex:1,alignItems:'center'}}>
           
           <HeaderComp title="Welcome"/>
         
           <LogoContainer color={theme.textColor} />
           
            <Image source={require('../assets/images/verify.png')} />
            
            <View style={{alignItems:'center',paddingLeft:70,paddingRight:70,paddingTop:30,paddingBottom:5}}>
            <Text style={{fontSize:24,fontWeight:'bold',color:theme.textColor}}>Welcome Back</Text>
            <Text style={{textAlign:'center',color:theme.textColor,padding:10}}> User Name</Text>
            </View>

       </View>
       <View style={{width:'100%',flex:5}}>
           <ButtonComp title="CONTINUE AS USERNAME" onPress={()=>props.navigation.navigate("DrawerNavigation")} color={colors.primary} textColor={"white"} border={colors.primary}/>
           <ButtonComp title="SWITCH ACCOUNT" color={theme.backgroundColor} textColor={theme.textColor} border={colors.textColor} />

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



export default connect(mapStateToProps,mapDispatchToProps)( Welcome)
