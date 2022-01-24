import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444',
      }}>
      <Stack.Screen
        name="GameZone"
        component={Home}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="GameZone" />
            ),
          };
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{title: 'Review Details'}}
      />
    </Stack.Navigator>
  );
}

export function AboutStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444',
      }}>
      <Stack.Screen
        name="About GameZone"
        component={About}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="About GameZone" />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}
