import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper'
import { connect } from 'react-redux'
import Theme from '../assets/Theme'
import ButtonComp from '../components/ButtonComp'
import FooterComp from '../components/FooterComp'
import LogoContainer from '../components/LogoContainer'
import SocialButton from '../components/SocialButton'
import colors from '../constants/colors'

const Login = (props) => {
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
        <ScrollView contentContainerStyle={{flexGrow:1}}>
   
        <View style={{flex:1,backgroundColor:theme.backgroundColor}}>
            <View style={{flex:3, backgroundColor:theme.backgroundColor}}>
            <LogoContainer color={theme.textColor}/>
            </View>
            <View style={{flex:3,borderWidth:1,backgroundColor:theme.backgroundColor,borderTopLeftRadius:50,borderTopRightRadius:50}}>
                <View style={{flex:1,paddingTop:30,paddingBottom:30,paddingLeft:40,paddingRight:40,alignItems:'center', backgroundColor:'white',elevation:10,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
                    <Text style={{fontSize:22,fontWeight:'900'}}>Welcome</Text>
                    <Text style={{textAlign:'center'}}>Sign up to get started and experience great shopping deals</Text>
                    
                    <View style={{ flex:1,height:50,marginTop:10,marginBottom:10,width:'100%'}}>
                    <TextInput label="Username" keyboardType="email-address" theme={{colors:{primary:'grey',placeholder:'black',text:'black'}}} style={styles.textInput}></TextInput>
                    </View>
                    <View style={{flex:1,height:50,marginTop:10,marginBottom:10,width:'100%'}}>
                    <TextInput label="Password" secureTextEntry={true} theme={{colors:{primary:'grey',placeholder:'black',text:'black'}}} style={styles.textInput}></TextInput>
                    </View>

                    <View style={{width:'100%',flex:1,marginTop:30}}>
                    <ButtonComp title="SIgn In" color={colors.primary} textColor={"white"} onPress={()=>props.navigation.navigate("Verification")}/>
                    </View>

                </View>
                <View style={{flex:1,alignItems:'center',paddingLeft:40,paddingRight:40,paddingBottom:5,paddingTop:5}}>
                    
                    <View style={{margin:10}}><Text style={{fontSize:16,color:theme.textColor}}>-OR-</Text></View>
                    <SocialButton title="Facebook" color="blue" textColor={theme.textColor}/>
                    <SocialButton title="Google" color="red" textColor={theme.textColor}/>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}>
                  
                    <FooterComp color={theme.textColor} textColor={theme.textColor} onPress={()=>props.navigation.navigate("Login")}/>
                    </View>
                  

               </View>

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

const styles=StyleSheet.create({
    textInput:{
        fontSize:17,
        marginTop:5,
        marginBottom:5,
        backgroundColor:'transparent',
        borderBottomWidth:1,
        borderColor:'white'
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)
