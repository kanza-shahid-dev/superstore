import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import TabBarHeader from '../components/TabBarHeader'
import BottomNavigation from '../navigations/BottomNavigation'
import TabNavigation from '../navigations/TabNavigation'

const Home = (props) => {
    return (

        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={{flex:1}}>
            <TabBarHeader navigation={props} title="Discover"/>
            <TabNavigation/>
        </View>
       
        </ScrollView>

    )
}

export default Home
