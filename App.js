//                                       Archivo principal del proyecto 


import 'react-native-gesture-handler';
import React from 'react';
import { Icon } from '@rneui/base';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LogginStack  from './components/StackNavigator/LogginStack';
import CreateAccountStack from './components/StackNavigator/CreateAccountStack';
import PhysicalStatusStack from './components/StackNavigator/PhysicalStatusStack';
import RoutinesStack from './components/StackNavigator/RoutinesStack'
import HomeStack from './components/StackNavigator/HomeStack';
import ExerciseScreensStack from './components/StackNavigator/ExerciseScreensStack';
import UserProfileStack from './components/StackNavigator/UserProfileStack';


const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          tabBarOptions={{
            activeTintColor: '#efb810',
            tabBarinactiveTintColor: 'black'
          }}
          screenOptions = {({ route }) =>({
            tabBarIcon: ({ color }) => screenOptions(route, color)
          })}

          >
          <Tab.Screen
          name='LogginBreak'
          component={LogginStack}
          options={( {navigation} ) =>({
            title: 'Loggin',
            headerStyle: {backgroundColor: '#efb810'},
            headerTitleStyle: {color: 'whitesmoke'},
            headerRight: () => (
              <TouchableOpacity onPress={ () => navigation.navigate('Home')}> 
              <Text>Home</Text>
              </TouchableOpacity>
            ), 
          })} 
          />
          <Tab.Screen
            name='CreateAccount'
            component={CreateAccountStack}
            options={( {navigation} ) =>({
              title: 'Crear cuenta',
              headerStyle: {backgroundColor: '#efb810'},
              headerTitleStyle: {color: 'whitesmoke'},
              headerRight: () => (
                <TouchableOpacity onPress={ () => navigation.navigate('Home')}> 
                <Text>Home</Text>
                </TouchableOpacity>
              ), 
            })}
          />
          <Tab.Screen
            name='PhysicalState'
            component={PhysicalStatusStack}
            options={( {navigation} ) =>({
              title: 'Mi estado',
              headerStyle: {backgroundColor: '#efb810'},
              headerTitleStyle: {color: 'whitesmoke'},
              headerRight: () => (
                <TouchableOpacity onPress={ () => navigation.navigate('Home')}> 
                <Text>Home</Text>
                </TouchableOpacity>
              ), 
            })}
          /> 
          <Tab.Screen
            name='RoutinesStack'
            component={RoutinesStack}
            options={( {navigation} ) =>({
              title: 'Mis Rutinas',
              headerStyle: {backgroundColor: '#efb810'},
              headerTitleStyle: {color: 'whitesmoke'},
              headerRight: () => (
                <TouchableOpacity onPress={ () => navigation.navigate('Home')}> 
                <Text>Home</Text>
                </TouchableOpacity>
              ), 
            })} 
          />
          <Tab.Screen
            name='Home'
            component={HomeStack}
            options={( {navigation} ) =>({
              title: 'Menú',
              headerStyle: {backgroundColor: '#efb810'},
              headerTitleStyle: {color: 'whitesmoke'},
              headerRight: () => (
                <TouchableOpacity onPress={ () => navigation.navigate('ExerciseListScreens')}> 
                <Text>Ejercicios</Text>
                </TouchableOpacity>
              ), 
            })} 
          />
          <Tab.Screen 
            name='ExerciseScreensStack'
            component={ExerciseScreensStack}
            options={( {navigation} ) =>({
              title : 'Ejercicios',
              headerStyle: {backgroundColor: '#efb810'},
              headerTitleStyle: {color: 'whitesmoke'},
              headerRight: () => (
                <TouchableOpacity onPress={ () => navigation.navigate('Home')}> 
                <Text>Home</Text>
                </TouchableOpacity>
              ), 
            })} 
          />
          <Tab.Screen 
            name='UserProfileStack'
            component={UserProfileStack}
            options={( {navigation} ) =>({
              title : 'Cuenta',
              headerStyle: {backgroundColor: '#efb810'},
              headerTitleStyle: {color: 'whitesmoke'},
              headerRight: () => (
                <TouchableOpacity onPress={ () => navigation.navigate('Home')}> 
                <Text>Home</Text>
                </TouchableOpacity>
              ), 
            })} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
      
    
  )
}

const screenOptions = (route, color ) =>{
  let IconName;

  switch (route.name){
    case 'Home':
    IconName = "home-circle-outline"
    break;
    case "ExerciseScreensStack":
    IconName = "basketball"
    break;
    case 'RoutinesStack':
    IconName = "walk"
    break;
    case 'UserProfileStack':
    IconName ="account-circle"
    break;
    case 'PhysicalState':
    IconName ="apps"
    break;
  }

  return(
    <Icon type='material-community' name={IconName} size={22} color={color}/>
  );
}

export default App