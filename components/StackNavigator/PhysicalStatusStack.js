import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routines from "../../screens/Routines/Routines";


const Stack = createStackNavigator();
export const name = 'PhysicalStatusStack'

const PhysicalStatusStack = () =>{

  return (
    <Stack.Navigator>
        <Stack.Screen
            name={name}
            component={Routines} 
        />
    </Stack.Navigator>
    

  );
    
}

export default PhysicalStatusStack;