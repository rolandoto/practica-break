import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import ExerciseListScreens from "../../screens/Exercises/ExerciseListScreens";



const Stack = createStackNavigator();
export const name = 'ExerciseListScreens'

const ExerciseScreensStack = () =>{

  return (

    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={ExerciseListScreens} 
        options = {{title: "" }}
      />
    </Stack.Navigator> 
  );
    
}

export default ExerciseScreensStack;