import 'react-native-url-polyfill/auto'
import { StyleSheet, } from 'react-native';
import { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { supabase } from './lib/supabase';

import { NavBar } from './layout';
import { HomeScreen, LogScreen, OptionsScreen, CategoryScreen, ExerciseScreen, NewRoutineScreen, ExerciseDetailScreen, LoginScreen, ExerciseInput } from './screens';

const Stack = createStackNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoryScreen} />
      <Stack.Screen name='Exercises' component={ExerciseScreen} />
      <Stack.Screen name='New Routine' component={NewRoutineScreen} />
      <Stack.Screen name='Exercise Detail' component={ExerciseDetailScreen} />
      <Stack.Screen name='Exercise Input' component={ExerciseInput} />
    </Stack.Navigator>
  )
}


const Tab = createMaterialTopTabNavigator()
const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Log' component={LogScreen} />
      <Tab.Screen name='Options' component={OptionsScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session))
    supabase.auth.onAuthStateChange((_event, session) => setSession(session))
  }, [])

  return (
    <NavigationContainer>
      <NavBar />
      {session ? <MyTabs /> : <LoginScreen />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
