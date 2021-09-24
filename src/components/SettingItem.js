import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import SwitchSelector from 'react-native-switch-selector'
import { connect } from 'react-redux'
import colors from '../constants/colors'

const SettingItem = (props) => {
    const isOn=props.isOn
    useEffect(()=>{
       
        console.log("---->",props.theme.theme)
        if(props.theme.theme=="Light")
       {
            setTheme(Theme.Light)}
        else 
        {
            setTheme(Theme.Dark)
         }
        
    },[])
    const Onoffbutton=[
        {
           value:'0',activeColor:colors.grey
        },
        {
            value:'1',activeColor:colors.primary
        },
    ]
    const [theme,setTheme]=useState(Theme.Light)
  
    return (
        <View style={{}}>
        <Text style={{fontSize:16,fontWeight:'bold',color:theme.textColor,marginTop:20,marginBottom:15}}>
          {props.title}
        </Text>
           <View style={{flexDirection:'row'}}>
            <View style={{flex:3}}>
            <Text style={{color:theme.textColor,marginBottom:30}}>
            {props.description}
            </Text>
            </View>
               {isOn?
                <View style={{flex:1,alignItems:'flex-end'}}>
                <SwitchSelector
                    options={Onoffbutton}
                    initial={1}
                    height={25}
                    style={{width:50,elevation:30,borderRadius:50}}    />
                </View>
                :
                <View style={{flex:1,alignItems:'flex-end'}}>
                <SwitchSelector
                    options={Onoffbutton}
                    initial={0}
                    selectedColor="white"
                    buttonColor="red"
                    height={25}
                    style={{width:50,elevation:30,borderRadius:50}}    />
                </View>
                }
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
export default connect(mapStateToProps,mapDispatchToProps)(SettingItem)

