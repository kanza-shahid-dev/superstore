import { NavigationContainer } from '@react-navigation/native'
import React,{useState,useEffect} from 'react'
import { View, Text, Image, ScrollView,TouchableOpacity, StyleSheet } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input'
import { Button, TextInput } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { connect } from 'react-redux'
import ButtonComp from '../components/ButtonComp'
import LogoContainer from '../components/LogoContainer'
import colors from '../constants/colors'

const Register = (props) => {
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
           
           <TouchableOpacity onPress={()=>props.navigation.navigate("Register")} style={{alignItems:'flex-end',width:'100%',marginTop:10}}><Text style={{color:'red',fontSize:18}}>Sign up</Text></TouchableOpacity>
           <LogoContainer color={theme.textColor} />
           
            <Image source={require('../assets/images/verify.png')} />
            
                <View style={{ flex:1,height:50,marginTop:10,marginBottom:10,width:'100%'}}>
                <TextInput label="Username" theme={{colors:{primary:'grey',placeholder:'black',text:'black'}}} style={styles.textInput}></TextInput>
                </View>

                <View style={{flex:1,height:50,marginTop:10,marginBottom:10,width:'100%'}}>
                <TextInput label="Email" keyboardType="email-address" theme={{colors:{primary:'grey',placeholder:'black',text:'black'}}} style={styles.textInput}></TextInput>
                </View>

                <View style={{flex:1,height:50,marginTop:10,marginBottom:10,width:'100%'}}>
                <TextInput label="Password" secureTextEntry={true} theme={{colors:{primary:'grey',placeholder:'black',text:'black'}}} style={styles.textInput}></TextInput>
                </View>

                <View style={{marginTop:20,marginBottom:20,width:'100%',alignItems:'flex-end'}}>
                <Text>Forgot Password?</Text></View>

       </View>
       <View style={{width:'100%',flex:5}}>
           <ButtonComp title="SIGN UP" onPress={()=>props.navigation.navigate("Setting")} color={colors.primary} textColor={"white"} border={colors.primary}/>
       </View>

       <Text style={{color:theme.textColor}}>Already have an account? SIgn In</Text>
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


export default connect(mapStateToProps,mapDispatchToProps)( Register)
