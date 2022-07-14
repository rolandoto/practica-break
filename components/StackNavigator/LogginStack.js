import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogginBreak from "../../screens/Account/LogginBreak";



const Tab = createBottomTabNavigator();
export const name = 'LogginBreak'

const LogginStack = () =>{

  return (
    <Tab.Screen
      name={name}
      component={LogginBreak} 
    />

  );
    
}

export default LogginStack;