import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{useState,useEffect} from 'react'
import { View, Text, FlatList,Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { connect } from 'react-redux'
import IntroSlideButton from '../components/IntroSlideButton'
import * as ActionTypes from '../redux/ActionTypes'
const Intro = (props) => {

  useEffect(()=>{
    try{
      AsyncStorage.getItem('Theme')
     .then(value=> 
      {
        console.log(value)
        //set in redux
        props.SetTheme(value)
       })
     }
     catch(error)
     {}
  },[])

  
    const slides = [
        {
          key: 'one',
          logo:'Superstore',
          logoDetail:'FASHION',
          title: 'WELCOME',
          text: 'Sign up to get started',
          image: require('../assets/images/abc.jpeg'),
          description:'',
          backgroundColor: '#4E4E4E',
        },
        {
          key: 'two',
          logo:'Superstore',
          logoDetail:'FASHION',
          title: 'Welcome',
          text: 'Sign up to get started',
          image: require('../assets/images/abc.jpeg'),
          description:'Sign up to get Started and experience great shopping deals',
          backgroundColor: '#2B2B2B',
        },
      
      ];

    return (
            <AppIntroSlider
            data={slides}
            renderItem={({item})=>{
                return( 
                <View style={{backgroundColor:item.backgroundColor,flex:1,padding:30}}>
                     <View style={{alignItems:'center',justifyContent:'flex-start'}}>
                    <Text style={{color:'white',fontSize:24}}>{item.logo}</Text>
                    <Text style={{color:'white',fontSize:13}}>{item.logoDetail}</Text>
                    </View> 
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:24}}>{item.title}</Text>
                    <Text style={{color:'white',fontSize:18,textAlign:'center'}}>{item.description}</Text>
                    </View> 
                </View>
                )
            }}
            renderNextButton={()=> <IntroSlideButton title="Next"/>}
            renderDoneButton={()=> <IntroSlideButton title="Get Started"/>}
            onDone={()=>props.navigation.navigate("Login")}
            />
    )
}

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
export default connect(null,mapDispatchToProps)( Intro)
