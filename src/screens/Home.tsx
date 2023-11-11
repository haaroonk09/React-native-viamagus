import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../styles/styles";
import Profile from "./HomeComps/Profile";
import Statistics from "./HomeComps/Statistics";
import Tabs from "./HomeComps/Tabs";

function Home(props:any) {
  const { navigation } = props;
  console.log(navigation,"navi")

  return (
    <View style={[globalStyles.full, globalStyles.backgroundWhite]}>
      <ScrollView>
        <Profile navigation={navigation}/>
        <Statistics />
        <Tabs />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
  
});

export default Home;
