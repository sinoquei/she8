import { View, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Colors from "../../color";
import Orders from "./Orders";
import Profile from "./Profile";

const renderScene = SceneMap({
    first:Profile,
    second:Orders
})

export default function Tabs() {
    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        {
            key:'first',
            title:'PROFILE'
        },
        {
            key:'second',
            title:'ORDERS'
        }
    ]);

    const renderTabsBar = (props) => (
        <TabBar 
            {...props} 
            tabStyle={styles.tabStyle} 
            indicatorStyle={{backgroundColor: Colors.main}}
            activeColor={Colors.main}
            inactiveColor={Colors.white}
            renderLabel={({ route,color}) => (
                <Text style={{ color, ...styles.text }}>{route.title}</Text>
            )}
        />
    );

    return (
       <TabView 
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabsBar}
        />
    );
}

const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor:'#5F835F',
    },
    text:{
        fontSize: 13,
        fontWeight:'bold'
    }
})