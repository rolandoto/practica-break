import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../../screens/Home/HomeScreens";



const Stack = createStackNavigator();
export const name = 'Home'

const HomeStack = () =>{

  return (
    <Stack.Screen
      name={name}
      component={HomeScreen} 
    />

  );
    
}

export default HomeStack;