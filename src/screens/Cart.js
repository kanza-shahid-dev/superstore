import { getFocusedRouteNameFromRoute } from '@react-navigation/core'
import React,{useState,useEffect} from 'react'
import { View, Text, Image, TouchableOpacity,FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ButtonComp from '../components/ButtonComp'
import LogoContainer from '../components/LogoContainer'
import TabBarHeader from '../components/TabBarHeader'
import TabScreenContainer from '../components/TabScreenContainer'
import colors from '../constants/colors'

const Cart = (props) => {
    const data=[
        {id:1,name:'White Dress',category:'Women',price:15,quantity:1},
        {id:2,name:'Red Dress',category:'Women',price:15,quantity:2},
    ]
    const [DATA,setDATA]=useState([])
    const [quantity,setquantity]=useState(0)
    const [price,setprice]=useState(0)
    const[subTotal,setsubTotal]=useState(30)
    useEffect(()=>{
        setDATA(data)
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
 
    function getFooter()
    {
        return <View>
                
                <Text style={[{marginBottom:15,marginTop:10,fontSize:24,fontWeight:'bold',color:theme.textColor}]}>Totals</Text>
                
                <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                    <View style={{flex:1}}><Text style={{fontSize:16,color:theme.textColor}}>Sub Total</Text></View>
                    <View style={{}}><Text style={{fontSize:18,fontWeight:'bold',color:theme.textColor}}>${subTotal}.00</Text></View>
                </View>

                <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                    <View style={{flex:1}}><Text style={{fontSize:16,color:theme.textColor}}>Shipping</Text></View>
                    <View style={{}}><Text style={{fontSize:18,fontWeight:'bold',color:theme.textColor}}>$0</Text></View>
                </View>

                <View>
                <ButtonComp title="CHECKOUT"  color={colors.primary} textColor={"white"} onPress={()=>props.navigation.navigate("Checkout")} />
                </View>

             </View>
    }
    function incrementCounter(id)
    {
        const item=DATA.find(data=>data.id==id)
           item.quantity=item.quantity+1
           item.price=item.price+10
           console.log(DATA)
           setDATA(DATA)
           setsubTotal(subTotal+10)
           setquantity(item.quantity)
           setprice(item.price)
    }
    function decrementCounter(id)
    {
        const item=DATA.find(data=>data.id==id)
       
        if(item.quantity!=0)
        {
           item.quantity=item.quantity-1
           item.price=item.price-10
           setDATA(DATA)
           setsubTotal(subTotal-10)
           setquantity(item.quantity)
           setprice(item.price)
        }
        
       
      
    }
    function deleteItem(id)
    {
        const item=DATA.filter(data=>data.id!=id)
        setDATA(item)
    }
    const FlatListItem=({item})=>
    {
        return <View style={{paddingTop:10,paddingBottom:20}}> 
            <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/images/abc.jpeg')} style={{height:120,width:120,borderRadius:20}}/>
            <View style={{flex:1, marginLeft:15}}>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <View><Text style={{fontSize:16,color:theme.textColor}}>{item.name}</Text></View>
                    <View style={{flex:1,alignItems:'flex-end'}}><Text style={{color:colors.primary,fontSize:18}}>{item.price}$</Text></View>
                </View>
                
                <View style={{flex:1}}>
                <Text style={{fontSize:13,color:theme.textColor}}>{item.category}</Text>
                </View>

{/* Quantity controller */}
                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <View style={{borderRadius:20,borderColor:theme.textColor,borderWidth:1,paddingLeft:4,paddingRight:4,alignItems:'center',backgroundColor:theme.secondaryBackgroundColor,flexDirection:'row'}}>
                      <TouchableOpacity onPress={()=>incrementCounter(item.id)}>
                         <View style={{padding:5}}>
                         <Text style={{fontSize:20,color:theme.textColor}}>+</Text>
                    {/* <Image source={require('../assets/images/plus.png')} style={{marginLeft:10,marginRight:10}}/> */}
                        </View>
                      </TouchableOpacity>
                      <Text style={{fontSize:20,marginLeft:10,marginRight:10,color:theme.textColor}}>{item.quantity}</Text>
                      <TouchableOpacity onPress={()=>decrementCounter(item.id)}>
                         <View style={{paddingTop:9,paddingBottom:9,paddingLeft:5,paddingRight:5}}> 
                         <Text style={{fontSize:20,color:theme.textColor}}>-</Text>
                         {/* <Image source={require('../assets/images/minus.png')} style={{marginLeft:10,marginRight:10}}/> */}
                         </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <TouchableOpacity onPress={()=>deleteItem(item.id)}>
                          <Image source={require('../assets/images/Icon_Delete.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
{/* End of Quantity controller */}
            </View>
            </View>
         </View>
    }
    return (

        <TabScreenContainer>

        <FlatList
        data={DATA}
        renderItem={(item)=>FlatListItem(item) }
        ListHeaderComponent={ <TabBarHeader navigation={props} title="Shopping Cart"/>}
        ListFooterComponent={getFooter}
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



export default connect(mapStateToProps,mapDispatchToProps)( Cart)
