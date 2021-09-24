import React,{useState,useEffect} from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import TabScreenContainer from '../../components/TabScreenContainer'
import colors from '../../constants/colors'
import styleSheet from '../../constants/styleSheet'

const All = (props) => {
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
    const data=[
        {id:1,name:'White Top',price:'15$'},
        {id:2,name:'Red Dress',price:'15$'},
        {id:3,name:'Cool Hat',price:'15$'},
        {id:4,name:'Black jeans',price:'15$'},
    ]
    return (
        <TabScreenContainer>
            
           <FlatList
           data={data}
           key={2}
           numColumns={2}
           renderItem={({item})=>
           <View  
            style={{width:'50%'}} >
           <ProductItem title={item.name} price={item.price} textColor={theme.textColor} />
           </View>

        }
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
export default connect(mapStateToProps,mapDispatchToProps)(All)
