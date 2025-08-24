import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/assets/screens/Home'
import AddOrganisation from './src/assets/screens/AddOrganisation'
const Stack = createStackNavigator()

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='AddOrganisation' component={AddOrganisation}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App