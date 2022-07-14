import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogginBreak from "../../screens/Account/LogginBreak";
import Routines from "../../screens/Routines/Routines";


const Tab = createBottomTabNavigator();
export const name = 'RoutinesStack'

const RoutinesStack = () =>{

  return (
    <Tab.Screen
      name={name}
      component={Routines} 
    />

  );
    
}

export default RoutinesStack;