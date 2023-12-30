import React from 'react'
import { StyleSheet } from 'react-native'
import 'react-native-url-polyfill/auto'
import { shitwiseDB } from './src/components/supabaseConfig'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import ShitListEntryScreen from './src/screens/ShitListEntryScreen';


export const channel = shitwiseDB
  .channel('schema-db-changes')
  .on('postgres_changes', { event: 'INSERT', schema: 'public'}, (payload) => 
  console.log('payload')
  ).subscribe()


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ShitListEntryScreen" component={ShitListEntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nextShitterDisplay: {
    flex: 35
  },
  shitListDisplay: {
    flex: 65
  }
})
export default App