import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{useState,useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import SwitchSelector from 'react-native-switch-selector'
import { connect } from 'react-redux'
import Theme from '../assets/Theme'
import Dark from '../assets/themes/Dark'
import Light from '../assets/themes/Light'
import ButtonComp from '../components/ButtonComp'
import SettingItem from '../components/SettingItem'
import TabBarHeader from '../components/TabBarHeader'
import TabScreenContainer from '../components/TabScreenContainer'
import colors from '../constants/colors'
import * as ActionTypes from '../redux/ActionTypes'

const Setting = (props) => {
    useEffect(()=>{
        if(props.theme.theme=="Light")
       {
            setIsLighttheme(true)
            setTheme(Theme.Light)}
        else 
        {
            setIsLighttheme(false)
            setIsLighttheme(Theme.Dark)
         }
        
    },[theme])
    const [theme,setTheme]=useState(Theme.Light)
    const [IsLighttheme,setIsLighttheme]=useState(true)
    
  
    const themeOptions=[
        {
            label:'Light',value:'0',activeColor:'grey'
        },
        {
            label:'Dark',value:'1',activeColor:'black'
        },
    ]
    const changeTheme= async(value)=>
    {
        if(value==0)
           {
               setTheme(Theme.Light) 
           props.SetTheme("Light")

               try{
                await AsyncStorage.setItem('Theme',"Light") 
                props.navigation.reset({
                    index:0,
                    routes:[{name:"DrawerNavigation"}]
                })
             }
                catch(error)
                {
                  
                }
           }
        else if(value==1)
           {
            setTheme(Theme.Dark)
           props.SetTheme("Dark")

            try{
                await AsyncStorage.setItem('Theme',"Dark")
                props.navigation.reset({
                    index:0,
                    routes:[{name:"DrawerNavigation"}]
                })
              }
                catch(error)
                {
    
                }
           }

         
    }

    
    return (

        <TabScreenContainer>
            <TabBarHeader navigation={props} title="Settings"/>
      
            <View style={{padding:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{color:theme.textColor}}>Select Theme</Text>
            
            {IsLighttheme?
                  <SwitchSelector
                  options={themeOptions}
                  initial={0}
                  onPress={value=>changeTheme(value)}
                  selectedColor="white"
                  buttonColor="black"
                  style={{width:130,borderWidth:1,borderColor:'grey',borderRadius:50,marginLeft:10}}    />
                :
                <SwitchSelector
                options={themeOptions}
                initial={1}
                onPress={value=>changeTheme(value)}
                selectedColor="white"
                buttonColor="black"
                style={{width:130,borderWidth:1,borderColor:'grey',borderRadius:50,marginLeft:10}}    />
            }
          </View>


<View style={{padding:10}}>

            <Text style={{fontSize:16,color:theme.textColor,marginTop:10,marginBottom:10}}>
                Your App Settings 
            </Text>

            <SettingItem title="Notifications" isOn="true" description="Recieve notifications on latest offers and store updates"/>

            <SettingItem title="Popups" isOn={true} description="Disable all popups and adverts from third party vendors"/>
    
            <SettingItem title="Order History" description="Disable all popups and adverts from third party vendors"/>
    
      </View>
          
            <ButtonComp title="UPDATE SETTINGS" color={colors.primary} textColor={theme.backgroundColor} onPress={()=>props.navigation.navigate("Account")}/>
           
        </TabScreenContainer>
    )
}
const mapStateToProps=(state)=>({theme:state.theme});
const mapDispatchToProps=(dispatch)=>({
    SetTheme:(theme)=>
    {
        console.log("TT",theme)
    dispatch({
        type:ActionTypes.DefaultTheme,
        payload:{
            theme
        },
    })
}
});
export default connect(mapStateToProps,mapDispatchToProps)(Setting)
