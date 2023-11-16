import { createStackNavigator } from "@react-navigation/stack";
import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./src/EventNavigator/Bottom";
import Games from "./src/screens/Games";

function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={BottomNavigator} />
          <Stack.Screen name="Today's Games" component={Games} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;