import React,{useState,useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import CategoryProductItem from '../../components/CategoryProductItem'
import TabScreenContainer from '../../components/TabScreenContainer'

const Women = (props) => {
    const data=[
        {name:'DRESS'},
        {name:'JEANS'},
        {name:'HATS'},
        {name:'TOPS'},
        {name:'SCARFS'},
        {name:'COATS'},

    ]
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
        <TabScreenContainer>
            <View style={{margin:10}}>
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Women</Text>
            <Text style={{fontSize:15,padding:10,textAlign:'center'}}>Believe in yourself,take on your challanges,dig within yourself to conquer fears.</Text>
            </View>

            <FlatList
            data={data}
            key={2}
            numColumns={2}
            renderItem={({item})=>{
                return  <View  
                style={{width:'50%'}} >
               <CategoryProductItem title={item.name} price={item.price} textColor={theme.backgroundColor} />
               </View>
            }}
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
export default connect(mapStateToProps,mapDispatchToProps)(Women)
