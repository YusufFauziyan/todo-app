import * as React from "react";
//Navigation Container
import { NavigationContainer } from "@react-navigation/native"
//Stack Navigation
import { createStackNavigator } from "@react-navigation/stack"
//Screen
import List from "./components/List";
import Input from "./components/Input";
import Edit from "./components/Edit";
import Detail from "./components/Detail";
import Calculator from "./components/Calculator";
// Create Stack Navigation
const Stack = createStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "#fff",
          headerStyle: {backgroundColor: '#18181b'},
          headerShadowVisible: false,
        }}
      >

        <Stack.Screen
          name="List"
          component={List}
          options={{
            title: "Todo List",
            headerShown: false
          }}
        />
        
        <Stack.Screen
          name="Input"
          component={Input}
          options={{
            title: "Input",
          }}
        />

        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            title: "Edit",
          }}
        /> 

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: "Todo"
          }}
        />

        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{
            title: "Calcultaor",
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}