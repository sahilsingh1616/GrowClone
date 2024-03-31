import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../screen/Splash'
import OtpScreen from '../screen/OtpScreen'
import Home from '../screen/Home'


const Stack=createStackNavigator()
const AppNavigator = () => {
  return (
   <NavigationContainer>
<Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='OtpScreen' component={OtpScreen}/>
        <Stack.Screen name='Home' component={Home}/>



   
</Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})