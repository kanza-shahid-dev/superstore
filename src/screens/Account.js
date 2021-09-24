import React,{useState,useEffect} from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import  Icon  from 'react-native-vector-icons/SimpleLineIcons'
import { connect } from 'react-redux'
import Theme from '../assets/Theme'
import AccountScreenList from '../components/AccountScreenList'
import TabBarHeader from '../components/TabBarHeader'
import TabScreenContainer from '../components/TabScreenContainer'

const Account = (props) => {
    useEffect(()=>{
        setDATA(List)
        console.log("DATA",List)
        console.log("---->",props.theme.theme)
        if(props.theme.theme=="Light")
       {
            setTheme(Theme.Light)}
        else 
        {
            setTheme(Theme.Dark)
         }
        
    },[])
    const [DATA,setDATA]=useState([])
    const [theme,setTheme]=useState(Theme.Light)
    const List=[
        {id:1,name:'Edit Profile',onPress:"Checkout",icon:require("../assets/images/Icon_pink_Edit.png")},
        {id:1,name:'Shipping Address',onPress:"Cart",icon:require("../assets/images/Icon_pink_Location.png")},
        {id:2,name:'Wish List',onPress:"Cart",icon:require("../assets/images/Icon_pink_Wishlist.png")},
        {id:3,name:'Order History',onPress:"Cart",icon:require("../assets/images/Icon_pink_History.png")},
        {id:3,name:'Track Order',onPress:"Cart",icon:require("../assets/images/Icon_pink_Order.png")},
        {id:3,name:'Cards',onPress:"Cart",icon:require("../assets/images/Icon_pink_Payment.png")},
        {id:3,name:'Notifications',onPress:"Cart",icon:require("../assets/images/Icon_pink_Alert.png")},
        {id:3,name:'Log Out',onPress:"Cart",icon:require("../assets/images/Icon_pink_Exit.png")},
    ]
    function getHeader()
    {
        return <View>
        <TabBarHeader navigation={props} title="Account"/>
        <View style={{flexDirection:'row'}}>
               <Image source={require('../assets/images/abc.jpeg')} style={{height:100,width:100,borderRadius:100,marginTop:10,marginBottom:10}}/>
           <View style={{flex:1,marginLeft:35,alignItems:'flex-start',justifyContent:'center'}}>
            <Text style={{fontSize:17,color:theme.textColor}}>User Name</Text>
            <Text style={{color:theme.textColor}}>Email@gmail.com</Text>
            </View>
            </View>
            </View>
    }
    return (
        <TabScreenContainer>
             <FlatList
        data={DATA}
        renderItem={({item})=>{ return <AccountScreenList title={item.name} icon={item.icon}  color={theme.textColor} onPress={()=>props.navigation.navigate(item.onPress)} color={theme.textColor}/>
        }}
        ListHeaderComponent={ getHeader()}
        />
           


        </TabScreenContainer>
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
export default connect(mapStateToProps,mapDispatchToProps)(Account)
