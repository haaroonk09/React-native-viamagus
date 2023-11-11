import React from "react";
import { Platform, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import Badges from "../screens/Badges";
import GamesPlayed from "../screens/GamesPlayed";

const Tab = createMaterialTopTabNavigator();

function TopNavigator() {
  return (
    <Tab.Navigator style={{borderTopColor:"#F3F2F7",borderTopWidth:4}}
    screenOptions={() => ({
        tabBarActiveTintColor: "#6231AD",
        tabBarInactiveTintColor: "#727682",
        tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "500",
            paddingBottom: Platform.OS === 'ios' ? 0 : 5
        }
    })}>
      <Tab.Screen name="Games played" component={GamesPlayed} />
      <Tab.Screen name="Badges" component={Badges} />
    </Tab.Navigator>
  );
}

export default TopNavigator;
