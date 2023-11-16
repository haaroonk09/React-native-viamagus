import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import Leagues from "../screens/NavScreens/Leagues";
import Research from "../screens/NavScreens/Research";
import Leaderboard from "../screens/NavScreens/Leaderboard";
import Profile from "../screens/NavScreens/ProfilePage";
import ProfilePage from "../screens/NavScreens/ProfilePage";

const BottomNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }: { route: any }) => ({
                tabBarIcon: ({ focused, color }: { focused: any; color: any }) => {
                    let iconName: any;
                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Leagues") {
                        iconName = focused ? "trophy" : "trophy-outline";
                    } else if (route.name === "Research") {
                        iconName = focused ? "search" : "search-outline";
                    } else if (route.name === "Leaderboard") {
                        iconName = focused ? "podium" : "podium-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    }
                    return <Icon name={iconName} size={24} color={color} />;
                },
                tabBarActiveTintColor: "#6231AD",
                tabBarInactiveTintColor: "#B5C0C8",
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                    paddingBottom: Platform.OS === 'ios' ? 0 : 5
                },
                tabBarStyle: {
                    backgroundColor: "#fff",
                    height: Platform.OS === 'ios' ? 80 : 60
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Leagues"
                component={Leagues}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Research"
                component={Research}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Leaderboard"
                component={Leaderboard}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfilePage}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

BottomNavigator.navigationOptions = (props: any) => ({
    headerTitle: "Events",
    drawerIcon: (prop: any) => {
        return <Icon name="calendar-outline" size={18} color={prop.color} />
    }
});

export default BottomNavigator;

const styles = StyleSheet.create({});